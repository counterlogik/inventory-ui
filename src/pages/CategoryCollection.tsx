import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GetCategoriesDocument, GetCategoriesQuery, Category } from '../generated/graphql';

export default function CategoryCollection(props: RouteComponentProps) {
  const { loading, error, data } = useQuery<GetCategoriesQuery>(GetCategoriesDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.categories.map((category: Pick<Category, 'id' | 'title'>) => {
        return <p key={category.id}>{category.title}</p>;
      })}
    </>
  );
}
