import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GetItemQuery, Item } from '../generated/graphql';

const GET_ITEM = gql`
  query getItem($where: ItemWhereUniqueInput!) {
    item(where: $where) {
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

interface ViewItemProps extends RouteComponentProps {
  itemId?: string;
}

export default function ViewItem(props: ViewItemProps) {
  const { loading, error, data } = useQuery<GetItemQuery>(GET_ITEM, {
    variables: { where: { id: props.itemId ? parseInt(props.itemId) : null } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data ? (
    <p key={data?.item?.id}>
      {data?.item?.id} {data?.item?.description}
    </p>
  ) : (
    <p>No item found, sending you back for now!</p>
  );
}
