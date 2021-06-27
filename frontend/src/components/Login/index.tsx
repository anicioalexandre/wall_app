import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { GlobalState } from '../../redux/modules/types'
import { LoginApi } from '../../redux/modules/login'
import Form from '../core/Form'
import useLogin from './useLogin'

const Login: FC<PropsFromRedux> = ({ loginAction, isLogged }) => {
  const { handleLogin } = useLogin({ loginAction, isLogged })

  return <Form onSubmit={handleLogin} isLoginForm />
}

const mapState = ({ login }: GlobalState) => ({
  isLogged: login.isLogged
})

const mapDispatch = {
  loginAction: LoginApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
