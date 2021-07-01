import {
  REQUEST_PROFILE,
  REQUEST_PROFILE_SUCCESS,
  REQUEST_PROFILE_FAILURE
} from './actions'
import { ProfileAction, ProfileState } from './types'

const INITIAL_STATE: ProfileState = {
  profile: {},
  loading: false,
  error: {}
}

const reducer = (
  state = INITIAL_STATE,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        loading: true
      }
    case REQUEST_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile,
        error: {}
      }
    case REQUEST_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default reducer
