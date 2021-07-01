type DataType = {
  [name: string]: string | string[]
}

export type FetchParams = {
  method: 'get' | 'post'
  endpoint: string
  token?: string
  data?: DataType
}

export type LocalStorageParams = {
  endpoint: string
  response: unknown
}

export type ErrorMessage = {
  detail?: string
  email?: string[]
  password?: string[]
  user_name?: string[]
  username?: string[]
}

export type ErrorType =
  | {
      message?: ErrorMessage
      status?: number
      url?: string
    }
  | Record<string, never>
