import { DataType } from '../../services/types'

export const transformSignUpDataToBE = (signUpData: DataType): DataType => {
  return {
    email: signUpData.email,
    password: signUpData.password,
    user_name: signUpData.username
  }
}

export const transformSignUpDataToFE = (signUpData: DataType): DataType => {
  return {
    email: signUpData.email,
    username: signUpData.user_name,
    isActive: signUpData.is_active,
    id: signUpData.id
  }
}

export const transformSignUpErrorToFE = (signUpData: DataType): DataType => {
  return {
    email: signUpData.email,
    password: signUpData.password,
    username: signUpData.user_name
  }
}
