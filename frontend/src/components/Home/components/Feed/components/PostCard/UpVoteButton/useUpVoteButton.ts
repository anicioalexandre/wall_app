import { API_ENDPOINTS } from '@services/constants'

import { UpVoteButtonProps } from './types'
import { PropsFromRedux } from './index'

const useUpVoteButton = ({
  postId,
  profileId,
  updatePostAction,
  userUpVotes
}: Partial<UpVoteButtonProps & PropsFromRedux>) => {
  const hasUpVoted = userUpVotes.includes(profileId)

  const endpoint = hasUpVoted
    ? API_ENDPOINTS.removePostVote
    : API_ENDPOINTS.addPostVote

  const handleUpVote = () => {
    updatePostAction({
      method: 'put',
      endpoint: `${endpoint}${postId}/`
    })
  }

  return { handleUpVote, hasUpVoted }
}

export default useUpVoteButton
