import { DataType, ErrorType } from '../../../services/types'
import { ProfileDataType, ProfileBEType } from './types'

export const transformProfileDataToBE = (profileData?: DataType): DataType => {
  return {
    email: profileData?.email,
    password: profileData?.password,
    user_name: profileData?.username
  }
}

export const transformProfileDataToFE = (
  profileData: Exclude<ProfileDataType, 'isActive' | 'username'>
): Exclude<ProfileDataType, 'is_active' | 'user_name'> => {
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
  const { email, password, user_name } = profileError || {}
  return {
    ...profileError,
    email: email,
    password: password,
    username: user_name
  }
}
