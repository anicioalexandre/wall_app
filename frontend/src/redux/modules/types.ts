import { AuthState } from './auth'
import { SignUpState } from './profile'

export type GlobalState = {
  auth: AuthState
  profile: SignUpState
}
