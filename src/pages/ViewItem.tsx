import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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

const GET_ITEM = gql`
  query getItem($id: number!) {
    item(id: $id) {
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

function Item({ id = 1 }) {
  const { loading, error, data } = useQuery<Item>(GET_ITEM, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data ? <p key={data.id}>{JSON.stringify(data)}</p> : <p>No item found, sending you back for now!</p>;
}

function ItemView() {
  return (
    <div className='item'>
      <Item />
    </div>
  );
}

export default ItemView;
