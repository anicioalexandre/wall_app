import React, { FC } from 'react'

import { InputProps } from './types'
import { INPUT_ATTRIBUTE } from './constants'
import { capitalizeFirstLetter } from '../../../utils/string'

const Input: FC<InputProps> = ({ onChange, value, name, error }) => {
  const inputAttribute = INPUT_ATTRIBUTE[name]

  const renderError = () => {
    if (!error || !error.length) return null

    const capitalizedMessages = error.map((messages) =>
      capitalizeFirstLetter(messages)
    )
    const messages = capitalizedMessages.join('\n')

    return <p className="error-message">{messages}</p>
  }

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
      {renderError()}
    </label>
  )
}

export default Input
