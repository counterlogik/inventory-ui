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
  Item,
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

interface UpdateItemProps {
  id: number;
  description: string;
  model: string | null | undefined;
  count: number;
  monetaryValue: number | null | undefined;
  link: string | null | undefined;
  notes: string | null | undefined;
  image: string | null | undefined;
  removeUnderEdit: () => void;
}

export default function UpdateItem(itemData: UpdateItemProps) {
  const id = itemData.id;
  const [description, setDescription] = useState(itemData.description);
  const [model, setModel] = useState(itemData.model || '');
  const [count, setCount] = useState(itemData.count || 1);
  const [monetaryValue, setMonetaryValue] = useState(itemData.monetaryValue || 0);
  const [link, setLink] = useState(itemData.link || '');
  const [notes, setNotes] = useState(itemData.notes || '');
  const [image, setImage] = useState(itemData.image || '');

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
        },
        where: {
          id,
        },
      },
    },
  );

  return (
    <div>
      <h3>update item: {id}</h3>
      <h5>description: {description}</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateItem();
          itemData.removeUnderEdit();
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
        <button type='submit'>update item</button>
      </form>
      {loading && <p>updating...</p>}
      {error && <p>error. please try again</p>}
    </div>
  );
}
