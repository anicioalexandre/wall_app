import {
  LOGOUT,
  REQUEST_TOKEN,
  REQUEST_TOKEN_FAILURE,
  REQUEST_TOKEN_SUCCESS
} from './actions'
import { AuthState, TokenAction } from './types'

const INITIAL_STATE: AuthState = {
  token: null,
  loading: false,
  error: {}
}

const reducer = (state = INITIAL_STATE, action: TokenAction): AuthState => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state,
        loading: true
      }
    case REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        error: {}
      }
    case REQUEST_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
        error: {}
      }
    default:
      return state
  }
}

export default reducer
