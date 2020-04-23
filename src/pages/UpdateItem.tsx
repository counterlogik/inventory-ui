import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GetItemQuery, Item, ItemUpdateInput, ItemWhereUniqueInput } from '../generated/graphql';

const UPDATE_ITEM = gql`
  mutation UpdateItem($data: ItemUpdateInput!, $where: ItemWhereUniqueInput!) {
    updateOneItem(data: $data, where: $where) {
      id
      owner {
        email
      }
      description
      model
      spark
      count
      monetaryValue
      link
      notes
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
  const [count, setCount] = useState(1);
  const [monetaryValue, setMonetaryValue] = useState(0);
  const [link, setLink] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState('');

  const { loading: queryLoading, error: queryError, data } = useQuery<GetItemQuery>(UPDATE_ITEM, {
    variables: { id: props.itemId },
  });
  const [updateItem, { loading: mutationLoading, error: mutationError }] = useMutation<
    { updateItem: Item },
    { data: ItemUpdateInput; where: ItemWhereUniqueInput }
  >(UPDATE_ITEM, {
    variables: {
      data: {
        description,
        model,
        count,
        monetaryValue,
        link,
        notes,
        image,
      },
      where: {
        id: props.itemId ? parseInt(props.itemId) : null,
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
          <input name='description' onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p>
          <label htmlFor='model'>model</label>
          <input type='model' onChange={(e) => setModel(e.target.value)} />
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
        <p>
          <label htmlFor='image'>image</label>
          <input name='image' onChange={(e) => setImage(e.target.value)} />
        </p>
        <button onClick={() => description && updateItem()}>update</button>
      </form>
      {mutationLoading && <p>loading...</p>}
      {mutationError && <p>error. please try again</p>}
    </div>
  );
}
