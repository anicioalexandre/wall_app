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
  it('render a email input', async () => {
    renderComponent()
    const emailInput = screen.getByLabelText('Email')

    expect(emailInput).toHaveProperty('type', 'email')
  })

  it('render a password Form', async () => {
    renderComponent()
    const passwordInput = screen.getByLabelText('Password')

    expect(passwordInput).toHaveProperty('type', 'password')
  })

  it('render a register button', async () => {
    renderComponent()
    const registerButton = screen.getByText('Register')

    expect(registerButton).toBeInTheDocument()
  })

  it('render a login button', async () => {
    renderComponent({ isLoginForm: true })
    const loginButton = screen.getByText('Login')

    expect(loginButton).toBeInTheDocument()
  })
})
