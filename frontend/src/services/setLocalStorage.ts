import { API_ENDPOINTS } from './constants'
import { LocalStorageParams } from './types'

export const setLocalStorage = ({
  endpoint,
  response
}: LocalStorageParams): void => {
  const isLogin = endpoint === API_ENDPOINTS.login

  if (isLogin) {
    localStorage.setItem('token', JSON.stringify(response))
  }
}
