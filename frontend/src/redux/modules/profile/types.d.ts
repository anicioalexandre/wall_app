export type ProfileEntriesType =
  | {
      email: string
      password: string
      username: string
    }
  | Record<string, never>

type ProfileType =
  | typeof import('./actions').REQUEST_PROFILE
  | typeof import('./actions').REQUEST_PROFILE_SUCCESS
  | typeof import('./actions').REQUEST_PROFILE_FAILURE

type ProfileRequestAction = {
  type: ProfileType
}

type ProfileSuccessAction = {
  profile: import('../../../services/types').DataType
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
  profile: import('../../../services/types').DataType
  loading: boolean
  error: import('../../../services/types').ErrorType
}
