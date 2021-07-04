export type FeedPostDataType = {
  author: string
  content: string
  createdAt?: string
  created_at?: string
  id: number
  upVote?: number
  up_vote?: number
  user_up_votes?: number[]
  userUpVotes?: number[]
}

type FeedPostsType =
  | typeof import('./actions').REQUEST_FEED_POSTS
  | typeof import('./actions').REQUEST_GET_FEED_POSTS_SUCCESS
  | typeof import('./actions').REQUEST_CREATE_FEED_POST_SUCCESS
  | typeof import('./actions').REQUEST_UPDATE_FEED_POST_SUCCESS
  | typeof import('./actions').REQUEST_FEED_POSTS_FAILURE

export type FeedPostsRequestAction = {
  type: FeedPostsType
}

export type GetFeedPostsSuccessAction = {
  posts: FeedPostDataType[]
  type: FeedPostsType
}

export type CreateFeedPostsSuccessAction = {
  type: FeedPostsType
}

export type UpdateFeedPostsSuccessAction = {
  type: FeedPostsType
}

export type FeedPostsFailureAction = {
  error: import('../../../services/types').ErrorType
  type: FeedPostsType
}

export type FeedPostsAction = FeedPostsRequestAction &
  GetFeedPostsSuccessAction &
  CreateFeedPostsSuccessAction &
  FeedPostsFailureAction

export type FeedState = {
  posts: FeedPostDataType[]
  loading: boolean
  error: import('../../../services/types').ErrorType
  hasUpdate: boolean
}
