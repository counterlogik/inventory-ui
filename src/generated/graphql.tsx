import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  item?: Maybe<Item>;
  items: Array<Item>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  categoriesByUser?: Maybe<Array<Category>>;
  locationsByUser?: Maybe<Array<Location>>;
  tagsByUser?: Maybe<Array<Tag>>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput;
};


export type QueryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryLocationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LocationWhereUniqueInput>;
  before?: Maybe<LocationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCategoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CategoryWhereUniqueInput>;
  before?: Maybe<CategoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesByUserArgs = {
  ownerId?: Maybe<Scalars['Int']>;
};


export type QueryLocationsByUserArgs = {
  ownerId?: Maybe<Scalars['Int']>;
};


export type QueryTagsByUserArgs = {
  ownerId?: Maybe<Scalars['Int']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  locations: Array<Location>;
  tags: Array<Tag>;
  items: Array<Item>;
};


export type UserCategoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CategoryWhereUniqueInput>;
  before?: Maybe<CategoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserLocationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LocationWhereUniqueInput>;
  before?: Maybe<LocationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTagsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  ownerId_title?: Maybe<OwnerIdTitleCompoundUniqueInput>;
};

export type OwnerIdTitleCompoundUniqueInput = {
  ownerId: Scalars['Int'];
  title: Scalars['String'];
};

export type Category = {
   __typename?: 'Category';
  id: Scalars['Int'];
  owner: User;
  ownerId: Scalars['Int'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  items: Array<Item>;
};


export type CategoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Item = {
   __typename?: 'Item';
  id: Scalars['Int'];
  owner: User;
  ownerId: Scalars['Int'];
  description: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  locations: Array<Location>;
  spark?: Maybe<Spark>;
  count: Scalars['Int'];
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags: Array<Tag>;
  image?: Maybe<Scalars['String']>;
};


export type ItemCategoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CategoryWhereUniqueInput>;
  before?: Maybe<CategoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ItemLocationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LocationWhereUniqueInput>;
  before?: Maybe<LocationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ItemTagsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  ownerId_title?: Maybe<OwnerIdTitleCompoundUniqueInput>;
};

export type Location = {
   __typename?: 'Location';
  id: Scalars['Int'];
  owner: User;
  ownerId: Scalars['Int'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  items: Array<Item>;
};


export type LocationItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum Spark {
  Lose = 'LOSE',
  Like = 'LIKE',
  Love = 'LOVE',
  Need = 'NEED'
}

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  ownerId_title?: Maybe<OwnerIdTitleCompoundUniqueInput>;
};

export type Tag = {
   __typename?: 'Tag';
  id: Scalars['Int'];
  owner: User;
  ownerId: Scalars['Int'];
  title: Scalars['String'];
  items: Array<Item>;
};


export type TagItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ItemWhereUniqueInput>;
  before?: Maybe<ItemWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createOneUser: User;
  createOneLocation: Location;
  createOneCategory: Category;
  createOneTag: Tag;
  createOneItem: Item;
  deleteOneCategory?: Maybe<Category>;
  deleteOneItem?: Maybe<Item>;
  updateOneUser?: Maybe<User>;
  updateOneLocation?: Maybe<Location>;
  updateOneCategory?: Maybe<Category>;
  updateOneTag?: Maybe<Tag>;
  updateOneItem?: Maybe<Item>;
  upsertOneItem: Item;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateOneItemArgs = {
  data: ItemCreateInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneItemArgs = {
  where: ItemWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateOneItemArgs = {
  data: ItemUpdateInput;
  where: ItemWhereUniqueInput;
};


export type MutationUpsertOneItemArgs = {
  where: ItemWhereUniqueInput;
  create: ItemCreateInput;
  update: ItemUpdateInput;
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateManyWithoutOwnerInput>;
  items?: Maybe<ItemCreateManyWithoutOwnerInput>;
};


export type CategoryCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<CategoryCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  items?: Maybe<ItemCreateManyWithoutCategoriesInput>;
};

export type ItemCreateManyWithoutCategoriesInput = {
  create?: Maybe<Array<ItemCreateWithoutCategoriesInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
};

export type ItemCreateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutItemsInput;
  locations?: Maybe<LocationCreateManyWithoutItemsInput>;
  tags?: Maybe<TagCreateManyWithoutItemsInput>;
};

