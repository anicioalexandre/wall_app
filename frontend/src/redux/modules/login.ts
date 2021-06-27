import { Dispatch } from 'redux'
import fetchEndpoint from '../../services/api'
import { FetchParams } from '../../services/types'

const REQUEST_LOGIN = 'REQUEST_LOGIN'
const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE'

const requestLogin = (): LoginRequestAction => ({
  type: REQUEST_LOGIN
})

const requestLoginSuccess = ({
  token
}: Omit<LoginSuccessAction, 'type'>): LoginSuccessAction => ({
  type: REQUEST_LOGIN_SUCCESS,
  token
})

const requestLoginFailure = ({
  error
}: Omit<LoginFailureAction, 'type'>): LoginFailureAction => ({
  type: REQUEST_LOGIN_FAILURE,
  error
})

export const LoginApi = ({ method, endpoint, data }: FetchParams) => {
  return (
    dispatch: Dispatch
  ): Promise<LoginSuccessAction | LoginFailureAction> => {
    dispatch(requestLogin())
    return fetchEndpoint({ method, endpoint, data }).then(
      (token: TokenType) => dispatch(requestLoginSuccess({ token })),
      ({ message }) => dispatch(requestLoginFailure({ error: message }))
    )
  }
}

const INITIAL_STATE: LoginState = {
  isLogged: false,
  token: null,
  loading: false,
  error: null
}

const reducer = (state = INITIAL_STATE, action: LoginAction): LoginState => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true
      }
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        isLogged: true
      }
    case REQUEST_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLogged: false
      }
    default:
      return state
  }
}

export type TokenType = {
  access: string
  refresh: string
} | null

type LoginType =
  | typeof REQUEST_LOGIN
  | typeof REQUEST_LOGIN_SUCCESS
  | typeof REQUEST_LOGIN_FAILURE

type LoginRequestAction = {
  type: LoginType
}

type LoginSuccessAction = {
  token: TokenType
  type: LoginType
}

type LoginFailureAction = {
  error: Error
  type: LoginType
}

type LoginAction = LoginRequestAction & LoginSuccessAction & LoginFailureAction

export type LoginState = {
  isLogged: boolean
  token: TokenType
  loading: boolean
  error: Error
}

export default reducer
