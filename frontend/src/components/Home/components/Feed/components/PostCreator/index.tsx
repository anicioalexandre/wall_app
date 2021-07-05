import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { createPostsApi } from '@redux/modules/feed/actions'
import { GlobalState } from '@redux/modules/types'
import Button from '@components/core/Button'
import TextArea from '@components/core/TextArea'

import usePostCreator from './usePostCreator'

const PostCreator: FC<PropsFromRedux> = ({
  createPostsAction,
  userName,
  error
}) => {
  const {
    handleClick,
    handlePostContent,
    postContent,
    isDisabled,
    customPlaceholder
  } = usePostCreator({
    createPostsAction,
    userName
  })

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-1 m-1 w-full">
        <TextArea
          isDisabled={isDisabled}
          value={postContent}
          onChange={handlePostContent}
          placeholder={customPlaceholder}
          name="content"
        />
        <Button
          onClick={handleClick}
          className="button-base colorful py-9 px-4"
          isDisabled={isDisabled || !postContent}
        >
          Post
        </Button>
      </div>
      {(error?.detail || error?.content) && (
        <p className="error-message">{error.detail || error.content}</p>
      )}
    </div>
  )
}

const mapState = ({ profile, feed }: GlobalState) => ({
  userName: profile.profile.username,
  error: feed.error
})

const mapDispatch = {
  createPostsAction: createPostsApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PostCreator)