export type UserCreateOneWithoutItemsInput = {
  create?: Maybe<UserCreateWithoutItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutItemsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateManyWithoutOwnerInput>;
};

export type LocationCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<LocationCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
};

export type LocationCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  items?: Maybe<ItemCreateManyWithoutLocationsInput>;
};

export type ItemCreateManyWithoutLocationsInput = {
  create?: Maybe<Array<ItemCreateWithoutLocationsInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
};

export type ItemCreateWithoutLocationsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutItemsInput;
  categories?: Maybe<CategoryCreateManyWithoutItemsInput>;
  tags?: Maybe<TagCreateManyWithoutItemsInput>;
};

export type CategoryCreateManyWithoutItemsInput = {
  create?: Maybe<Array<CategoryCreateWithoutItemsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateWithoutItemsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutCategoriesInput;
};

export type UserCreateOneWithoutCategoriesInput = {
  create?: Maybe<UserCreateWithoutCategoriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateManyWithoutOwnerInput>;
  items?: Maybe<ItemCreateManyWithoutOwnerInput>;
};

export type TagCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<TagCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  items?: Maybe<ItemCreateManyWithoutTagsInput>;
};

export type ItemCreateManyWithoutTagsInput = {
  create?: Maybe<Array<ItemCreateWithoutTagsInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
};

export type ItemCreateWithoutTagsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutItemsInput;
  categories?: Maybe<CategoryCreateManyWithoutItemsInput>;
  locations?: Maybe<LocationCreateManyWithoutItemsInput>;
};

export type LocationCreateManyWithoutItemsInput = {
  create?: Maybe<Array<LocationCreateWithoutItemsInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
};

export type LocationCreateWithoutItemsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutLocationsInput;
};

export type UserCreateOneWithoutLocationsInput = {
  create?: Maybe<UserCreateWithoutLocationsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutLocationsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateManyWithoutOwnerInput>;
  items?: Maybe<ItemCreateManyWithoutOwnerInput>;
};

export type ItemCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<ItemCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
};

export type ItemCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutItemsInput>;
  locations?: Maybe<LocationCreateManyWithoutItemsInput>;
  tags?: Maybe<TagCreateManyWithoutItemsInput>;
};

export type TagCreateManyWithoutItemsInput = {
  create?: Maybe<Array<TagCreateWithoutItemsInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateWithoutItemsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  owner: UserCreateOneWithoutTagsInput;
};

export type UserCreateOneWithoutTagsInput = {
  create?: Maybe<UserCreateWithoutTagsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutTagsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateManyWithoutOwnerInput>;
  items?: Maybe<ItemCreateManyWithoutOwnerInput>;
};

export type LocationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutLocationsInput;
  items?: Maybe<ItemCreateManyWithoutLocationsInput>;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutCategoriesInput;
  items?: Maybe<ItemCreateManyWithoutCategoriesInput>;
};

export type TagCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  owner: UserCreateOneWithoutTagsInput;
  items?: Maybe<ItemCreateManyWithoutTagsInput>;
};

export type ItemCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutItemsInput;
  categories?: Maybe<CategoryCreateManyWithoutItemsInput>;
  locations?: Maybe<LocationCreateManyWithoutItemsInput>;
  tags?: Maybe<TagCreateManyWithoutItemsInput>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  items?: Maybe<ItemUpdateManyWithoutOwnerInput>;
};

export type CategoryUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<CategoryCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutOwnerInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutOwnerDataInput;
};

export type CategoryUpdateWithoutOwnerDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  items?: Maybe<ItemUpdateManyWithoutCategoriesInput>;
};

