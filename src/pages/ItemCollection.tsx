import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps, Link } from '@reach/router';
import { GetItemsDocument, GetItemsQuery, Item } from '../generated/graphql';

export default function ItemCollection(props: RouteComponentProps) {
  const { loading, error, data } = useQuery<GetItemsQuery>(GetItemsDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.items.map((item: Pick<Item, 'id' | 'description' | 'model'>) => {
        return (
          <p key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.model} {item.description}
            </Link>
          </p>
        );
      })}
    </>
  );
}
