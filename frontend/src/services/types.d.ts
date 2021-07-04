type DataType = {
  [name: string]: string | string[]
}

export type FetchParams = {
  method: 'get' | 'post' | 'put'
  endpoint: string
  data?: DataType
}

export type LocalStorageParams = {
  endpoint: string
  response: unknown
}

export type AuthErrorMessage = {
  detail?: string
  email?: string[]
  password?: string[]
  user_name?: string[]
  username?: string[]
}

export type FeedErrorMessage = {
  detail?: string
  author?: string[]
  content?: string[]
  created_at?: string[]
  createdAt?: string[]
  up_vote?: string[]
  upVote?: string[]
}

export type ErrorType =
  | (AuthErrorMessage & FeedErrorMessage)
  | Record<string, never>
