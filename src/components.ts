import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "lists" */
export type Lists = {
  __typename?: 'lists';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** An array relationship */
  todos: Array<Todos>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "lists" */
export type ListsTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** input type for inserting array relation for remote table "lists" */
export type Lists_Arr_Rel_Insert_Input = {
  data: Array<Lists_Insert_Input>;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lists_Bool_Exp>>>;
  _not?: Maybe<Lists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Lists_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  todos?: Maybe<Todos_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** input type for inserting data into table "lists" */
export type Lists_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  todos?: Maybe<Todos_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "lists" */
export type Lists_Mutation_Response = {
  __typename?: 'lists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Lists>;
};

/** input type for inserting object relation for remote table "lists" */
export type Lists_Obj_Rel_Insert_Input = {
  data: Lists_Insert_Input;
};

/** ordering options when selecting data from "lists" */
export type Lists_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "lists" */
export type Lists_Pk_Columns_Input = {
  slug: Scalars['String'];
};

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "lists" */
  insert_lists?: Maybe<Lists_Mutation_Response>;
  /** insert a single row into the table: "lists" */
  insert_lists_one?: Maybe<Lists>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ListsArgs = {
  objects: Array<Lists_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Lists_OneArgs = {
  object: Lists_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


/** query root */
export type Query_RootListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};


/** query root */
export type Query_RootLists_By_PkArgs = {
  slug: Scalars['String'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


/** subscription root */
export type Subscription_RootListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLists_By_PkArgs = {
  slug: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  id: Scalars['uuid'];
  isDone: Scalars['Boolean'];
  /** An object relationship */
  list: Lists;
  listSlug: Scalars['String'];
  prio: Scalars['Int'];
  text: Scalars['String'];
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isDone?: Maybe<Boolean_Comparison_Exp>;
  list?: Maybe<Lists_Bool_Exp>;
  listSlug?: Maybe<String_Comparison_Exp>;
  prio?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing integer column in table "todos" */
export type Todos_Inc_Input = {
  prio?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  isDone?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Lists_Obj_Rel_Insert_Input>;
  listSlug?: Maybe<Scalars['String']>;
  prio?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  id?: Maybe<Order_By>;
  isDone?: Maybe<Order_By>;
  list?: Maybe<Lists_Order_By>;
  listSlug?: Maybe<Order_By>;
  prio?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  ListSlug = 'listSlug',
  /** column name */
  Prio = 'prio',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  isDone?: Maybe<Scalars['Boolean']>;
  prio?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Prio = 'prio',
  /** column name */
  Text = 'text'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String'];
  prio: Scalars['Int'];
  listSlug: Scalars['String'];
}>;


export type AddTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todos_one?: Maybe<(
    { __typename: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type PatchTodoMutationVariables = Exact<{
  id: Scalars['uuid'];
  set: Todos_Set_Input;
}>;


export type PatchTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos_by_pk?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'mutation_root' }
  & { delete_todos_by_pk?: Maybe<{ __typename: 'todos' }> }
);

export type AddListMutationVariables = Exact<{
  slug: Scalars['String'];
  name: Scalars['String'];
}>;


export type AddListMutation = (
  { __typename?: 'mutation_root' }
  & { insert_lists_one?: Maybe<(
    { __typename?: 'lists' }
    & Pick<Lists, 'slug'>
  )> }
);

export type GetListQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetListQuery = (
  { __typename?: 'query_root' }
  & { lists_by_pk?: Maybe<(
    { __typename?: 'lists' }
    & Pick<Lists, 'name'>
    & { todos: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id' | 'prio' | 'text' | 'isDone'>
    )> }
  )> }
);

export const AddTodoDocument = gql`
    mutation AddTodo($text: String!, $prio: Int!, $listSlug: String!) {
  insert_todos_one(
    object: {isDone: false, prio: $prio, text: $text, listSlug: $listSlug}
  ) {
    __typename
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddTodoGQL extends Apollo.Mutation<AddTodoMutation, AddTodoMutationVariables> {
    document = AddTodoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PatchTodoDocument = gql`
    mutation PatchTodo($id: uuid!, $set: todos_set_input!) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: $set) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchTodoGQL extends Apollo.Mutation<PatchTodoMutation, PatchTodoMutationVariables> {
    document = PatchTodoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: uuid!) {
  delete_todos_by_pk(id: $id) {
    __typename
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTodoGQL extends Apollo.Mutation<DeleteTodoMutation, DeleteTodoMutationVariables> {
    document = DeleteTodoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddListDocument = gql`
    mutation AddList($slug: String!, $name: String!) {
  insert_lists_one(object: {slug: $slug, name: $name}) {
    slug
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddListGQL extends Apollo.Mutation<AddListMutation, AddListMutationVariables> {
    document = AddListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetListDocument = gql`
    query GetList($slug: String!) {
  lists_by_pk(slug: $slug) {
    name
    todos(order_by: {isDone: asc, prio: asc}) {
      __typename
      id
      prio
      text
      isDone
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetListGQL extends Apollo.Query<GetListQuery, GetListQueryVariables> {
    document = GetListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }