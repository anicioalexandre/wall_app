import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, waitFor } from '@testing-library/dom'

import renderWithRedux from '../../../../jest/helpers/renderWithRedux'
import fetchEndpoint from '../../../services/api'
import SignUp from '../index'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockHistoryPush = jest.fn()

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router-dom') as Record<string, never>),
  useHistory: () => ({ push: mockHistoryPush })
}))

jest.mock('../../../services/api')
const mockEndpoint = fetchEndpoint as jest.Mock

const renderComponent = () => renderWithRedux(<SignUp />)

describe('SignUp tests', () => {
  const fillFormAndSubmit = () => {
    const usernameInput = screen.getByLabelText('Username')
    const emailInput = screen.getByLabelText('Email')
    const emailPassword = screen.getByLabelText('Password')
    const signUpButton = screen.getByText('Sign up')

    fireEvent.change(usernameInput, { target: { value: 'someUser' } })
    fireEvent.change(emailInput, { target: { value: 'some@email.com' } })
    fireEvent.change(emailPassword, { target: { value: 'SomeValue' } })
    fireEvent.click(signUpButton)
  }

  it('calls fetch endpoint when clicking in the submit button and redirect if resolved', async () => {
    mockEndpoint.mockResolvedValue({ id: 8 })
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
    mockEndpoint.mockResolvedValue('profile')
    renderComponent()
    const loginLink = await screen.findByText(
      'Already have an account? Login here!'
    )

    expect(loginLink).toBeInTheDocument()

    fireEvent.click(loginLink)

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
