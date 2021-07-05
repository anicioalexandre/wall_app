import { Dispatch } from 'redux'

import { FetchParams } from '@services/types'
import fetchEndpoint from '@services/api'

import {
  FeedPostsFailureAction,
  FeedPostsRequestAction,
  GetFeedPostsSuccessAction,
  CreateFeedPostsSuccessAction,
  UpdateFeedPostsSuccessAction
} from './types'
import {
  transformFeedPostsToFE,
  transformProfileErrorToFE
} from './transformers'

export const REQUEST_FEED_POSTS = 'REQUEST_FEED_POSTS'
export const REQUEST_GET_FEED_POSTS_SUCCESS = 'REQUEST_GET_FEED_POSTS_SUCCESS'
export const REQUEST_CREATE_FEED_POST_SUCCESS =
  'REQUEST_CREATE_FEED_POST_SUCCESS'
export const REQUEST_UPDATE_FEED_POST_SUCCESS =
  'REQUEST_UPDATE_FEED_POST_SUCCESS'
export const REQUEST_FEED_POSTS_FAILURE = 'REQUEST_FEED_POSTS_FAILURE'

const requestFeedPosts = (): FeedPostsRequestAction => ({
  type: REQUEST_FEED_POSTS
})

const requestGetFeedPostsSuccess = ({
  posts
}: Omit<GetFeedPostsSuccessAction, 'type'>): GetFeedPostsSuccessAction => ({
  type: REQUEST_GET_FEED_POSTS_SUCCESS,
  posts
})

const requestCreateFeedPostsSuccess = (): CreateFeedPostsSuccessAction => ({
  type: REQUEST_CREATE_FEED_POST_SUCCESS
})

const requestUpdateFeedPostsSuccess = (): UpdateFeedPostsSuccessAction => ({
  type: REQUEST_UPDATE_FEED_POST_SUCCESS
})

const requestFeedPostsFailure = ({
  error
}: Omit<FeedPostsFailureAction, 'type'>): FeedPostsFailureAction => ({
  type: REQUEST_FEED_POSTS_FAILURE,
  error
})

export const getPostsApi = ({ method, endpoint }: FetchParams) => {
  return (
    dispatch: Dispatch
  ): Promise<GetFeedPostsSuccessAction | FeedPostsFailureAction> => {
    dispatch(requestFeedPosts())
    return fetchEndpoint({ method, endpoint }).then(
      (posts) => {
        const postsTransformed = transformFeedPostsToFE(posts)
        return dispatch(requestGetFeedPostsSuccess({ posts: postsTransformed }))
      },
      (error) => {
        const errorTransformed = transformProfileErrorToFE(error)
        return dispatch(requestFeedPostsFailure({ error: errorTransformed }))
      }
    )
  }
}

export const createPostsApi = ({ method, endpoint, data }: FetchParams) => {
  return (
    dispatch: Dispatch
  ): Promise<CreateFeedPostsSuccessAction | FeedPostsFailureAction> => {
    dispatch(requestFeedPosts())
    return fetchEndpoint({ method, endpoint, data }).then(
      () => dispatch(requestCreateFeedPostsSuccess()),
      (error) => {
        const errorTransformed = transformProfileErrorToFE(error)
        return dispatch(requestFeedPostsFailure({ error: errorTransformed }))
      }
    )
  }
}

export const updatePostsApi = ({ method, endpoint }: FetchParams) => {
  return (
    dispatch: Dispatch
  ): Promise<CreateFeedPostsSuccessAction | FeedPostsFailureAction> => {
    dispatch(requestFeedPosts())
    return fetchEndpoint({ method, endpoint }).then(
      () => dispatch(requestUpdateFeedPostsSuccess()),
      (error) => {
        const errorTransformed = transformProfileErrorToFE(error)
        return dispatch(requestFeedPostsFailure({ error: errorTransformed }))
      }
    )
  }
}
