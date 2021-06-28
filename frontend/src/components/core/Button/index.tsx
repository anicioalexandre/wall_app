import React, { FC } from 'react'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      className={`${
        className ??
        'bg-primary-dark text-white hover:bg-primary disabled:bg-gray-20'
      } button-base`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
