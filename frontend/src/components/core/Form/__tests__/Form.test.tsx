import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../jest/helpers/renderWithRedux'
import { FormProps } from '../types'
import Form from '../index'

const mockClick = jest.fn()

const renderComponent = (props?: Partial<FormProps>) =>
  renderWithRedux(<Form onSubmit={mockClick} {...props} />)

describe('Form tests', () => {
  it('renders a email input', async () => {
    renderComponent()
    const emailInput = screen.getByLabelText('Email')

    expect(emailInput).toHaveProperty('type', 'email')
  })

  it('renders a password Form', async () => {
    renderComponent()
    const passwordInput = screen.getByLabelText('Password')

    expect(passwordInput).toHaveProperty('type', 'password')
  })

  it('renders a register button', async () => {
    renderComponent()
    const registerButton = screen.getByText('Login')

    expect(registerButton).toBeInTheDocument()
  })

  it('renders a login button', async () => {
    renderComponent({ isSignUpForm: true })
    const loginButton = screen.getByText('Sign up')

    expect(loginButton).toBeInTheDocument()
  })
})
