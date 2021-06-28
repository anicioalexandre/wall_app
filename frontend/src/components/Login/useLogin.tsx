import { useEffect } from 'react'
import { useHistory } from 'react-router'

import { API_ENDPOINTS } from '../../services/constants'
import { setLocalStorage } from '../../services/setLocalStorage'
import { FormType } from '../core/Form/types'
import { PropsFromRedux } from './index'

const useLogin = ({ loginAction, token }: Omit<PropsFromRedux, 'error'>) => {
  const history = useHistory()

  useEffect(() => {
    if (token) {
      setLocalStorage(token)
      history.push('/')
    }
  }, [token])

  const handleLogin = (formValues: FormType) =>
    loginAction({
      method: 'post',
      endpoint: API_ENDPOINTS.login,
      data: formValues
    })

  return { handleLogin, history }
}

export default useLogin