export type ItemUpdateManyWithoutCategoriesInput = {
  create?: Maybe<Array<ItemCreateWithoutCategoriesInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
  set?: Maybe<Array<ItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>;
  delete?: Maybe<Array<ItemWhereUniqueInput>>;
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>;
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type ItemUpdateWithWhereUniqueWithoutCategoriesInput = {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutCategoriesDataInput;
};

export type ItemUpdateWithoutCategoriesDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutItemsInput>;
  locations?: Maybe<LocationUpdateManyWithoutItemsInput>;
  tags?: Maybe<TagUpdateManyWithoutItemsInput>;
};

export type UserUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<UserCreateWithoutItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutItemsDataInput>;
  upsert?: Maybe<UserUpsertWithoutItemsInput>;
};

export type UserUpdateWithoutItemsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
};

export type LocationUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<LocationCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type LocationUpdateWithWhereUniqueWithoutOwnerInput = {
  where: LocationWhereUniqueInput;
  data: LocationUpdateWithoutOwnerDataInput;
};

export type LocationUpdateWithoutOwnerDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  items?: Maybe<ItemUpdateManyWithoutLocationsInput>;
};

export type ItemUpdateManyWithoutLocationsInput = {
  create?: Maybe<Array<ItemCreateWithoutLocationsInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
  set?: Maybe<Array<ItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>;
  delete?: Maybe<Array<ItemWhereUniqueInput>>;
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutLocationsInput>>;
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>;
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutLocationsInput>>;
};

export type ItemUpdateWithWhereUniqueWithoutLocationsInput = {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutLocationsDataInput;
};

export type ItemUpdateWithoutLocationsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutItemsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutItemsInput>;
  tags?: Maybe<TagUpdateManyWithoutItemsInput>;
};

export type CategoryUpdateManyWithoutItemsInput = {
  create?: Maybe<Array<CategoryCreateWithoutItemsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutItemsInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutItemsDataInput;
};

export type CategoryUpdateWithoutItemsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutCategoriesInput>;
};

export type UserUpdateOneRequiredWithoutCategoriesInput = {
  create?: Maybe<UserCreateWithoutCategoriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCategoriesDataInput>;
  upsert?: Maybe<UserUpsertWithoutCategoriesInput>;
};

export type UserUpdateWithoutCategoriesDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  items?: Maybe<ItemUpdateManyWithoutOwnerInput>;
};

export type TagUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<TagCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type TagUpdateWithWhereUniqueWithoutOwnerInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutOwnerDataInput;
};

export type TagUpdateWithoutOwnerDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  items?: Maybe<ItemUpdateManyWithoutTagsInput>;
};

export type ItemUpdateManyWithoutTagsInput = {
  create?: Maybe<Array<ItemCreateWithoutTagsInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
  set?: Maybe<Array<ItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>;
  delete?: Maybe<Array<ItemWhereUniqueInput>>;
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>;
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type ItemUpdateWithWhereUniqueWithoutTagsInput = {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutTagsDataInput;
};

export type ItemUpdateWithoutTagsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutItemsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutItemsInput>;
  locations?: Maybe<LocationUpdateManyWithoutItemsInput>;
};

export type LocationUpdateManyWithoutItemsInput = {
  create?: Maybe<Array<LocationCreateWithoutItemsInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type LocationUpdateWithWhereUniqueWithoutItemsInput = {
  where: LocationWhereUniqueInput;
  data: LocationUpdateWithoutItemsDataInput;
};

export type LocationUpdateWithoutItemsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutLocationsInput>;
};

export type UserUpdateOneRequiredWithoutLocationsInput = {
  create?: Maybe<UserCreateWithoutLocationsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutLocationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutLocationsInput>;
};

export type UserUpdateWithoutLocationsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  items?: Maybe<ItemUpdateManyWithoutOwnerInput>;
};

export type ItemUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<ItemCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<ItemWhereUniqueInput>>;
  set?: Maybe<Array<ItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>;
  delete?: Maybe<Array<ItemWhereUniqueInput>>;
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>;
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ItemUpdateWithWhereUniqueWithoutOwnerInput = {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutOwnerDataInput;
};

export type ItemUpdateWithoutOwnerDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutItemsInput>;
  locations?: Maybe<LocationUpdateManyWithoutItemsInput>;
  tags?: Maybe<TagUpdateManyWithoutItemsInput>;
};

export type TagUpdateManyWithoutItemsInput = {
  create?: Maybe<Array<TagCreateWithoutItemsInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type TagUpdateWithWhereUniqueWithoutItemsInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutItemsDataInput;
};

export type TagUpdateWithoutItemsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
};

export type UserUpdateOneRequiredWithoutTagsInput = {
  create?: Maybe<UserCreateWithoutTagsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutTagsDataInput>;
  upsert?: Maybe<UserUpsertWithoutTagsInput>;
};

export type UserUpdateWithoutTagsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  items?: Maybe<ItemUpdateManyWithoutOwnerInput>;
};

export type UserUpsertWithoutTagsInput = {
  update: UserUpdateWithoutTagsDataInput;
  create: UserCreateWithoutTagsInput;
};

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
};

export type TagScalarWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type ItemFilter = {
  every?: Maybe<ItemWhereInput>;
  some?: Maybe<ItemWhereInput>;
  none?: Maybe<ItemWhereInput>;
};

export type ItemWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  model?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  locations?: Maybe<LocationFilter>;
  spark?: Maybe<Spark>;
  count?: Maybe<IntFilter>;
  monetaryValue?: Maybe<NullableFloatFilter>;
  link?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  tags?: Maybe<TagFilter>;
  image?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ItemWhereInput>>;
  OR?: Maybe<Array<ItemWhereInput>>;
  NOT?: Maybe<Array<ItemWhereInput>>;
  owner?: Maybe<UserWhereInput>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  every?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  image?: Maybe<NullableStringFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  owner?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  image?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  locations?: Maybe<LocationFilter>;
  tags?: Maybe<TagFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type LocationFilter = {
  every?: Maybe<LocationWhereInput>;
  some?: Maybe<LocationWhereInput>;
  none?: Maybe<LocationWhereInput>;
};

export type LocationWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  image?: Maybe<NullableStringFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<LocationWhereInput>>;
  OR?: Maybe<Array<LocationWhereInput>>;
  NOT?: Maybe<Array<LocationWhereInput>>;
  owner?: Maybe<UserWhereInput>;
};

export type TagFilter = {
  every?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
};

export type TagWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  owner?: Maybe<UserWhereInput>;
};

export type NullableFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type TagUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type TagUpsertWithWhereUniqueWithoutItemsInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutItemsDataInput;
  create: TagCreateWithoutItemsInput;
};

export type ItemUpdateManyWithWhereNestedInput = {
  where: ItemScalarWhereInput;
  data: ItemUpdateManyDataInput;
};

export type ItemScalarWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  model?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  locations?: Maybe<LocationFilter>;
  spark?: Maybe<Spark>;
  count?: Maybe<IntFilter>;
  monetaryValue?: Maybe<NullableFloatFilter>;
  link?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  tags?: Maybe<TagFilter>;
  image?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ItemScalarWhereInput>>;
  OR?: Maybe<Array<ItemScalarWhereInput>>;
  NOT?: Maybe<Array<ItemScalarWhereInput>>;
};

export type ItemUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type ItemUpsertWithWhereUniqueWithoutOwnerInput = {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutOwnerDataInput;
  create: ItemCreateWithoutOwnerInput;
};

export type UserUpsertWithoutLocationsInput = {
  update: UserUpdateWithoutLocationsDataInput;
  create: UserCreateWithoutLocationsInput;
};

export type LocationUpdateManyWithWhereNestedInput = {
  where: LocationScalarWhereInput;
  data: LocationUpdateManyDataInput;
};

export type LocationScalarWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  image?: Maybe<NullableStringFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<LocationScalarWhereInput>>;
  OR?: Maybe<Array<LocationScalarWhereInput>>;
  NOT?: Maybe<Array<LocationScalarWhereInput>>;
};

