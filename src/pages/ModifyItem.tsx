import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

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

const GET_ITEM_QUERY = gql`
  query getItem($id: number!) {
    item {
      id
      description
      model
      categories {
        id
        title
      }
      locations {
        id
        title
      }
      spark
      count
      monetaryValue
      link
      notes
      tags {
        id
        title
      }
      image
    }
  }
`;

const CREATE_ITEM_MUTATION = gql`
  query updateItem($id: number!) {
    item(
      description: $description
      model: $model
      categories: $categories
      locations: $locations
      spark: $spark
      count: $count
      monetaryValue: $monetaryValue
      link: $link
      notes: $notes
      tags: $tags
      image: $image
    ) {
      id
      description
      model
      categories {
        id
        title
      }
      locations {
        id
        title
      }
      spark
      count
      monetaryValue
      link
      notes
      tags {
        id
        title
      }
      image
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  query updateItem($id: number!) {
    item {
      id
      description
      model
      categories {
        id
        title
      }
      locations {
        id
        title
      }
      spark
      count
      monetaryValue
      link
      notes
      tags {
        id
        title
      }
      image
    }
  }
`;

function Item() {
  const { loading, error, data } = useQuery<Item>(GET_ITEM_QUERY);
  const { loading, error, data } = useMutation<Item>(CREATE_ITEM_MUTATION);
  const { loading, error, data } = useMutation<Item>(UPDATE_ITEM_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data ? <p key={data.id}>{JSON.stringify(data)}</p> : <p>No item found, sending you back for now!</p>;
}

function ItemForm() {
  return (
    <div className='item-form'>
      <Item />
    </div>
  );
}

export default ItemForm;
