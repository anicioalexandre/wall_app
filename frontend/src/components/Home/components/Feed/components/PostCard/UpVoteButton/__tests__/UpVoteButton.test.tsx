import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, waitFor } from '@testing-library/dom'

import renderWithRedux from '../../../../../../../../../jest/helpers/renderWithRedux'
import fetchEndpoint from '../../../../../../../../services/api'
import UpVoteButton from '../index'
import { UpVoteButtonProps } from '../types'
import { GlobalState } from '../../../../../../../../redux/modules/types'
import {
  FILLED_STATE,
  INITIAL_STATE
} from '../../../../../Feed/__mocks__/constants'

beforeEach(() => {
  jest.clearAllMocks()
})

jest.mock('../../../../../../../../services/api')
const mockEndpoint = fetchEndpoint as jest.Mock

const renderComponent = ({
  props,
  initialState
}: {
  props?: Partial<UpVoteButtonProps>
  initialState?: GlobalState
}) =>
  renderWithRedux(<UpVoteButton postId={1} userUpVotes={[1, 2]} {...props} />, {
    initialState
  })

describe('UpVoteButton tests', () => {
  it('calls fetch endpoint when clicking on the button', async () => {
    mockEndpoint.mockResolvedValue('token')
    renderComponent({ initialState: FILLED_STATE })
    const button = screen.getByText(/upvote/i)
    fireEvent.click(button)

    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1))
  })

  it('should have a disabled button and not call fetch endpoint when the user is not logged', async () => {
    mockEndpoint.mockResolvedValue('token')
    renderComponent({ initialState: INITIAL_STATE })
    const button = screen.getByText(/upvote/i)
    fireEvent.click(button)

    expect(button).toHaveProperty('disabled', true)
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(0))
  })
})
