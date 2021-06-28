export type InputProps = {
  name?: import('../Form/types').FormKeys
  value?: string
  onChange?: (e: import('react').ChangeEvent) => void
  error?: string[]
}
