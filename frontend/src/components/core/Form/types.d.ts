export type FormProps = {
  onSubmit: (form: FormType) => void
  isLoginForm?: boolean
}

export type FormType = typeof import('../Form/constants').INITIAL_FORM

export type FormKeys = keyof FormType
