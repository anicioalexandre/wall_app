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
