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
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({ push: mockHistoryPush })
}))

jest.mock('../../../services/api')
const mockEndpoint = fetchEndpoint as jest.Mock

const renderComponent = () => renderWithRedux(<Login />)

describe('Login tests', () => {
  const fillFormAndSubmit = () => {
    const emailInput = screen.getByLabelText('Email')
    const emailPassword = screen.getByLabelText('Password')
    const loginButton = screen.getByText('Login')

    fireEvent.change(emailInput, { target: { value: 'some@email.com' } })
    fireEvent.change(emailPassword, { target: { value: 'SomeValue' } })
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
})
