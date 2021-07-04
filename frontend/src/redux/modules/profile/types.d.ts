export type ProfileDataType =
  | {
      email: string
      password?: string
      username?: string
      user_name?: string
      isActive?: boolean
      is_active?: boolean
      id: number
    }
  | Record<string, never>

export type ProfileBEType = {
  email: string
  password: string
  username?: string
  user_name?: string
}

type ProfileType =
  | typeof import('./actions').REQUEST_PROFILE
  | typeof import('./actions').REQUEST_PROFILE_SUCCESS
  | typeof import('./actions').REQUEST_PROFILE_FAILURE
  | typeof import('./actions').CLEAR_PROFILE

type ProfileRequestAction = {
  type: ProfileType
}

type ProfileSuccessAction = {
  profile: ProfileDataType
  type: ProfileType
}

type ProfileFailureAction = {
  error: import('../../../services/types').ErrorType
  type: ProfileType
}

type ProfileAction = ProfileRequestAction &
  ProfileSuccessAction &
  ProfileFailureAction

export type ProfileState = {
  profile: ProfileDataType
  loading: boolean
  error: import('../../../services/types').ErrorType
}
