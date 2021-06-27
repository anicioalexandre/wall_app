import { ChangeEvent, useState } from 'react'

import { INITIAL_FORM } from './constants'

const useForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM)

  const handleForm = (e: ChangeEvent): void => {
    const { value, name } = e.target as HTMLInputElement
    setFormValues((previousForm) => ({ ...previousForm, [name]: value }))
  }

  return { formValues, handleForm }
}

export default useForm
