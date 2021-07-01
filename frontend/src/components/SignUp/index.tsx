import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { profileApi } from '../../redux/modules/profile/actions'
import { GlobalState } from '../../redux/modules/types'
import Button from '../core/Button'
import Form from '../core/Form'
import useSignUp from './useSignUp'

const SignUp: FC<PropsFromRedux> = ({ signUpAction, profile, error }) => {
  const { handleSignUp, history } = useSignUp({ signUpAction, profile })

  const { message } = error

  return (
    <div className="flex flex-col items-center gap-2">
      <Form onSubmit={handleSignUp} error={message} isSignUpForm />
      <Button
        className="text-primary-light bg-transparent"
        onClick={() => history.push('/login')}
      >
        Already have an account? Login here!
      </Button>
      {message?.detail && <p className="error-message">{message.detail}</p>}
    </div>
  )
}

const mapState = ({ profile }: GlobalState) => ({
  error: profile.error,
  profile: profile.profile
})

const mapDispatch = {
  signUpAction: profileApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SignUp)
