import React, { FC } from 'react'

import { capitalizeFirstLetter, joinWithSeparator } from '../../../utils/string'
import { TextAreaProps } from './types'

const TextArea: FC<TextAreaProps> = ({
  onChange,
  value,
  name,
  error,
  maxLength = 140,
  placeholder,
  isDisabled
}) => {
  const renderError = () => {
    if (!error || !error.length) return null

    const capitalizedMessages = error.map((messages) =>
      capitalizeFirstLetter(messages)
    )
    const messages = joinWithSeparator(capitalizedMessages, '\n')

    return <p className="error-message">{messages}</p>
  }

  return (
    <>
      <textarea
        className="text-primary p-4 bg-gray-20 hover:bg-gray-60 min-h-6 min-w-32 disabled:bg-gray-20 disabled:cursor-not-allowed resize-none no-outline rounded smooth"
        disabled={isDisabled}
        maxLength={maxLength}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {renderError()}
    </>
  )
}

export default TextArea
