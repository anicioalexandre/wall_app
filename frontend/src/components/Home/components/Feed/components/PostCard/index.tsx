import React, { FC } from 'react'

import { formatDate } from '@utils/date'

import { PostCardProps } from './types'
import UpVoteButton from './UpVoteButton'

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { content, author, createdAt, upVote, id, userUpVotes } = post

  return (
    <div className="flex flex-col min-w-36 max-w-36 custom-media:min-w-24 px-10 py-4 gap-3 rounded shadow">
      <div className="flex gap-4">
        <p className="text-primary-dark font-bold">@{author}</p>
        <p className="text-gray-60">{formatDate(createdAt)}</p>
      </div>
      <div className="max-w-32 custom-media:max-w-16 text-primary break-words">
        {content}
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-primary font-bold w-3">{upVote}</span>
        <UpVoteButton postId={id} userUpVotes={userUpVotes} />
      </div>
    </div>
  )
}

export default PostCard
