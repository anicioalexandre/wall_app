import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/dom'

import renderWithRedux from '../../../../../../jest/helpers/renderWithRedux'
import { PostCardProps } from '../types'
import PostCard from '../index'

beforeEach(() => {
  jest.clearAllMocks()
})

const post = {
  content: 'Some cool post.',
  author: 'tester',
  createdAt: '2021-07-04T03:22:58.608758Z',
  upVote: 1,
  id: 1,
  userUpVotes: [3]
}

const renderComponent = (props?: Partial<PostCardProps>) =>
  renderWithRedux(<PostCard post={post} {...props} />)

describe('PostCard tests', () => {
  it('renders post content ', async () => {
    renderComponent()
    const content = screen.getByText('Some cool post.')
    const username = screen.getByText('@tester')
    const date = screen.getByText('7/4/2021 • 12:22:58 AM')
    const upVote = screen.getByText('1')

    expect(content).toBeInTheDocument()
    expect(username).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(upVote).toBeInTheDocument()
  })
})
