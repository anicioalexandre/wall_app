import jwtDecode, { JwtPayload } from 'jwt-decode'

export const decodeToken = (token?: string) => {
  if (token) {
    const decodedToken: JwtPayload & { user_id: string } = jwtDecode(token)

    return decodedToken
  }
  return { user_id: '' }
}
