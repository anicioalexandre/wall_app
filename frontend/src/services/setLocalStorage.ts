import { TokenDataType } from '../redux/modules/auth'

export const setLocalStorage = (token: TokenDataType): void => {
  localStorage.setItem('token', JSON.stringify(token))
}
