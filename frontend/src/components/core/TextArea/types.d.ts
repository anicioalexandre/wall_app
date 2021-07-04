export type TextAreaProps = {
  isDisabled?: boolean
  name?: 'content'
  value?: string
  onChange?: (e: import('react').ChangeEvent) => void
  error?: string[]
  maxLength?: number
  placeholder?: string
}
