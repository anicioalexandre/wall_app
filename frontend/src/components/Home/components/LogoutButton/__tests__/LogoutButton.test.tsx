import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../../jest/helpers/renderWithRedux'
import LogoutButton from '../index'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockHistoryPush = jest.fn()

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router-dom') as Record<string, never>),
  useHistory: () => ({ push: mockHistoryPush })
}))

const renderComponent = () => renderWithRedux(<LogoutButton />)

describe('LogoutButton tests', () => {
  it('calls a redirect when clicking on the button', async () => {
    renderComponent()
    const button = screen.getByText(/logout/i)
    fireEvent.click(button)

    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
  })
})
