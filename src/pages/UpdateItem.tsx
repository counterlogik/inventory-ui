import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

interface Item {
  id: number;
  description: string;
  model: string;
  categories: {
    id: number;
    title: string;
  }[];
  locations: {
    id: number;
    title: string;
  }[];
  spark: 'LIKE' | 'LOVE' | 'NEED' | 'LOSE';
  count: number;
  monetaryValue: number;
  link: string;
  notes: string;
  tags: {
    id: number;
    title: string;
  }[];
  image: string;
}

interface ItemDetails {
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

const GET_ITEM = gql`
  query getItem($id: number!) {
    item {
      id
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

const UPDATE_ITEM = gql`
  mutation UpdateItem(
    $id: String!
    $description: String!
    $model: String!
    # $categories: String!,
    # $locations: String!,
    $spark: String!
    $count: String!
    $monetaryValue: String!
    $link: String!
    $notes: String!
    # $tags: String!,
    $image: String!
  ) {
    updateItem(
      id: $id
      model: $model
      # categories: $categories,
      # locations: $locations,
      spark: $spark
      count: $count
      monetaryValue: $monetaryValue
      link: $link
      notes: $notes
      # tags: $tags,
      image: $image
    ) {
      id
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

interface UpdateItemProps extends RouteComponentProps {
  itemId?: string;
}

export default function UpdateItem(props: UpdateItemProps) {
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

  const { loading: queryLoading, error: queryError, data } = useQuery<Item>(GET_ITEM, {
    variables: { id: props.itemId },
  });
  const [updateItem, { loading: mutationLoading, error: mutationError }] = useMutation<
    { updateItem: Item },
    { item: ItemDetails }
  >(UPDATE_ITEM, {
    variables: {
      item: {
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

  if (queryLoading) return <p>loading...</p>;
  if (queryError) return <p>error</p>;

  return (
    <div>
      <h3>update item</h3>
      <form>
        <p>
          <label htmlFor='description'>description</label>
          <input name='description' value={data?.description} onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p>
          <label htmlFor='model'>model</label>
          <input type='model' value={data?.model} onChange={(e) => setModel(e.target.value)} />
        </p>
        {/* <p>
          <label htmlFor='categories'>categories</label>
          <input name='categories' value={data?.categories} onChange={(e) => setCategories(e.target.value)} />
        </p>
        <p>
          <label htmlFor='locations'>locations</label>
          <input name='locations' value={data?.locations} onChange={(e) => setLocations(e.target.value)} />
        </p> */}
        <p>
          <label htmlFor='spark'>spark</label>
          <select name='spark' id='spark' onBlur={(e) => setSpark(e.target.value)}>
            <option value='LIKE'>like</option>
            <option value='LOVE'>like</option>
            <option value='NEED'>need</option>
            <option value='LOSE'>like</option>
          </select>
          <input name='spark' value={data?.spark} onChange={(e) => setSpark(e.target.value)} />
        </p>
        <p>
          <label htmlFor='count'>count</label>
          <input type='number' name='count' value={data?.count} onChange={(e) => setCount(+e.target.value)} />
        </p>
        <p>
          <label htmlFor='monetaryValue'>monetaryValue</label>
          <input
            type='number'
            name='monetaryValue'
            value={data?.monetaryValue}
            onChange={(e) => setMonetaryValue(+e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='link'>link</label>
          <input name='link' value={data?.link} onChange={(e) => setLink(e.target.value)} />
        </p>
        <p>
          <label htmlFor='notes'>notes</label>
          <input name='notes' value={data?.notes} onChange={(e) => setNotes(e.target.value)} />
        </p>
        {/* <p>
          <label htmlFor='tags'>tags</label>
          <input name='tags' value={data?.tags} onChange={(e) => setTags(e.target.value)} />
        </p> */}
        <p>
          <label htmlFor='image'>image</label>
          <input name='image' value={data?.image} onChange={(e) => setImage(e.target.value)} />
        </p>
        <button onClick={() => description && updateItem()}>update</button>
      </form>
      {mutationLoading && <p>loading...</p>}
      {mutationError && <p>error. please try again</p>}
    </div>
  );
}
