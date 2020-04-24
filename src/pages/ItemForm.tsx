import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import {
  UpdateItemDocument,
  UpdateItemMutation,
  UpdateItemMutationVariables,
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
} from '../generated/graphql';
import { ItemIdTitleCompoundVariables } from '../interfaces/helper-interfaces';
import { ChipsCollectionInput } from '../components/ChipsCollectionInput';

interface UpdateItemProps {
  item: Item;
  removeUnderEdit: () => void;
}

export function UpdateItem({ item, removeUnderEdit }: UpdateItemProps): React.ReactElement<UpdateItemProps> {
  return <ItemForm item={item} removeUnderEdit={removeUnderEdit} />;
}

interface ItemFormProps extends RouteComponentProps {
  item?: Item;
  removeUnderEdit?: () => void;
  updateItem?: () => void;
  saveItem?: () => void;
}

export default function ItemForm({
  item: { id, description, model, count, monetaryValue, link, notes, image, categories, locations, tags },
  removeUnderEdit,
}: ItemFormProps): React.ReactElement<ItemFormProps> {
  const [simpleValues, setSimpleValues] = useState({
    description: '',
    model: '',
    count: 1,
    monetaryValue: 0,
    link: '',
    notes: '',
    image: '',
  });

  const [currentCategories, setCategories] = useState(categories || []);
  const [currentLocations, setLocations] = useState(locations || []);
  const [currentTags, setTags] = useState(tags || []);

  const [disconnectCategories, setDisconnectCategories] = useState<ItemIdTitleCompoundVariables[]>([]);
  const [disconnectLocations, setDisconnectLocations] = useState<ItemIdTitleCompoundVariables[]>([]);
  const [disconnectTags, setDisconnectTags] = useState<ItemIdTitleCompoundVariables[]>([]);

  const [updateItem, { loading, error }] = useMutation<UpdateItemMutation, UpdateItemMutationVariables>(
    UpdateItemDocument,
    {
      variables: {
        data: {
          id,
          description,
          model,
          count,
          monetaryValue,
          link,
          notes,
          image,
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
        where: {
          id,
        },
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

  const handleInputChange = (event: React.ChangeEvent<{ name: string; value: string }>) => {
    setSimpleValues({ ...simpleValues, [event.currentTarget.name]: event.currentTarget.value });
  };

  return (
    <div>
      <h3>{description || 'new item'}</h3>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (!description) return;
          await updateItem();
          removeUnderEdit();
        }}
      >
        <p>
          <label htmlFor='description'>description</label>
          <input name='description' defaultValue={description} onChange={(event) => handleInputChange(event)} />
        </p>
        <p>
          <label htmlFor='model'>model</label>
          <input name='model' defaultValue={model} onChange={(event) => handleInputChange(event)} />
        </p>
        <p>
          <label htmlFor='count'>count</label>
          <input name='count' type='number' defaultValue={count} onChange={(event) => handleInputChange(event)} />
        </p>
        <p>
          <label htmlFor='monetary-value'>value in $</label>
          <input
            name='monetary-value'
            type='number'
            defaultValue={monetaryValue}
            onChange={(event) => handleInputChange(event)}
          />
        </p>
        <p>
          <label htmlFor='link'>link</label>
          <input name='link' defaultValue={link} onChange={(event) => handleInputChange(event)} />
        </p>
        <p>
          <label htmlFor='notes'>notes</label>
          <input name='notes' defaultValue={notes} onChange={(event) => handleInputChange(event)} />
        </p>
        <p>
          <label htmlFor='image'>image</label>
          <input name='image' defaultValue={image} onChange={(event) => handleInputChange(event)} />
        </p>
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
        <button type='submit'>update item</button>
      </form>
      {loading && <p>updating...</p>}
      {error && <p>error. please try again</p>}
    </div>
  );
}
