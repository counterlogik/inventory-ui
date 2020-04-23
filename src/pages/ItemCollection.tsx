import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GetItemsQuery, Item } from '../generated/graphql';

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
  const { loading, error, data } = useQuery<GetItemsQuery>(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.items.map((item: Pick<Item, 'id' | 'description'>) => {
        return (
          <p key={item.id}>
            {item.id} {item.description}
          </p>
        );
      })}
    </>
  );
}
