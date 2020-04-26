import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import { RouteComponentProps, navigate } from '@reach/router';
import styled from 'styled-components';
import {
  UpsertItemDocument,
  UpsertItemMutationVariables,
  UpsertItemMutation,
  GetUserCategoriesQuery,
  GetUserCategoriesQueryVariables,
  GetUserCategoriesDocument,
  GetUserLocationsQuery,
  GetUserLocationsQueryVariables,
  GetUserLocationsDocument,
  GetUserTagsQuery,
  GetUserTagsQueryVariables,
  GetUserTagsDocument,
  Item,
  Spark as SparkSchemaDef,
} from '../generated/graphql';
import { ItemIdTitleCompoundVariables } from '../interfaces/helper-interfaces';
import { ChipsCollectionInput } from '../components/ChipsCollectionInput';

const sparkOptions = [...Object.values(SparkSchemaDef)] as const;
type Spark = typeof sparkOptions[number];

const HiddenInput = styled.input`
  display: none;
`;

const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    margin: 8px 0 8px 16px;
  }
`;

interface UpdateItemProps {
  item: Item;
  removeUnderEdit: () => void;
}

export function UpdateItem({ item, removeUnderEdit }: UpdateItemProps): React.ReactElement<UpdateItemProps> {
  return <ItemForm item={item} removeUnderEdit={removeUnderEdit} />;
}

interface ItemFormProps extends RouteComponentProps {
  id?: string;
  item?: Item;
  removeUnderEdit?: () => void | undefined;
  addOrUpdateItem?: () => void;
}

export default function ItemForm(props: ItemFormProps): React.ReactElement<ItemFormProps> {
  const { id, description, model, spark, count, monetaryValue, link, notes, image } = props.item
    ? props.item
    : {
        id: 0,
        description: '',
        model: '',
        spark: 'LIKE',
        count: 1,
        monetaryValue: 0,
        link: '',
        notes: '',
        image: '',
      };
  const removeUnderEdit = props.removeUnderEdit || undefined;
  const [simpleValues, setSimpleValues] = useState({
    description: description || '',
    model: model || '',
    spark: spark || 'LIKE',
    count: count || 1,
    monetaryValue: monetaryValue || 0,
    link: link || '',
    notes: notes || '',
    image: image || '',
  });

  const [currentCategories, setCategories] = useState(props?.item?.categories || []);
  const [currentLocations, setLocations] = useState(props?.item?.locations || []);
  const [currentTags, setTags] = useState(props?.item?.tags || []);

  const [disconnectCategories, setDisconnectCategories] = useState<ItemIdTitleCompoundVariables[]>([]);
  const [disconnectLocations, setDisconnectLocations] = useState<ItemIdTitleCompoundVariables[]>([]);
  const [disconnectTags, setDisconnectTags] = useState<ItemIdTitleCompoundVariables[]>([]);

  const [addOrUpdateItem, { loading, error }] = useMutation<UpsertItemMutation, UpsertItemMutationVariables>(
    UpsertItemDocument,
    {
      onCompleted: (data: UpsertItemMutation) => {
        navigate(`/items/${data.upsertOneItem.id}`);
      },
    },
  );

  const { loading: userCatgoriesLoading, error: userCatgoriesError, data: userCategoriesData } = useQuery<
    GetUserCategoriesQuery,
    GetUserCategoriesQueryVariables
  >(GetUserCategoriesDocument, {
    variables: { ownerId: 1 },
  });

  const { loading: userLocationsLoading, error: userLocationsError, data: userLocationsData } = useQuery<
    GetUserLocationsQuery,
    GetUserLocationsQueryVariables
  >(GetUserLocationsDocument, {
    variables: { ownerId: 1 },
  });

  const { loading: userTagsLoading, error: userTagsError, data: userTagsData } = useQuery<
    GetUserTagsQuery,
    GetUserTagsQueryVariables
  >(GetUserTagsDocument, {
    variables: { ownerId: 1 },
  });

  const handleInputChange = (event: React.ChangeEvent<{ name: string; value: string; type: string }>) => {
    setSimpleValues({
      ...simpleValues,
      [event.currentTarget.name]:
        event.currentTarget.type !== 'text' ? parseInt(event.target.value) : event.currentTarget.value,
    });
  };

  const hiddenEnumInputRef = useRef<HTMLInputElement>(null);

  const handleSparkToggleButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    const option: string | undefined = sparkOptions.find((option) => option === event.currentTarget.value);
    setSimpleValues({ ...simpleValues, spark: option });
  };

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = event.target.files;
    const data: FormData = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'inventory');

    const res = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    await setSimpleValues({
      ...simpleValues,
      image: file.secure_url,
    });
  };

  return (
    <div>
      <h3>{simpleValues.description || 'new item'}</h3>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await addOrUpdateItem({
            variables: {
              create: {
                ...(!id
                  ? {
                      owner: { connect: { id: 1 } },
                      description: simpleValues.description,
                      model: simpleValues.model,
                      spark: simpleValues.spark as SparkSchemaDef,
                      count: simpleValues.count,
                      monetaryValue: simpleValues.monetaryValue,
                      link: simpleValues.link,
                      notes: simpleValues.notes,
                      image: simpleValues.image,
                      categories: {
                        ...(currentCategories.filter((currentCategory) => currentCategory.id).length && {
                          connect: [
                            ...currentCategories
                              .filter((currentCategory) => currentCategory.id)
                              .map((existingCategory) => {
                                return {
                                  // eslint-disable-next-line @typescript-eslint/camelcase
                                  ownerId_title: {
                                    ownerId: 1,
                                    title: existingCategory.title,
                                  },
                                };
                              }),
                          ],
                        }),
                        ...(disconnectCategories.length && {
                          disconnect: [
                            ...disconnectCategories.map((disconnectCategory) => {
                              return {
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                ownerId_title: {
                                  ownerId: 1,
                                  title: disconnectCategory.title,
                                },
                              };
                            }),
                          ],
                        }),
                        ...(currentCategories.filter((currentCategory) => !currentCategory.id).length && {
                          create: [
                            ...currentCategories
                              .filter((currentCategory) => !currentCategory.id)
                              .map((newCategoryPlaceholder) => {
                                return {
                                  title: newCategoryPlaceholder.title,
                                  owner: { connect: { id: 1 } },
                                };
                              }),
                          ],
                        }),
                      },
                      locations: {
                        ...(currentLocations.filter((currentLocation) => currentLocation.id).length && {
                          connect: [
                            ...currentLocations
                              .filter((currentLocation) => currentLocation.id)
                              .map((existingLocation) => {
                                return {
                                  // eslint-disable-next-line @typescript-eslint/camelcase
                                  ownerId_title: {
                                    ownerId: 1,
                                    title: existingLocation.title,
                                  },
                                };
                              }),
                          ],
                        }),
                        ...(disconnectLocations.length && {
                          disconnect: [
                            ...disconnectLocations.map((disconnectLocation) => {
                              return {
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                ownerId_title: {
                                  ownerId: 1,
                                  title: disconnectLocation.title,
                                },
                              };
                            }),
                          ],
                        }),
                        ...(currentLocations.filter((currentLocation) => !currentLocation.id).length && {
                          create: [
                            ...currentLocations
                              .filter((currentLocation) => !currentLocation.id)
                              .map((newLocationPlaceholder) => {
                                return {
                                  title: newLocationPlaceholder.title,
                                  owner: { connect: { id: 1 } },
                                };
                              }),
                          ],
                        }),
                      },
                      tags: {
                        ...(currentTags.filter((currentTag) => currentTag.id).length && {
                          connect: [
                            ...currentTags
                              .filter((currentTag) => currentTag.id)
                              .map((existingTag) => {
                                return {
                                  // eslint-disable-next-line @typescript-eslint/camelcase
                                  ownerId_title: {
                                    ownerId: 1,
                                    title: existingTag.title,
                                  },
                                };
                              }),
                          ],
                        }),
                        ...(disconnectTags.length && {
                          disconnect: [
                            ...disconnectTags.map((disconnectTag) => {
                              return {
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                ownerId_title: {
                                  ownerId: 1,
                                  title: disconnectTag.title,
                                },
                              };
                            }),
                          ],
                        }),
                        ...(currentTags.filter((currentTag) => !currentTag.id).length && {
                          create: [
                            ...currentTags
                              .filter((currentTag) => !currentTag.id)
                              .map((newTagPlaceholder) => {
                                return {
                                  title: newTagPlaceholder.title,
                                  owner: { connect: { id: 1 } },
                                };
                              }),
                          ],
                        }),
                      },
                    }
                  : { owner: { connect: { id: 1 } }, description: 'CREATE IS INACTIVE THIS UPSERT CALL' }),
              },
              where: {
                id: id || 0, // This handles the addItem case when we load the form without an item id
              },
              update: {
                owner: { connect: { id: 1 } },
                description: simpleValues.description,
                model: simpleValues.model,
                spark: simpleValues.spark as SparkSchemaDef,
                count: simpleValues.count,
                monetaryValue: simpleValues.monetaryValue,
                link: simpleValues.link,
                notes: simpleValues.notes,
                image: simpleValues.image,
                categories: {
                  ...(currentCategories.filter((currentCategory) => currentCategory.id).length && {
                    connect: [
                      ...currentCategories
                        .filter((currentCategory) => currentCategory.id)
                        .map((existingCategory) => {
                          return {
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            ownerId_title: {
                              ownerId: 1,
                              title: existingCategory.title,
                            },
                          };
                        }),
                    ],
                  }),
                  ...(disconnectCategories.length && {
                    disconnect: [
                      ...disconnectCategories.map((disconnectCategory) => {
                        return {
                          // eslint-disable-next-line @typescript-eslint/camelcase
                          ownerId_title: {
                            ownerId: 1,
                            title: disconnectCategory.title,
                          },
                        };
                      }),
                    ],
                  }),
                  ...(currentCategories.filter((currentCategory) => !currentCategory.id).length && {
                    create: [
                      ...currentCategories
                        .filter((currentCategory) => !currentCategory.id)
                        .map((newCategoryPlaceholder) => {
                          return {
                            title: newCategoryPlaceholder.title,
                            owner: { connect: { id: 1 } },
                          };
                        }),
                    ],
                  }),
                },
                locations: {
                  ...(currentLocations.filter((currentLocation) => currentLocation.id).length && {
                    connect: [
                      ...currentLocations
                        .filter((currentLocation) => currentLocation.id)
                        .map((existingLocation) => {
                          return {
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            ownerId_title: {
                              ownerId: 1,
                              title: existingLocation.title,
                            },
                          };
                        }),
                    ],
                  }),
                  ...(disconnectLocations.length && {
                    disconnect: [
                      ...disconnectLocations.map((disconnectLocation) => {
                        return {
                          // eslint-disable-next-line @typescript-eslint/camelcase
                          ownerId_title: {
                            ownerId: 1,
                            title: disconnectLocation.title,
                          },
                        };
                      }),
                    ],
                  }),
                  ...(currentLocations.filter((currentLocation) => !currentLocation.id).length && {
                    create: [
                      ...currentLocations
                        .filter((currentLocation) => !currentLocation.id)
                        .map((newLocationPlaceholder) => {
                          return {
                            title: newLocationPlaceholder.title,
                            owner: { connect: { id: 1 } },
                          };
                        }),
                    ],
                  }),
                },
                tags: {
                  ...(currentTags.filter((currentTag) => currentTag.id).length && {
                    connect: [
                      ...currentTags
                        .filter((currentTag) => currentTag.id)
                        .map((existingTag) => {
                          return {
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            ownerId_title: {
                              ownerId: 1,
                              title: existingTag.title,
                            },
                          };
                        }),
                    ],
                  }),
                  ...(disconnectTags.length && {
                    disconnect: [
                      ...disconnectTags.map((disconnectTag) => {
                        return {
                          // eslint-disable-next-line @typescript-eslint/camelcase
                          ownerId_title: {
                            ownerId: 1,
                            title: disconnectTag.title,
                          },
                        };
                      }),
                    ],
                  }),
                  ...(currentTags.filter((currentTag) => !currentTag.id).length && {
                    create: [
                      ...currentTags
                        .filter((currentTag) => !currentTag.id)
                        .map((newTagPlaceholder) => {
                          return {
                            title: newTagPlaceholder.title,
                            owner: { connect: { id: 1 } },
                          };
                        }),
                    ],
                  }),
                },
              },
            },
          });

          removeUnderEdit && removeUnderEdit();
        }}
      >
        <FormControl fullWidth>
          <TextField
            required
            id='description'
            name='description'
            defaultValue={simpleValues.description}
            onChange={(event) => handleInputChange(event)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='model'
            name='model'
            defaultValue={simpleValues.model}
            onChange={(event) => handleInputChange(event)}
          />
        </FormControl>
        <FormControl fullWidth>
          <HiddenInput
            id='spark'
            name='spark'
            value={simpleValues.spark}
            ref={hiddenEnumInputRef}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor='spark'>
            <ButtonGroup color='primary' aria-label='contained primary button group'>
              {Object.values(sparkOptions).map((option: string, index: number) => (
                <Button
                  key={option}
                  value={option}
                  variant={option === simpleValues.spark ? 'contained' : 'outlined'}
                  onClick={(event) => handleSparkToggleButton(event, index)}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </label>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='count'
            name='count'
            type='number'
            defaultValue={simpleValues.count}
            onChange={(event) => handleInputChange(event)}
          />
        </FormControl>
        <FormControl fullWidth>
          <FilledInput
            id='monetaryValue'
            name='monetaryValue'
            type='number'
            defaultValue={simpleValues.monetaryValue}
            onChange={(event) => handleInputChange(event)}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='link'
            name='link'
            defaultValue={simpleValues.link}
            onChange={(event) => handleInputChange(event)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='notes'
            name='notes'
            defaultValue={simpleValues.notes}
            onChange={(event) => handleInputChange(event)}
          />
        </FormControl>
        {userCatgoriesLoading && <p>loading...</p>}
        {userCatgoriesError && <p>error. please try again</p>}
        <ChipsCollectionInput
          existingEntryOptions={userCategoriesData?.categoriesByUser as ItemIdTitleCompoundVariables[]}
          selectedEntries={currentCategories}
          disconnectEntries={disconnectCategories}
          setSelectedEntries={setCategories as (value: React.SetStateAction<ItemIdTitleCompoundVariables[]>) => {}}
          setDisconnectEntries={
            setDisconnectCategories as (
              value:
                | React.Dispatch<React.SetStateAction<ItemIdTitleCompoundVariables[]>>
                | ItemIdTitleCompoundVariables[],
            ) => {}
          }
        />
        {userLocationsLoading && <p>loading...</p>}
        {userLocationsError && <p>error. please try again</p>}
        <ChipsCollectionInput
          existingEntryOptions={userLocationsData?.locationsByUser as ItemIdTitleCompoundVariables[]}
          selectedEntries={currentLocations}
          disconnectEntries={disconnectLocations}
          setSelectedEntries={setLocations as (value: React.SetStateAction<ItemIdTitleCompoundVariables[]>) => {}}
          setDisconnectEntries={
            setDisconnectLocations as (
              value:
                | React.Dispatch<React.SetStateAction<ItemIdTitleCompoundVariables[]>>
                | ItemIdTitleCompoundVariables[],
            ) => {}
          }
        />
        {userTagsLoading && <p>loading...</p>}
        {userTagsError && <p>error. please try again</p>}
        <ChipsCollectionInput
          existingEntryOptions={userTagsData?.tagsByUser as ItemIdTitleCompoundVariables[]}
          selectedEntries={currentTags}
          disconnectEntries={disconnectTags}
          setSelectedEntries={setTags as (value: React.SetStateAction<ItemIdTitleCompoundVariables[]>) => {}}
          setDisconnectEntries={
            setDisconnectTags as (
              value:
                | React.Dispatch<React.SetStateAction<ItemIdTitleCompoundVariables[]>>
                | ItemIdTitleCompoundVariables[],
            ) => {}
          }
        />
        <FormControl fullWidth>
          <HiddenInput type='file' accept='image/*' id='file' name='file' onChange={uploadFile} />
          <label htmlFor='file'>
            <Button variant='contained' color='primary' component='span'>
              upload image
            </Button>
          </label>
        </FormControl>
        <ActionsGroup>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={() => (removeUnderEdit ? removeUnderEdit() : navigate('/'))}
            startIcon={<ClearIcon />}
          >
            Cancel
          </Button>
          <Button type='submit' variant='contained' color='primary' size='large' startIcon={<SaveIcon />}>
            Save
          </Button>
        </ActionsGroup>
      </form>
      {loading && <p>updating...</p>}
      {error && <p>error. please try again</p>}
    </div>
  );
}
