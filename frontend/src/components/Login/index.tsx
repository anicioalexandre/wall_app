import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { GlobalState } from '../../redux/modules/types'
import { tokenApi } from '../../redux/modules/auth/actions'
import Button from '../core/Button'
import Form from '../core/Form'
import useLogin from './useLogin'

const Login: FC<PropsFromRedux> = ({ loginAction, token, error }) => {
  const { handleLogin, history } = useLogin({ loginAction, token })

  const { message } = error

  return (
    <div className="flex flex-col items-center gap-2">
      <Form onSubmit={handleLogin} error={message} />
      <Button
        className="text-primary-light bg-transparent"
        onClick={() => history.push('/signup')}
      >
        Not a member yet? Sign up here!
      </Button>
      {message?.detail && <p className="error-message">{message.detail}</p>}
    </div>
  )
}

const mapState = ({ auth }: GlobalState) => ({
  token: auth.token,
  error: auth.error
})

const mapDispatch = {
  loginAction: tokenApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
