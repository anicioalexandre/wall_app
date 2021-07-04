import React, { FC } from 'react'

import { InputProps } from './types'
import { INPUT_ATTRIBUTE } from './constants'
import { capitalizeFirstLetter } from '../../../utils/string'

const Input: FC<InputProps> = ({ onChange, value, name, error, className }) => {
  const inputAttribute = INPUT_ATTRIBUTE[name] || INPUT_ATTRIBUTE.default

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
        className={`${className ?? 'input-base'}`}
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
