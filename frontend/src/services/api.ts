import axios from 'axios'

import { BASE_URL } from './constants'
import { FetchParams } from './types'

const fetchEndpoint = async ({
  method,
  endpoint,
  token,
  data
}: FetchParams): Promise<any> => {
  const headers = token
    ? {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `JWT ${token}`
        }
      }
    : {}

  const url = `${BASE_URL}${endpoint}`

  try {
    const response = await axios({ method, url, headers, data })

    return Promise.resolve(response.data)
  } catch (error) {
    const { data } = error.response

    return Promise.reject(data)
  }
}

export default fetchEndpoint
