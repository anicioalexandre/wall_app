import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, waitFor } from '@testing-library/dom'

import renderWithRedux from '../../../../jest/helpers/renderWithRedux'
import fetchEndpoint from '../../../services/api'
import Login from '../index'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockHistoryPush = jest.fn()

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router-dom') as Record<string, never>),
  useHistory: () => ({ push: mockHistoryPush })
}))

jest.mock('jwt-decode', () => (token: string) => ({ user_id: token }))

jest.mock('../../../services/api')
const mockEndpoint = fetchEndpoint as jest.Mock

const renderComponent = () => renderWithRedux(<Login />)

describe('Login tests', () => {
  const fillFormAndSubmit = () => {
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const loginButton = screen.getByText('Login')

    fireEvent.change(emailInput, { target: { value: 'some@email.com' } })
    fireEvent.change(passwordInput, { target: { value: 'SomeValue' } })
    fireEvent.click(loginButton)
  }

  it('calls fetch endpoint when clicking in the submit button and redirect if resolved', async () => {
    mockEndpoint.mockResolvedValue('token')
    renderComponent()
    fillFormAndSubmit()

    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1))
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
  })

  it('calls fetch endpoint when clicking in the submit button and do not redirect if rejected', async () => {
    mockEndpoint.mockRejectedValue('error')
    renderComponent()
    fillFormAndSubmit()

    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1))
    expect(mockHistoryPush).not.toHaveBeenCalled()
  })

  it('renders a router link', async () => {
    mockEndpoint.mockRejectedValue({ detail: 'Error message.' })
    renderComponent()
    const signUpLink = await screen.findByText(
      'Not a member yet? Sign up here!'
    )

    expect(signUpLink).toBeInTheDocument()

    fireEvent.click(signUpLink)

    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
  })

  it('renders an error message', async () => {
    mockEndpoint.mockRejectedValue({ detail: 'Error message.' })
    renderComponent()
    fillFormAndSubmit()
    const errorMessage = await screen.findByText('Error message.')

    expect(errorMessage).toBeInTheDocument()
  })
})