export type LocationUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type LocationUpsertWithWhereUniqueWithoutItemsInput = {
  where: LocationWhereUniqueInput;
  update: LocationUpdateWithoutItemsDataInput;
  create: LocationCreateWithoutItemsInput;
};

export type ItemUpsertWithWhereUniqueWithoutTagsInput = {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutTagsDataInput;
  create: ItemCreateWithoutTagsInput;
};

export type TagUpsertWithWhereUniqueWithoutOwnerInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutOwnerDataInput;
  create: TagCreateWithoutOwnerInput;
};

export type UserUpsertWithoutCategoriesInput = {
  update: UserUpdateWithoutCategoriesDataInput;
  create: UserCreateWithoutCategoriesInput;
};

export type CategoryUpdateManyWithWhereNestedInput = {
  where: CategoryScalarWhereInput;
  data: CategoryUpdateManyDataInput;
};

export type CategoryScalarWhereInput = {
  id?: Maybe<IntFilter>;
  ownerId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  image?: Maybe<NullableStringFilter>;
  items?: Maybe<ItemFilter>;
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
};

export type CategoryUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type CategoryUpsertWithWhereUniqueWithoutItemsInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutItemsDataInput;
  create: CategoryCreateWithoutItemsInput;
};

export type ItemUpsertWithWhereUniqueWithoutLocationsInput = {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutLocationsDataInput;
  create: ItemCreateWithoutLocationsInput;
};

export type LocationUpsertWithWhereUniqueWithoutOwnerInput = {
  where: LocationWhereUniqueInput;
  update: LocationUpdateWithoutOwnerDataInput;
  create: LocationCreateWithoutOwnerInput;
};

export type UserUpsertWithoutItemsInput = {
  update: UserUpdateWithoutItemsDataInput;
  create: UserCreateWithoutItemsInput;
};

export type ItemUpsertWithWhereUniqueWithoutCategoriesInput = {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutCategoriesDataInput;
  create: ItemCreateWithoutCategoriesInput;
};

export type CategoryUpsertWithWhereUniqueWithoutOwnerInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutOwnerDataInput;
  create: CategoryCreateWithoutOwnerInput;
};

export type LocationUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutLocationsInput>;
  items?: Maybe<ItemUpdateManyWithoutLocationsInput>;
};

export type CategoryUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutCategoriesInput>;
  items?: Maybe<ItemUpdateManyWithoutCategoriesInput>;
};

export type TagUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
  items?: Maybe<ItemUpdateManyWithoutTagsInput>;
};

export type ItemUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  spark?: Maybe<Spark>;
  count?: Maybe<Scalars['Int']>;
  monetaryValue?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutItemsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutItemsInput>;
  locations?: Maybe<LocationUpdateManyWithoutItemsInput>;
  tags?: Maybe<TagUpdateManyWithoutItemsInput>;
};

export type GetCategoriesQueryVariables = {};


export type GetCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'title' | 'description' | 'image'>
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id'>
    )> }
  )> }
);

export type GetItemsQueryVariables = {};


export type GetItemsQuery = (
  { __typename?: 'Query' }
  & { items: Array<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'description' | 'model'>
  )> }
);

export type AddItemMutationVariables = {
  data: ItemCreateInput;
};


export type AddItemMutation = (
  { __typename?: 'Mutation' }
  & { createOneItem: (
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'description' | 'model' | 'spark' | 'count' | 'monetaryValue' | 'link' | 'notes' | 'image'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  ) }
);

export type GetUserCategoriesQueryVariables = {
  ownerId?: Maybe<Scalars['Int']>;
};


export type GetUserCategoriesQuery = (
  { __typename?: 'Query' }
  & { categoriesByUser?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'title'>
  )>> }
);

export type GetUserLocationsQueryVariables = {
  ownerId?: Maybe<Scalars['Int']>;
};


