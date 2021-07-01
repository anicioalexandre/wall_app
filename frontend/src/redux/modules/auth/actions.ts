import { Dispatch } from 'redux'

import { FetchParams } from '../../../services/types'
import fetchEndpoint from '../../../services/api'
import {
  TokenFailureAction,
  TokenRequestAction,
  TokenSuccessAction,
  TokenDataType
} from './types'

export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS'
export const REQUEST_TOKEN_FAILURE = 'REQUEST_TOKEN_FAILURE'
export const LOGOUT = 'LOGOUT'

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

export const userLogout = (): TokenRequestAction => ({
  type: LOGOUT
})
