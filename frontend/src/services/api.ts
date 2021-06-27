import axios from 'axios'

import { setLocalStorage } from './setLocalStorage'
import { BASE_URL } from './constants'
import { FetchParams } from './types'

const fetchEndpoint = async ({
  method,
  endpoint,
  token,
  data
}: FetchParams): Promise<unknown> => {
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
    setLocalStorage({ endpoint, response })

    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default fetchEndpoint
