import React, { FC } from 'react'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  isDisabled,
  children
}) => {
  return (
    <button
      className={`${className ?? 'colorful'} p-2 button-base`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
