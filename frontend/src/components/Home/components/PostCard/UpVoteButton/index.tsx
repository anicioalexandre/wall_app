import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Button from '../../../../core/Button'

import { updatePostsApi } from '../../../../../redux/modules/feed/actions'
import { GlobalState } from '../../../../../redux/modules/types'
import useUpVoteButton from './useUpVoteButton'
import { UpVoteButtonProps } from './types'

const UpVoteButton: FC<UpVoteButtonProps & PropsFromRedux> = ({
  updatePostAction,
  postId,
  profileId,
  userUpVotes
}) => {
  const { handleUpVote, hasUpVoted } = useUpVoteButton({
    postId,
    profileId,
    updatePostAction,
    userUpVotes
  })

  const buttonStyle = hasUpVoted ? 'bg-primary text-white' : 'text-primary-dark'

  return (
    <Button
      className={`${buttonStyle} outline-button`}
      onClick={handleUpVote}
      isDisabled={!profileId}
    >
      Upvote
    </Button>
  )
}

const mapState = ({ profile }: GlobalState) => ({
  profileId: profile.profile.id
})

const mapDispatch = {
  updatePostAction: updatePostsApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UpVoteButton)
