import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import App from '../index'

const renderComponent = () => render(<App />)

describe('App tests', () => {
  it('renders App header', () => {
    renderComponent()
    const appTitle = screen.getByText(/wall app/i)

    expect(appTitle).toBeInTheDocument()
  })
})
