import { Dispatch } from 'redux'

import { ErrorType } from '../../components/core/Form/types'
import { DataType, FetchParams } from '../../services/types'
import fetchEndpoint from '../../services/api'
import {
  transformSignUpDataToBE,
  transformSignUpDataToFE,
  transformSignUpErrorToFE
} from './transformers'

const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
const REQUEST_SIGNUP_SUCCESS = 'REQUEST_SIGNUP_SUCCESS'
const REQUEST_SIGNUP_FAILURE = 'REQUEST_SIGNUP_FAILURE'

const requestSignUp = (): SignUpRequestAction => ({
  type: REQUEST_SIGNUP
})

const requestSignUpSuccess = ({
  profile
}: Omit<SignUpSuccessAction, 'type'>): SignUpSuccessAction => {
  const profileTransformed = transformSignUpDataToFE(profile)
  return {
    type: REQUEST_SIGNUP_SUCCESS,
    profile: profileTransformed
  }
}

const requestSignUpFailure = ({
  error
}: Omit<SignUpFailureAction, 'type'>): SignUpFailureAction => {
  const errorTransformed = transformSignUpErrorToFE(error)
  return {
    type: REQUEST_SIGNUP_FAILURE,
    error: errorTransformed
  }
}

export const signUpApi = ({ method, endpoint, data }: FetchParams) => {
  const transformedData = transformSignUpDataToBE(data)
  return (
    dispatch: Dispatch
  ): Promise<SignUpSuccessAction | SignUpFailureAction> => {
    dispatch(requestSignUp())
    return fetchEndpoint({ method, endpoint, data: transformedData }).then(
      (profile: DataType) => dispatch(requestSignUpSuccess({ profile })),
      (error) => dispatch(requestSignUpFailure({ error }))
    )
  }
}

const INITIAL_STATE: SignUpState = {
  profile: {},
  loading: false,
  error: {}
}

const reducer = (state = INITIAL_STATE, action: SignUpAction): SignUpState => {
  switch (action.type) {
    case REQUEST_SIGNUP:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile,
        error: {}
      }
    case REQUEST_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export type SignUpEntriesType =
  | {
      email: string
      password: string
      username: string
    }
  | Record<string, never>

type SignUpType =
  | typeof REQUEST_SIGNUP
  | typeof REQUEST_SIGNUP_SUCCESS
  | typeof REQUEST_SIGNUP_FAILURE

type SignUpRequestAction = {
  type: SignUpType
}

type SignUpSuccessAction = {
  profile: DataType
  type: SignUpType
}

type SignUpFailureAction = {
  error: ErrorType
  type: SignUpType
}

type SignUpAction = SignUpRequestAction &
  SignUpSuccessAction &
  SignUpFailureAction

export type SignUpState = {
  profile: DataType
  loading: boolean
  error: ErrorType
}

export default reducer
