import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { profileApi } from '@redux/modules/profile/actions'
import { GlobalState } from '@redux/modules/types'
import Button from '@components/core/Button'
import Form from '@components/core/Form'

import useSignUp from './useSignUp'

const SignUp: FC<PropsFromRedux> = ({
  signUpAction,
  profile,
  IsLoading,
  error
}) => {
  const { handleSignUp, history } = useSignUp({ signUpAction, profile })

  return (
    <div className="flex flex-col items-center gap-2">
      <Form
        onSubmit={handleSignUp}
        error={error}
        isLoading={IsLoading}
        isSignUpForm
      />
      <Button
        className="text-primary-light bg-transparent"
        onClick={() => history.push('/login')}
      >
        Already have an account? Login here!
      </Button>
      {error?.detail && <p className="error-error">{error.detail}</p>}
    </div>
  )
}

const mapState = ({ profile }: GlobalState) => ({
  error: profile.error,
  profile: profile.profile,
  IsLoading: profile.loading
})

const mapDispatch = {
  signUpAction: profileApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SignUp)
