export type ErrorType =
  | {
      detail?: string
      email?: string[]
      password?: string[]
      user_name?: string[]
      username?: string[]
    }
  | Record<string, never>

export type FormProps = {
  onSubmit: (form: any) => void
  error?: ErrorType
  isSignUpForm?: boolean
}

export type FormType = typeof import('../Form/constants').INITIAL_FORM

export type FormKeys = keyof FormType
