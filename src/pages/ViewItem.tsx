import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps, Link } from '@reach/router';
import { GetItemQuery, GetItemQueryVariables } from '../generated/graphql';

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
  const { loading, error, data } = useQuery<GetItemQuery, GetItemQueryVariables>(GET_ITEM, {
    variables: { where: { id: props.itemId ? parseInt(props.itemId) : null } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return props.itemId && data && data.item ? (
    <div className='wrapper'>
      <div className='details'>
        <h4>{data.item.description}</h4>
        {data.item.model && <h5>{data.item.model}</h5>}
        {data.item.spark && <h6>{data.item.spark}</h6>}
        {data.item.count && <div className='detail'>{data.item.count}</div>}
        {data.item.monetaryValue && <div className='detail'>{data.item.monetaryValue}</div>}
        {data.item.link && <div className='detail'>{data.item.link}</div>}
        {data.item.notes && <div className='detail'>{data.item.notes}</div>}
        {data.item.image && <div className='detail'>{data.item.image}</div>}
      </div>
      <Link to={'/updateItem/' + props.itemId}>edit this item</Link>
    </div>
  ) : (
    <p>No item found, sending you back for now!</p>
  );
}
