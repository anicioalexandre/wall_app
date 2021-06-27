import { useEffect } from 'react'
import { useHistory } from 'react-router'

import { API_ENDPOINTS } from '../../services/constants'
import { FormType } from '../core/Form/types'
import { PropsFromRedux } from './index'

const useLogin = ({ loginAction, isLogged }: PropsFromRedux) => {
  const history = useHistory()

  useEffect(() => {
    if (isLogged) history.push('/')
  }, [isLogged])

  const handleLogin = (formValues: FormType) =>
    loginAction({
      method: 'post',
      endpoint: API_ENDPOINTS.login,
      data: formValues
    })

  return { handleLogin }
}

export default useLogin
