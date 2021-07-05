import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/dom'

import renderWithRedux from '@jest/helpers/renderWithRedux'

import { TextAreaProps } from '../types'
import TextArea from '../index'

const mockChange = jest.fn()

const renderComponent = (props?: Partial<TextAreaProps>) =>
  renderWithRedux(<TextArea onChange={mockChange} {...props} />)

describe('TextArea tests', () => {
  it('renders TextArea', () => {
    renderComponent()
    const textArea = screen.getByRole('textbox')

    expect(textArea).toBeInTheDocument()
  })

  it('calls onChange function if it is passed to the component', async () => {
    renderComponent()
    const textArea = screen.getByRole('textbox')

    fireEvent.change(textArea, { target: { value: 'SomeValue' } })

    expect(textArea).toHaveValue('SomeValue')
    expect(mockChange).toHaveBeenCalledTimes(1)
  })

  it('renders an error message', async () => {
    renderComponent({ error: ['Error message.'] })
    const errorMessage = screen.getByText('Error message.')

    expect(errorMessage).toBeInTheDocument()
  })

  it('renders a textarea with a placeholder', async () => {
    renderComponent({ placeholder: 'Cool placeholder.' })
    const textArea = screen.getByRole('textbox')

    expect(textArea).toHaveProperty('placeholder', 'Cool placeholder.')
  })

  it('renders a disabled textarea', async () => {
    renderComponent({ isDisabled: true })
    const textArea = screen.getByRole('textbox')

    expect(textArea).toHaveProperty('disabled', true)
  })
})
