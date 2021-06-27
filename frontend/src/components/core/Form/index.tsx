import React, { FC } from 'react'

import Input from '../Input'
import Button from '../Button'
import { LOGIN_BUTTON, REGISTER_BUTTON } from './constants'
import { FormProps } from './types'
import useForm from './useForm'

const Form: FC<FormProps> = ({ onSubmit, isLoginForm }) => {
  const { formValues, handleForm } = useForm()

  const handleClick = () => onSubmit(formValues)

  const buttonName = isLoginForm ? LOGIN_BUTTON : REGISTER_BUTTON

  return (
    <div className="flex flex-col items-center mt-48 gap-8">
      <header className="text-primary font-bold text-4xl">Wall App</header>
      <div className="flex flex-col p-20 gap-3 max-w-sm rounded shadow">
        <Input onChange={handleForm} name="email" />
        <Input onChange={handleForm} name="password" />
        <Button onClick={handleClick}>{buttonName}</Button>
      </div>
    </div>
  )
}

export default Form
