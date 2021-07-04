import { useEffect } from 'react'
import { useHistory } from 'react-router'

import { API_ENDPOINTS } from '../../services/constants'
import { FormType } from '../core/Form/types'
import { PropsFromRedux } from './index'

const useSignUp = ({ signUpAction, profile }: Partial<PropsFromRedux>) => {
  const history = useHistory()

  useEffect(() => {
    if (profile?.id) history.push('/login')
  }, [profile])

  const handleSignUp = (formValues: FormType) =>
    signUpAction({
      method: 'post',
      endpoint: API_ENDPOINTS.signUp,
      data: formValues
    })

  return { handleSignUp, history }
}

export default useSignUp
