import axios from 'axios'

import { API_ENDPOINTS, BASE_URL } from './constants'
import { getLocalToken, removeLocalToken, setLocalToken } from './localStorage'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getLocalToken()?.access
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config
    const refreshToken = getLocalToken()?.refresh

    const isUnauthorized = error?.response?.status === 401
    const isRefreshRequest = originalRequest?.url === API_ENDPOINTS.refresh

    // requires the user to login after the first refresh api call
    if (isUnauthorized && isRefreshRequest) {
      removeLocalToken()

      window.location.href = '/login'

      return Promise.reject(error)
    }

    if (isUnauthorized && refreshToken) {
      try {
        const refreshTokenResponse = await axiosInstance.post(
          API_ENDPOINTS.refresh,
          {
            refresh: refreshToken
          }
        )
        const { access, refresh } = refreshTokenResponse.data || {}

        originalRequest.headers.Authorization = `Bearer ${access}`
        setLocalToken({ access, refresh })

        return axios(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      }
    }

    removeLocalToken()
    return Promise.reject(error)
  }
)

export default axiosInstance
