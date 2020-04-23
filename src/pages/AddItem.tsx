import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

interface Item {
  id: number;
  ownerId: number;
  description: string;
  model: string;
  // categories: {
  //   id: number;
  //   title: string;
  // }[];
  // locations: {
  //   id: number;
  //   title: string;
  // }[];
  spark: string;
  count: number;
  monetaryValue: number;
  link: string;
  notes: string;
  // tags: {
  //   id: number;
  //   title: string;
  // }[];
  image: string;
}

interface ItemDetails {
  owner: { connect: { id: number } };
  description: string;
  model: string;
  // categories: {
  //   id: number;
  //   title: string;
  // }[];
  // locations: {
  //   id: number;
  //   title: string;
  // }[];
  spark: string;
  count: number;
  monetaryValue: number;
  link: string;
  notes: string;
  // tags: {
  //   id: number;
  //   title: string;
  // }[];
  image: string;
}

const ADD_ITEM = gql`
  mutation AddItem($data: ItemCreateInput!) {
    createOneItem(data: $data) {
      id
      owner {
        email
      }
      description
      model
      # categories {
      # id
      # title
      # }
      # locations {
      # id
      # title
      # }
      spark
      count
      monetaryValue
      link
      notes
      # tags {
      # id
      # title
      # }
      image
    }
  }
`;

export default function AddItem(props: RouteComponentProps) {
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  // const [categories, setCategories] = useState('');
  // const [locations, setLocations] = useState('');
  const [spark, setSpark] = useState('LIKE');
  const [count, setCount] = useState(1);
  const [monetaryValue, setMonetaryValue] = useState(0);
  const [link, setLink] = useState('');
  const [notes, setNotes] = useState('');
  // const [tags, setTags] = useState('');
  const [image, setImage] = useState('');

  const [addItem, { error, data }] = useMutation<{ addItem: Item }, { data: ItemDetails }>(ADD_ITEM, {
    variables: {
      data: {
        owner: { connect: { id: 1 } },
        description,
        model,
        // categories,
        // locations,
        spark,
        count,
        monetaryValue,
        link,
        notes,
        // tags,
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
        {/* <p>
          <label htmlFor='categories'>categories</label>
          <input name='categories' onChange={(e) => setCategories(e.target.value)} />
        </p>
        <p>
          <label htmlFor='locations'>locations</label>
          <input name='locations' onChange={(e) => setLocations(e.target.value)} />
        </p> */}
        <p>
          <label htmlFor='spark'>spark</label>
          <select name='spark' id='spark' onBlur={(e) => setSpark(e.target.value)}>
            <option value='LIKE'>like</option>
            <option value='LOVE'>like</option>
            <option value='NEED'>need</option>
            <option value='LOSE'>like</option>
          </select>
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
        {/* <p>
          <label htmlFor='tags'>tags</label>
          <input name='tags' onChange={(e) => setTags(e.target.value)} />
        </p> */}
        <p>
          <label htmlFor='image'>image</label>
          <input name='image' onChange={(e) => setImage(e.target.value)} />
        </p>
        <button onClick={() => description && addItem()}>+ add item</button>
      </form>
    </div>
  );
}
