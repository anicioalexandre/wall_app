import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../jest/helpers/renderWithRedux'
import { ButtonProps } from '../types'
import Button from '../index'

const mockClick = jest.fn()

const renderComponent = (props?: Partial<ButtonProps>) =>
  renderWithRedux(
    <Button onClick={mockClick} {...props}>
      Test button
    </Button>
  )

describe('Button tests', () => {
  it('renders Button', () => {
    renderComponent()
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('renders a button children', () => {
    renderComponent()
    const button = screen.getByText(/test button/i)

    expect(button).toBeInTheDocument()
  })

  it('calls a onClick function', () => {
    renderComponent()
    const button = screen.getByText(/test button/i)

    fireEvent.click(button)

    expect(mockClick).toHaveBeenCalled()
  })

  it('renders styles from className', () => {
    renderComponent({ className: 'style' })
    const button = screen.getByText(/test button/i)

    expect(button).toHaveClass('style')
  })

  it('renders a disabled button', async () => {
    renderComponent({ isDisabled: true })
    const button = screen.getByText(/test button/i)

    expect(button).toHaveProperty('disabled', true)
  })
})
