import React, { FC } from 'react'
import LoadingState from '../LoadingState'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  isDisabled,
  isLoading,
  children
}) => {
  const buttonChildren = isLoading ? <LoadingState /> : children

  return (
    <button
      className={`${className ?? 'colorful'} p-2 button-base`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonChildren}
    </button>
  )
}

export default Button
