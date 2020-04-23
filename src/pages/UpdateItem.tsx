import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { RouteComponentProps, Link } from '@reach/router';
import {
  GetItemDocument,
  GetItemQuery,
  GetItemQueryVariables,
  UpdateItemDocument,
  UpdateItemMutation,
  UpdateItemMutationVariables,
} from '../generated/graphql';

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
    }
  }
`;

interface UpdateItemProps extends RouteComponentProps {
  itemId?: string;
}

export default function UpdateItem(props: UpdateItemProps) {
  const id = props.itemId ? parseInt(props.itemId) : null;
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  const [count, setCount] = useState(1);
  const [monetaryValue, setMonetaryValue] = useState(0);
  const [link, setLink] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState('');

  const { loading: queryLoading, error: queryError, data } = useQuery<GetItemQuery, GetItemQueryVariables>(
    GetItemDocument,
    {
      variables: { where: { id } },
    },
  );
  const [updateItem, { loading: mutationLoading, error: mutationError }] = useMutation<
    UpdateItemMutation,
    UpdateItemMutationVariables
  >(UpdateItemDocument, {
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
      },
      where: {
        id,
      },
    },
  });

  if (queryLoading) return <p>loading item...</p>;
  if (queryError) return <p>error loading item</p>;

  return (
    <div>
      <h3>update item: {id}</h3>
      <h5>description: {description}</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateItem();
        }}
      >
        <p>
          <label htmlFor='description'>description</label>
          <input
            name='description'
            defaultValue={data?.item?.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='model'>model</label>
          <input
            name='model'
            defaultValue={data?.item?.model || undefined}
            onChange={(e) => setModel(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='count'>count</label>
          <input
            name='count'
            type='number'
            defaultValue={data?.item?.count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='monetary-value'>value in $</label>
          <input
            name='monetary-value'
            type='number'
            defaultValue={data?.item?.monetaryValue || undefined}
            onChange={(e) => setMonetaryValue(+e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='link'>link</label>
          <input name='link' defaultValue={data?.item?.link || undefined} onChange={(e) => setLink(e.target.value)} />
        </p>
        <p>
          <label htmlFor='notes'>notes</label>
          <input
            name='notes'
            defaultValue={data?.item?.notes || undefined}
            onChange={(e) => setNotes(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='image'>image</label>
          <input
            name='image'
            defaultValue={data?.item?.image || undefined}
            onChange={(e) => setImage(e.target.value)}
          />
        </p>
        <button type='submit'>update item</button>
      </form>
      {mutationLoading && <p>updating item...</p>}
      {mutationError && <p>error updating. please try again</p>}
      {!mutationLoading && <Link to={'/viewItem/' + id}>view this item</Link>}
    </div>
  );
}
