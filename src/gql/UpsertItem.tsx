import { gql } from 'apollo-boost';
import {
  ItemWhereUniqueInput,
  ItemCreateInput,
  ItemUpdateInput,
  Category,
  Item,
  Location,
  Tag,
  User,
} from '../generated/graphql';

export type UpsertItemMutationVariables = {
  where: ItemWhereUniqueInput;
  create: ItemCreateInput;
  update: ItemUpdateInput;
};

export type Maybe<T> = T | null;

export type UpsertItemMutation = { __typename?: 'Mutation' } & {
  upsertOneItem?: Maybe<
    { __typename?: 'Item' } & Pick<
      Item,
      'id' | 'description' | 'model' | 'spark' | 'count' | 'monetaryValue' | 'link' | 'notes' | 'image'
    > & {
        owner: { __typename?: 'User' } & Pick<User, 'email'>;
        categories: Array<{ __typename?: 'Category' } & Pick<Category, 'id' | 'title' | 'ownerId'>>;
        locations: Array<{ __typename?: 'Location' } & Pick<Location, 'id' | 'title' | 'ownerId'>>;
        tags: Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'title' | 'ownerId'>>;
      }
  >;
};

export const UpsertItemDocument = gql`
  mutation UpsertItem($update: ItemUpdateInput!, $where: ItemWhereUniqueInput!, $create: ItemCreateInput!) {
    upsertOneItem(update: $update, where: $where, create: $create) {
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
      categories {
        id
        title
        ownerId
      }
      locations {
        id
        title
        ownerId
      }
      tags {
        id
        title
        ownerId
      }
    }
  }
`;
