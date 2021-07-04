import { ChangeEvent, useState } from 'react'

import { UseFormType } from './types'

const useForm = ({ initialState }: UseFormType) => {
  const [formValues, setFormValues] = useState(initialState)

  const handleForm = (e: ChangeEvent): void => {
    const { value, name } = e.target as HTMLInputElement
    setFormValues((previousForm) => ({ ...previousForm, [name]: value }))
  }

  const resetValues = () => setFormValues(initialState)

  return { formValues, handleForm, resetValues }
}

export default useForm
