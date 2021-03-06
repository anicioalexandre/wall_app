import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { tokenApi } from '@redux/modules/auth/actions'
import { GlobalState } from '@redux/modules/types'
import Button from '@components/core/Button'
import Form from '@components/core/Form'

import useLogin from './useLogin'

const Login: FC<PropsFromRedux> = ({
  loginAction,
  token,
  isLoading,
  error
}) => {
  const { handleLogin, history } = useLogin({
    loginAction,
    token
  })

  return (
    <div className="flex flex-col items-center gap-2">
      <Form onSubmit={handleLogin} error={error} isLoading={isLoading} />
      <Button
        className="text-primary-light bg-transparent"
        onClick={() => history.push('/signup')}
      >
        Not a member yet? Sign up here!
      </Button>
      {error?.detail && <p className="error-message">{error.detail}</p>}
    </div>
  )
}

const mapState = ({ auth }: GlobalState) => ({
  token: auth.token,
  error: auth.error,
  isLoading: auth.loading
})

const mapDispatch = {
  loginAction: tokenApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
