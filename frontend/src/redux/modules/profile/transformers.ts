import { DataType, ErrorType } from '../../../services/types'

export const transformProfileDataToBE = (profileData: DataType): DataType => {
  return {
    email: profileData?.email,
    password: profileData?.password,
    user_name: profileData?.username
  }
}

export const transformProfileDataToFE = (profileData: DataType): DataType => {
  return {
    email: profileData.email,
    username: profileData.user_name,
    isActive: profileData.is_active,
    id: profileData.id
  }
}

export const transformProfileErrorToFE = (
  profileError: ErrorType
): ErrorType => {
  const { email, password, user_name } = profileError?.message || {}
  return {
    message: {
      ...profileError,
      email: email,
      password: password,
      username: user_name
    }
  }
}
