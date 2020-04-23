import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  items: number[];
}

interface CategoriesData {
  categories: Category[];
}

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
  const { loading, error, data } = useQuery<CategoriesData>(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.categories.map((category: Category) => {
        return <p key={category.id}>{JSON.stringify(category)}</p>;
      })}
    </>
  );
}
