import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/dom'

import renderWithRedux from '@jest/helpers/renderWithRedux'

import Header from '../index'

const renderComponent = () => renderWithRedux(<Header />)

describe('Header tests', () => {
  it('renders Header', () => {
    renderComponent()
    const headerTitle = screen.getByText(/wall app/i)

    expect(headerTitle).toBeInTheDocument()
  })

  it('renders a action button', () => {
    renderComponent()
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
