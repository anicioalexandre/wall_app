export type FormProps = {
  onSubmit: (form: any) => void
  error?: import('../../../services/types').AuthErrorMessage
  isSignUpForm?: boolean
  isLoading?: boolean
}

export type FormType = typeof import('../Form/constants').INITIAL_FORM

export type FormKeys = keyof FormType