export type GetUserLocationsQuery = (
  { __typename?: 'Query' }
  & { locationsByUser?: Maybe<Array<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'title'>
  )>> }
);

export type GetUserTagsQueryVariables = {
  ownerId?: Maybe<Scalars['Int']>;
};


export type GetUserTagsQuery = (
  { __typename?: 'Query' }
  & { tagsByUser?: Maybe<Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>> }
);

export type UpdateItemMutationVariables = {
  data: ItemUpdateInput;
  where: ItemWhereUniqueInput;
};


export type UpdateItemMutation = (
  { __typename?: 'Mutation' }
  & { updateOneItem?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'description' | 'model' | 'spark' | 'count' | 'monetaryValue' | 'link' | 'notes' | 'image'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ), categories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'title' | 'ownerId'>
    )>, locations: Array<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'title' | 'ownerId'>
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title' | 'ownerId'>
    )> }
  )> }
);

export type AddOrUpdateItemMutationVariables = {
  update: ItemUpdateInput;
  where: ItemWhereUniqueInput;
  create: ItemCreateInput;
};


export type AddOrUpdateItemMutation = (
  { __typename?: 'Mutation' }
  & { upsertOneItem: (
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'description' | 'model' | 'spark' | 'count' | 'monetaryValue' | 'link' | 'notes' | 'image'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ), categories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'title' | 'ownerId'>
    )>, locations: Array<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'title' | 'ownerId'>
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title' | 'ownerId'>
    )> }
  ) }
);

export type GetItemQueryVariables = {
  where: ItemWhereUniqueInput;
};


export type GetItemQuery = (
  { __typename?: 'Query' }
  & { item?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'ownerId' | 'description' | 'model' | 'spark' | 'count' | 'monetaryValue' | 'link' | 'notes' | 'image'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ), categories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'title'>
    )>, locations: Array<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'title'>
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )> }
  )> }
);


export const GetCategoriesDocument = gql`
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

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
      }
export function useGetCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = ApolloReactCommon.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetItemsDocument = gql`
    query getItems {
  items {
    id
    description
    model
  }
}
    `;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, baseOptions);
      }
export function useGetItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, baseOptions);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = ApolloReactCommon.QueryResult<GetItemsQuery, GetItemsQueryVariables>;
export const AddItemDocument = gql`
    mutation AddItem($data: ItemCreateInput!) {
  createOneItem(data: $data) {
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
export type AddItemMutationFn = ApolloReactCommon.MutationFunction<AddItemMutation, AddItemMutationVariables>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddItemMutation, AddItemMutationVariables>) {
        return ApolloReactHooks.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument, baseOptions);
      }
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = ApolloReactCommon.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = ApolloReactCommon.BaseMutationOptions<AddItemMutation, AddItemMutationVariables>;
export const GetUserCategoriesDocument = gql`
    query getUserCategories($ownerId: Int) {
  categoriesByUser(ownerId: $ownerId) {
    id
    title
  }
}
    `;

