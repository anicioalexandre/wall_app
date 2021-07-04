import React, { FC, FormEvent } from 'react'

import Input from '../Input'
import Button from '../Button'
import { INITIAL_FORM, LOGIN_BUTTON, SIGNUP_BUTTON } from './constants'
import { FormProps } from './types'
import useForm from '../../../hooks/useForm'

const Form: FC<FormProps> = ({ onSubmit, isSignUpForm, error }) => {
  const { formValues, handleForm } = useForm({ initialState: INITIAL_FORM })

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    return onSubmit(formValues)
  }

  const buttonName = isSignUpForm ? SIGNUP_BUTTON : LOGIN_BUTTON

  return (
    <form className="flex flex-col items-center mt-48 gap-8">
      <header className="text-primary font-bold text-4xl">Wall App</header>
      <div className="flex flex-col p-20 gap-3 max-w-sm rounded shadow">
        {isSignUpForm && (
          <Input
            onChange={handleForm}
            name="username"
            error={error?.username}
          />
        )}
        <Input onChange={handleForm} name="email" error={error?.email} />
        <Input onChange={handleForm} name="password" error={error?.password} />
        <Button onClick={handleClick}>{buttonName}</Button>
      </div>
    </form>
  )
}

export default Form
