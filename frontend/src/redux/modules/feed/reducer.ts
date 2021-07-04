import {
  REQUEST_FEED_POSTS,
  REQUEST_FEED_POSTS_FAILURE,
  REQUEST_GET_FEED_POSTS_SUCCESS,
  REQUEST_CREATE_FEED_POST_SUCCESS,
  REQUEST_UPDATE_FEED_POST_SUCCESS
} from './actions'
import { FeedState, FeedPostsAction } from './types'

const INITIAL_STATE: FeedState = {
  posts: [],
  loading: false,
  error: {},
  hasUpdate: false
}

const reducer = (state = INITIAL_STATE, action: FeedPostsAction): FeedState => {
  switch (action.type) {
    case REQUEST_FEED_POSTS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_GET_FEED_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: {},
        hasUpdate: false
      }
    case REQUEST_CREATE_FEED_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        hasUpdate: true
      }
    case REQUEST_UPDATE_FEED_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        hasUpdate: true
      }
    case REQUEST_FEED_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        hasUpdate: false
      }
    default:
      return state
  }
}

export default reducer
