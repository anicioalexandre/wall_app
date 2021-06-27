import React, { FC } from 'react'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="bg-primary-dark text-white p-2 rounded hover:bg-primary disabled:bg-gray-20 disabled:cursor-not-allowed smooth"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
