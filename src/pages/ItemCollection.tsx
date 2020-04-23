import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
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

interface ItemsData {
  items: Item[];
}

const GET_ITEMS = gql`
  query getItems {
    items {
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

export default function ItemCollection(props: RouteComponentProps) {
  const { loading, error, data } = useQuery<ItemsData>(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.items.map((item: Item) => {
        return <p key={item.id}>{JSON.stringify(item)}</p>;
      })}
    </>
  );
}
