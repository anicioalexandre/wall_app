import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../../jest/helpers/renderWithRedux'
import Feed from '../index'
import { FILLED_STATE, INITIAL_STATE } from '../__mocks__/constants'
import { GlobalState } from '../../../../../redux/modules/types'

const renderComponent = ({ initialState }: { initialState?: GlobalState }) =>
  renderWithRedux(<Feed />, { initialState })

describe('Feed tests', () => {
  it('renders two cards', () => {
    renderComponent({ initialState: FILLED_STATE })
    const cards = screen.getAllByText(/upvote/i)

    expect(cards).toHaveLength(2)
  })

  it('renders no cards', () => {
    renderComponent({ initialState: INITIAL_STATE })
    const cards = screen.queryAllByText(/upvote/i)

    expect(cards).toHaveLength(0)
  })
})
