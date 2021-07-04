import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../../../../jest/helpers/renderWithRedux'
import ActionButton from '../index'
import { GlobalState } from '../../../../../../../redux/modules/types'
import { FILLED_STATE, INITIAL_STATE } from '../../../__mocks__/constants'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockHistoryPush = jest.fn()

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router-dom') as Record<string, never>),
  useHistory: () => ({ push: mockHistoryPush })
}))
const renderComponent = ({ initialState }: { initialState?: GlobalState }) =>
  renderWithRedux(<ActionButton />, {
    initialState
  })

describe('ActionButton tests', () => {
  it('calls a redirect when clicking on the logout button, if the user is logged', async () => {
    renderComponent({ initialState: FILLED_STATE })
    const button = screen.getByText(/logout/i)
    fireEvent.click(button)

    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
  })

  it('calls a redirect when clicking on the login button, if the user is not logged', async () => {
    renderComponent({ initialState: INITIAL_STATE })
    const button = screen.getByText(/login/i)
    fireEvent.click(button)

    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
  })
})
