export type TokenDataType = {
  access: string
  refresh: string
} | null

type TokenType =
  | typeof import('./actions').REQUEST_TOKEN
  | typeof import('./actions').REQUEST_TOKEN_SUCCESS
  | typeof import('./actions').REQUEST_TOKEN_FAILURE
  | typeof import('./actions').LOGOUT

export type TokenRequestAction = {
  type: TokenType
}

export type TokenSuccessAction = {
  token: TokenDataType
  type: TokenType
}

export type TokenFailureAction = {
  error: import('../../../services/types').ErrorType
  type: TokenType
}

export type TokenAction = TokenRequestAction &
  TokenSuccessAction &
  TokenFailureAction

export type AuthState = {
  token: TokenDataType
  loading: boolean
  error: import('../../../services/types').ErrorType
}
