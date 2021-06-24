import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  signup: User;
  login: User;
  appleLogin: User;
};


export type MutationSignupArgs = {
  user: SignupInput;
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationAppleLoginArgs = {
  email: Scalars['String'];
};

export type Query = {
  getSoundboards: Array<Maybe<Soundboard>>;
  getUser: User;
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};

export type SignupInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Soundboard = {
  id: Scalars['Int'];
  title: Scalars['String'];
  userId: Scalars['Int'];
  links: Array<Maybe<SoundboardLink>>;
};

export type SoundboardLink = {
  id: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  soundboardId: Scalars['Int'];
};


export type User = {
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};

export type AppleLoginMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type AppleLoginMutation = { appleLogin: { id: number, token?: Maybe<string> } };

export type LoginMutationVariables = Exact<{
  credentials: LoginInput;
}>;


export type LoginMutation = { login: { id: number, token?: Maybe<string> } };

export type SignupMutationVariables = Exact<{
  user: SignupInput;
}>;


export type SignupMutation = { signup: { id: number, token?: Maybe<string> } };

export type GetSoundboardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSoundboardsQuery = { getSoundboards: Array<Maybe<{ id: number, title: string, userId: number, links: Array<Maybe<{ id: number, title: string, url: string }>> }>> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { getUser: { id: number, name: string, email: string, createdAt: string } };


export const AppleLoginDocument = gql`
    mutation AppleLogin($email: String!) {
  appleLogin(email: $email) {
    id
    token
  }
}
    `;
export type AppleLoginMutationFn = Apollo.MutationFunction<AppleLoginMutation, AppleLoginMutationVariables>;

/**
 * __useAppleLoginMutation__
 *
 * To run a mutation, you first call `useAppleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appleLoginMutation, { data, loading, error }] = useAppleLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAppleLoginMutation(baseOptions?: Apollo.MutationHookOptions<AppleLoginMutation, AppleLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AppleLoginMutation, AppleLoginMutationVariables>(AppleLoginDocument, options);
      }
export type AppleLoginMutationHookResult = ReturnType<typeof useAppleLoginMutation>;
export type AppleLoginMutationResult = Apollo.MutationResult<AppleLoginMutation>;
export type AppleLoginMutationOptions = Apollo.BaseMutationOptions<AppleLoginMutation, AppleLoginMutationVariables>;
export const LoginDocument = gql`
    mutation Login($credentials: LoginInput!) {
  login(credentials: $credentials) {
    id
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($user: SignupInput!) {
  signup(user: $user) {
    id
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GetSoundboardsDocument = gql`
    query GetSoundboards {
  getSoundboards {
    id
    title
    userId
    links {
      id
      title
      url
    }
  }
}
    `;

/**
 * __useGetSoundboardsQuery__
 *
 * To run a query within a React component, call `useGetSoundboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSoundboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSoundboardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSoundboardsQuery(baseOptions?: Apollo.QueryHookOptions<GetSoundboardsQuery, GetSoundboardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSoundboardsQuery, GetSoundboardsQueryVariables>(GetSoundboardsDocument, options);
      }
export function useGetSoundboardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSoundboardsQuery, GetSoundboardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSoundboardsQuery, GetSoundboardsQueryVariables>(GetSoundboardsDocument, options);
        }
export type GetSoundboardsQueryHookResult = ReturnType<typeof useGetSoundboardsQuery>;
export type GetSoundboardsLazyQueryHookResult = ReturnType<typeof useGetSoundboardsLazyQuery>;
export type GetSoundboardsQueryResult = Apollo.QueryResult<GetSoundboardsQuery, GetSoundboardsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: Int!) {
  getUser(id: $id) {
    id
    name
    email
    createdAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;