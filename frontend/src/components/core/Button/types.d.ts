import { FormEvent } from 'react'

export type ButtonProps = {
  className?: string
  onClick?: (e?: FormEvent) => void
  isDisabled?: boolean
}
