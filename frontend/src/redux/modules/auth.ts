import { Dispatch } from 'redux'

import { ErrorType } from '../../components/core/Form/types'
import { FetchParams } from '../../services/types'
import fetchEndpoint from '../../services/api'

const REQUEST_TOKEN = 'REQUEST_TOKEN'
const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS'
const REQUEST_TOKEN_FAILURE = 'REQUEST_TOKEN_FAILURE'

const requestToken = (): TokenRequestAction => ({
  type: REQUEST_TOKEN
})

const requestTokenSuccess = ({
  token
}: Omit<TokenSuccessAction, 'type'>): TokenSuccessAction => ({
  type: REQUEST_TOKEN_SUCCESS,
  token
})

const requestTokenFailure = ({
  error
}: Omit<TokenFailureAction, 'type'>): TokenFailureAction => ({
  type: REQUEST_TOKEN_FAILURE,
  error
})

export const tokenApi = ({ method, endpoint, data }: FetchParams) => {
  return (
    dispatch: Dispatch
  ): Promise<TokenSuccessAction | TokenFailureAction> => {
    dispatch(requestToken())
    return fetchEndpoint({ method, endpoint, data }).then(
      (token: TokenDataType) => dispatch(requestTokenSuccess({ token })),
      (error) => dispatch(requestTokenFailure({ error }))
    )
  }
}

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
    default:
      return state
  }
}

export type TokenDataType = {
  access: string
  refresh: string
} | null

type TokenType =
  | typeof REQUEST_TOKEN
  | typeof REQUEST_TOKEN_SUCCESS
  | typeof REQUEST_TOKEN_FAILURE

type TokenRequestAction = {
  type: TokenType
}

type TokenSuccessAction = {
  token: TokenDataType
  type: TokenType
}

type TokenFailureAction = {
  error: ErrorType
  type: TokenType
}

type TokenAction = TokenRequestAction & TokenSuccessAction & TokenFailureAction

export type AuthState = {
  token: TokenDataType
  loading: boolean
  error: ErrorType
}

export default reducer
