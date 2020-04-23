import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GetCategoriesQuery, Category } from '../generated/graphql';

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      title
      description
      image
      items {
        id
      }
    }
  }
`;

export default function CategoryCollection(props: RouteComponentProps) {
  const { loading, error, data } = useQuery<GetCategoriesQuery>(GET_CATEGORIES);

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
