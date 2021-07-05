import { Dispatch } from 'redux'

import { FetchParams } from '@services/types'
import fetchEndpoint from '@services/api'

import {
  transformProfileDataToBE,
  transformProfileDataToFE,
  transformProfileErrorToFE
} from './transformers'
import {
  ProfileDataType,
  ProfileFailureAction,
  ProfileRequestAction,
  ProfileSuccessAction
} from './types'

export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const REQUEST_PROFILE_SUCCESS = 'REQUEST_PROFILE_SUCCESS'
export const REQUEST_PROFILE_FAILURE = 'REQUEST_PROFILE_FAILURE'
export const CLEAR_PROFILE = 'CLEAR_PROFILE'

const requestProfile = (): ProfileRequestAction => ({
  type: REQUEST_PROFILE
})

const requestProfileSuccess = ({
  profile
}: Omit<ProfileSuccessAction, 'type'>): ProfileSuccessAction => {
  return {
    type: REQUEST_PROFILE_SUCCESS,
    profile
  }
}

const requestProfileFailure = ({
  error
}: Omit<ProfileFailureAction, 'type'>): ProfileFailureAction => {
  return {
    type: REQUEST_PROFILE_FAILURE,
    error
  }
}

export const profileApi = ({ method, endpoint, data }: FetchParams) => {
  const transformedData = transformProfileDataToBE(data)
  return (
    dispatch: Dispatch
  ): Promise<ProfileSuccessAction | ProfileFailureAction> => {
    dispatch(requestProfile())
    return fetchEndpoint({
      method,
      endpoint,
      data: transformedData
    }).then(
      (profile: Exclude<ProfileDataType, 'isActive' | 'username'>) => {
        const profileTransformed = transformProfileDataToFE(profile)
        return dispatch(requestProfileSuccess({ profile: profileTransformed }))
      },
      (error) => {
        const errorTransformed = transformProfileErrorToFE(error)
        return dispatch(requestProfileFailure({ error: errorTransformed }))
      }
    )
  }
}

export const clearProfile = (): ProfileRequestAction => ({
  type: CLEAR_PROFILE
})
