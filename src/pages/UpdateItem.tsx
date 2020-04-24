import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
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
} from '../generated/graphql';
import { ItemIdTitleCompoundVariables } from '../interfaces/helper-interfaces';
import { ChipsCollectionInput } from '../components/ChipsCollectionInput';

const GET_USER_CATEGORIES = gql`
  query getUserCategories($ownerId: Int) {
    categoriesByUser(ownerId: $ownerId) {
      id
      title
    }
  }
`;

const GET_USER_LOCATIONS = gql`
  query getUserLocations($ownerId: Int) {
    locationsByUser(ownerId: $ownerId) {
      id
      title
    }
  }
`;

const GET_USER_TAGS = gql`
  query getUserTags($ownerId: Int) {
    tagsByUser(ownerId: $ownerId) {
      id
      title
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation UpdateItem($data: ItemUpdateInput!, $where: ItemWhereUniqueInput!) {
    updateOneItem(data: $data, where: $where) {
      id
      owner {
        email
      }
      description
      model
      spark
      count
      monetaryValue
      link
      notes
      image
      categories {
        id
        title
        ownerId
      }
    }
  }
`;

interface UpdateItemProps {
  id: number;
  description: string;
  model: string | null | undefined;
  count: number;
  monetaryValue: number | null | undefined;
  link: string | null | undefined;
  notes: string | null | undefined;
  image: string | null | undefined;
  categories: ItemIdTitleCompoundVariables[];
  locations: ItemIdTitleCompoundVariables[];
  tags: ItemIdTitleCompoundVariables[];
  removeUnderEdit: () => void;
}

export default function UpdateItem(props: UpdateItemProps): React.ReactElement<UpdateItemProps> {
  const id = props.id;
  const [description, setDescription] = useState(props.description);
  const [model, setModel] = useState(props.model || '');
  const [count, setCount] = useState(props.count || 1);
  const [monetaryValue, setMonetaryValue] = useState(props.monetaryValue || 0);
  const [link, setLink] = useState(props.link || '');
  const [notes, setNotes] = useState(props.notes || '');
  const [image, setImage] = useState(props.image || '');
  const [categories, setCategories] = useState(props.categories || []);
  const [disconnectCategories, setDisconnectCategories] = useState<ItemIdTitleCompoundVariables[]>([]);
  const [locations, setLocations] = useState(props.locations || []);
  const [disconnectLocations, setDisconnectLocations] = useState<ItemIdTitleCompoundVariables[]>([]);
  const [tags, setTags] = useState(props.tags || []);
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
            ...(categories.filter((category) => category.id).length && {
              connect: [
                ...categories
                  .filter((category) => category.id)
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
            ...(categories.filter((category) => !category.id).length && {
              create: [
                ...categories
                  .filter((category) => !category.id)
                  .map((newCategoryPlaceholder) => {
                    return {
                      title: newCategoryPlaceholder.title,
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

  return (
    <div>
      <h3>update item: {id}</h3>
      <h5>description: {description}</h5>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await updateItem();
          props.removeUnderEdit();
        }}
      >
        <p>
          <label htmlFor='description'>description</label>
          <input name='description' defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p>
          <label htmlFor='model'>model</label>
          <input name='model' defaultValue={model} onChange={(e) => setModel(e.target.value)} />
        </p>
        <p>
          <label htmlFor='count'>count</label>
          <input name='count' type='number' defaultValue={count} onChange={(e) => setCount(+e.target.value)} />
        </p>
        <p>
          <label htmlFor='monetary-value'>value in $</label>
          <input
            name='monetary-value'
            type='number'
            defaultValue={monetaryValue}
            onChange={(e) => setMonetaryValue(+e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='link'>link</label>
          <input name='link' defaultValue={link} onChange={(e) => setLink(e.target.value)} />
        </p>
        <p>
          <label htmlFor='notes'>notes</label>
          <input name='notes' defaultValue={notes} onChange={(e) => setNotes(e.target.value)} />
        </p>
        <p>
          <label htmlFor='image'>image</label>
          <input name='image' defaultValue={image} onChange={(e) => setImage(e.target.value)} />
        </p>

        <ChipsCollectionInput
          existingEntryOptions={userCategoriesData?.categoriesByUser as ItemIdTitleCompoundVariables[]}
          selectedEntries={categories}
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

        <p>{locations.length && JSON.stringify(locations)}</p>
        <p>{disconnectLocations.length && JSON.stringify(disconnectLocations)}</p>
        <p>{tags.length && JSON.stringify(tags)}</p>
        <p>{disconnectTags.length && JSON.stringify(disconnectTags)}</p>
        <button type='submit'>update item</button>
      </form>
      {loading && <p>updating...</p>}
      {error && <p>error. please try again</p>}
    </div>
  );
}
