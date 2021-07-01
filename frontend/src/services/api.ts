import axios from './axios'

import { BASE_URL } from './constants'
import { FetchParams } from './types'

const fetchEndpoint = async ({
  method,
  endpoint,
  data
}: FetchParams): Promise<any> => {
  const url = `${BASE_URL}${endpoint}`

  try {
    const response = await axios({ method, url, data })

    return Promise.resolve(response?.data)
  } catch (error) {
    const { data, status, config } = error.response
    return Promise.reject({ message: data, status, url: config.url })
  }
}

export default fetchEndpoint
