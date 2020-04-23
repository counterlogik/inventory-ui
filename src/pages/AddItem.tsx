import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { Item, ItemCreateInput } from '../generated/graphql';

const ADD_ITEM = gql`
  mutation AddItem($data: ItemCreateInput!) {
    createOneItem(data: $data) {
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

export default function AddItem(props: RouteComponentProps) {
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  const [count, setCount] = useState(1);
  const [monetaryValue, setMonetaryValue] = useState(0);
  const [link, setLink] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState('');

  const [addItem, { error, data }] = useMutation<{ addItem: Item }, { data: ItemCreateInput }>(ADD_ITEM, {
    variables: {
      data: {
        owner: { connect: { id: 1 } },
        description,
        model,
        count,
        monetaryValue,
        link,
        notes,
        image,
      },
    },
  });

  return (
    <div>
      <h3>+ add item</h3>
      {error ? <p>oh no! {error.message}</p> : null}
      {data && data.addItem ? <p>item saved!</p> : null}
      <form>
        <p>
          <label htmlFor='description'>description</label>
          <input name='description' onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p>
          <label htmlFor='model'>model</label>
          <input type='model' onChange={(e) => setModel(e.target.value)} />
        </p>
        <p>
          <label htmlFor='count'>count</label>
          <input type='number' name='count' onChange={(e) => setCount(+e.target.value)} />
        </p>
        <p>
          <label htmlFor='monetaryValue'>monetaryValue</label>
          <input type='number' name='monetaryValue' onChange={(e) => setMonetaryValue(+e.target.value)} />
        </p>
        <p>
          <label htmlFor='link'>link</label>
          <input name='link' onChange={(e) => setLink(e.target.value)} />
        </p>
        <p>
          <label htmlFor='notes'>notes</label>
          <input name='notes' onChange={(e) => setNotes(e.target.value)} />
        </p>
        <p>
          <label htmlFor='image'>image</label>
          <input name='image' onChange={(e) => setImage(e.target.value)} />
        </p>
        <button onClick={() => description && addItem()}>+ add item</button>
      </form>
    </div>
  );
}
