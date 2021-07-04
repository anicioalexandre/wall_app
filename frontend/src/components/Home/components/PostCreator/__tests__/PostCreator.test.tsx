import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, waitFor } from '@testing-library/dom'

import renderWithRedux from '../../../../../../jest/helpers/renderWithRedux'
import fetchEndpoint from '../../../../../services/api'
import PostCreator from '../index'
import { GlobalState } from '../../../../../redux/modules/types'
import { FILLED_STATE, INITIAL_STATE } from '../../Feed/__mocks__/constants'

beforeEach(() => {
  jest.clearAllMocks()
})

jest.mock('../../../../../services/api')
const mockEndpoint = fetchEndpoint as jest.Mock

const renderComponent = ({ initialState }: { initialState?: GlobalState }) =>
  renderWithRedux(<PostCreator />, {
    initialState
  })

describe('PostCreator tests', () => {
  it('calls fetch endpoint when filling textarea and hitting the post button', async () => {
    mockEndpoint.mockResolvedValue('succes')

    renderComponent({ initialState: FILLED_STATE })

    const textArea = screen.getByRole('textbox')
    const button = screen.getByText(/post/i)

    fireEvent.change(textArea, { target: { value: 'Post.' } })
    fireEvent.click(button)

    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1))
  })

  it('should render disabled textarea and buttoon if the user is logged out', async () => {
    mockEndpoint.mockResolvedValue('succes')

    renderComponent({ initialState: INITIAL_STATE })

    const textArea = screen.getByRole('textbox')
    const button = screen.getByText(/post/i)

    fireEvent.change(textArea, { target: { value: 'Post.' } })
    fireEvent.click(button)

    expect(textArea).toHaveProperty('disabled', true)
    expect(button).toHaveProperty('disabled', true)
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(0))
  })

  it('should render disabled butotn when text area is empty', async () => {
    mockEndpoint.mockResolvedValue('succes')

    renderComponent({ initialState: FILLED_STATE })

    const textArea = screen.getByRole('textbox')
    const button = screen.getByText(/post/i)

    fireEvent.change(textArea, { target: { value: '' } })
    fireEvent.click(button)

    expect(textArea).toHaveProperty('disabled', false)
    expect(button).toHaveProperty('disabled', true)
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(0))
  })

  it('should a welcome placeholder when the user is logged in', async () => {
    renderComponent({ initialState: FILLED_STATE })
    const welcomePlaceHolder = screen.getByPlaceholderText(
      "What's on your mind, tester3?"
    )

    expect(welcomePlaceHolder).toBeInTheDocument()
  })

  it('should a warning placeholder when the user is logged in', async () => {
    renderComponent({ initialState: INITIAL_STATE })
    const warningPlaceHolder = screen.getByPlaceholderText(
      'Login to start interacting.'
    )

    expect(warningPlaceHolder).toBeInTheDocument()
  })
})
