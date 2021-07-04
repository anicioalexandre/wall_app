import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../jest/helpers/renderWithRedux'
import { InputProps } from '../types'
import Input from '../index'

const mockChange = jest.fn()

const renderComponent = (props?: Partial<InputProps>) =>
  renderWithRedux(<Input onChange={mockChange} name="username" {...props} />)

describe('Input tests', () => {
  it('renders Input', () => {
    renderComponent()
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('calls onChange function if it is passed to the component', async () => {
    renderComponent()
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'SomeValue' } })

    expect(input).toHaveValue('SomeValue')
    expect(mockChange).toHaveBeenCalledTimes(1)
  })

  it('renders a text input', async () => {
    renderComponent()
    const input = screen.getByLabelText('Username')

    expect(input).toHaveProperty('type', 'text')
  })

  it('renders a password input', async () => {
    renderComponent({ name: 'password' })
    const input = screen.getByLabelText('Password')

    expect(input).toHaveProperty('type', 'password')
  })

  it('renders an email input', async () => {
    renderComponent({ name: 'email' })
    const input = screen.getByLabelText('Email')

    expect(input).toHaveProperty('type', 'email')
  })

  it('renders an error message', async () => {
    renderComponent({ error: ['Error message.'] })
    const errorMessage = screen.getByText('Error message.')

    expect(errorMessage).toBeInTheDocument()
  })

  it('renders styles from className', () => {
    renderComponent({ className: 'style' })
    const button = screen.getByRole('textbox')

    expect(button).toHaveClass('style')
  })
})
