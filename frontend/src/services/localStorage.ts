import { TokenDataType } from '@redux/modules/auth/types'

export const setLocalToken = (token: TokenDataType): void => {
  localStorage.setItem('token', JSON.stringify(token))
}

export const getLocalToken = (): TokenDataType => {
  const token = localStorage.getItem('token') || '{}'

  return JSON.parse(token)
}

export const removeLocalToken = (): void => {
  localStorage.removeItem('token')
}
