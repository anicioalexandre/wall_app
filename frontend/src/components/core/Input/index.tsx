import React, { FC } from 'react'

import { InputProps } from './types'
import { INPUT_ATTRIBUTE } from './constants'

const Input: FC<InputProps> = ({ onChange, value, name }) => {
  const inputAttribute = INPUT_ATTRIBUTE[name]

  return (
    <label>
      {inputAttribute.label}
      <input
        className="border-b border-gray-20 focus:border-gray-60 bg-opacity-0 bg-transparent no-outline p-1 w-full smooth"
        onChange={onChange}
        value={value}
        name={name}
        type={inputAttribute.type}
      />
    </label>
  )
}

export default Input