/**
 * __useGetUserCategoriesQuery__
 *
 * To run a query within a React component, call `useGetUserCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCategoriesQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useGetUserCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserCategoriesQuery, GetUserCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserCategoriesQuery, GetUserCategoriesQueryVariables>(GetUserCategoriesDocument, baseOptions);
      }
export function useGetUserCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserCategoriesQuery, GetUserCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserCategoriesQuery, GetUserCategoriesQueryVariables>(GetUserCategoriesDocument, baseOptions);
        }
export type GetUserCategoriesQueryHookResult = ReturnType<typeof useGetUserCategoriesQuery>;
export type GetUserCategoriesLazyQueryHookResult = ReturnType<typeof useGetUserCategoriesLazyQuery>;
export type GetUserCategoriesQueryResult = ApolloReactCommon.QueryResult<GetUserCategoriesQuery, GetUserCategoriesQueryVariables>;
export const GetUserLocationsDocument = gql`
    query getUserLocations($ownerId: Int) {
  locationsByUser(ownerId: $ownerId) {
    id
    title
  }
}
    `;

/**
 * __useGetUserLocationsQuery__
 *
 * To run a query within a React component, call `useGetUserLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLocationsQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useGetUserLocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserLocationsQuery, GetUserLocationsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserLocationsQuery, GetUserLocationsQueryVariables>(GetUserLocationsDocument, baseOptions);
      }
export function useGetUserLocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserLocationsQuery, GetUserLocationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserLocationsQuery, GetUserLocationsQueryVariables>(GetUserLocationsDocument, baseOptions);
        }
export type GetUserLocationsQueryHookResult = ReturnType<typeof useGetUserLocationsQuery>;
export type GetUserLocationsLazyQueryHookResult = ReturnType<typeof useGetUserLocationsLazyQuery>;
export type GetUserLocationsQueryResult = ApolloReactCommon.QueryResult<GetUserLocationsQuery, GetUserLocationsQueryVariables>;
export const GetUserTagsDocument = gql`
    query getUserTags($ownerId: Int) {
  tagsByUser(ownerId: $ownerId) {
    id
    title
  }
}
    `;

/**
 * __useGetUserTagsQuery__
 *
 * To run a query within a React component, call `useGetUserTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTagsQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useGetUserTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserTagsQuery, GetUserTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserTagsQuery, GetUserTagsQueryVariables>(GetUserTagsDocument, baseOptions);
      }
export function useGetUserTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserTagsQuery, GetUserTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserTagsQuery, GetUserTagsQueryVariables>(GetUserTagsDocument, baseOptions);
        }
export type GetUserTagsQueryHookResult = ReturnType<typeof useGetUserTagsQuery>;
export type GetUserTagsLazyQueryHookResult = ReturnType<typeof useGetUserTagsLazyQuery>;
export type GetUserTagsQueryResult = ApolloReactCommon.QueryResult<GetUserTagsQuery, GetUserTagsQueryVariables>;
export const UpdateItemDocument = gql`
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
export type UpdateItemMutationFn = ApolloReactCommon.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, baseOptions);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = ApolloReactCommon.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const AddOrUpdateItemDocument = gql`
    mutation AddOrUpdateItem($update: ItemUpdateInput!, $where: ItemWhereUniqueInput!, $create: ItemCreateInput!) {
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
export type AddOrUpdateItemMutationFn = ApolloReactCommon.MutationFunction<AddOrUpdateItemMutation, AddOrUpdateItemMutationVariables>;

/**
 * __useAddOrUpdateItemMutation__
 *
 * To run a mutation, you first call `useAddOrUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrUpdateItemMutation, { data, loading, error }] = useAddOrUpdateItemMutation({
 *   variables: {
 *      update: // value for 'update'
 *      where: // value for 'where'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useAddOrUpdateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddOrUpdateItemMutation, AddOrUpdateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<AddOrUpdateItemMutation, AddOrUpdateItemMutationVariables>(AddOrUpdateItemDocument, baseOptions);
      }
export type AddOrUpdateItemMutationHookResult = ReturnType<typeof useAddOrUpdateItemMutation>;
export type AddOrUpdateItemMutationResult = ApolloReactCommon.MutationResult<AddOrUpdateItemMutation>;
export type AddOrUpdateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<AddOrUpdateItemMutation, AddOrUpdateItemMutationVariables>;
export const GetItemDocument = gql`
    query getItem($where: ItemWhereUniqueInput!) {
  item(where: $where) {
    id
    owner {
      email
    }
    ownerId
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

/**
 * __useGetItemQuery__
 *
 * To run a query within a React component, call `useGetItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
        return ApolloReactHooks.useQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, baseOptions);
      }
export function useGetItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, baseOptions);
        }
export type GetItemQueryHookResult = ReturnType<typeof useGetItemQuery>;
export type GetItemLazyQueryHookResult = ReturnType<typeof useGetItemLazyQuery>;
export type GetItemQueryResult = ApolloReactCommon.QueryResult<GetItemQuery, GetItemQueryVariables>;