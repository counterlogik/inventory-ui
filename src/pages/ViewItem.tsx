import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GetItemDocument, GetItemQuery, GetItemQueryVariables } from '../generated/graphql';
import UpdateItem from './UpdateItem';

interface ViewItemProps extends RouteComponentProps {
  itemId?: string;
}

export default function ViewItem(props: ViewItemProps) {
  const [underEdit, setUnderEdit] = useState(false);

  const { loading, error, data } = useQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, {
    variables: { where: { id: props.itemId ? parseInt(props.itemId) : null } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return props.itemId && data && data.item ? (
    <div className='wrapper'>
      <button onClick={() => setUnderEdit(!underEdit)}>toggle edit mode</button>
      {!underEdit ? (
        <div className='details'>
          <h4>{data.item.description} [viewing]</h4>
          {data.item.model && <h5>{data.item.model}</h5>}
          {data.item.spark && <h6>{data.item.spark}</h6>}
          {data.item.count && <div className='detail'>{data.item.count}</div>}
          {data.item.monetaryValue && <div className='detail'>{data.item.monetaryValue}</div>}
          {data.item.link && <div className='detail'>{data.item.link}</div>}
          {data.item.notes && <div className='detail'>{data.item.notes}</div>}
          {data.item.image && <div className='detail'>{data.item.image}</div>}
          {data.item.categories?.length && <div className='detail'>{JSON.stringify(data.item.categories)}</div>}
          {data.item.locations?.length && <div className='detail'>{JSON.stringify(data.item.locations)}</div>}
          {data.item.tags?.length && <div className='detail'>{JSON.stringify(data.item.tags)}</div>}
        </div>
      ) : (
        <UpdateItem
          {...{
            id: data.item.id,
            description: data.item.description,
            model: data.item.model,
            count: data.item.count,
            monetaryValue: data.item.monetaryValue,
            link: data.item.link,
            notes: data.item.notes,
            image: data.item.image,
            categories: data.item.categories,
            locations: data.item.locations,
            tags: data.item.tags,
            removeUnderEdit: () => setUnderEdit(false),
          }}
        />
      )}
    </div>
  ) : (
    <p>No item found, sending you back for now!</p>
  );
}
