import { ErrorType } from '@services/types'

import { FeedPostDataType } from './types'

export const transformFeedPostsToFE = (
  postsData: Exclude<FeedPostDataType[], 'createdAt' | 'upVote' | 'userUpVotes'>
): Exclude<FeedPostDataType[], 'created_at' | 'up_vote' | 'user_up_votes'> => {
  return postsData.map((post) => ({
    author: post.author,
    content: post.content,
    createdAt: post.created_at,
    id: post.id,
    upVote: post.up_vote,
    userUpVotes: post.user_up_votes
  }))
}

export const transformProfileErrorToFE = (postsError: ErrorType): ErrorType => {
  const { author, content, created_at, up_vote } = postsError || {}
  return {
    ...postsError,
    author: author,
    content: content,
    createdAt: created_at,
    upVote: up_vote
  }
}
