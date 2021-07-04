import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { getPostsApi } from '../../../../redux/modules/feed/actions'
import { GlobalState } from '../../../../redux/modules/types'
import { API_ENDPOINTS } from '../../../../services/constants'
import PostCard from './components/PostCard'

const Feed: FC<PropsFromRedux> = ({ getPostsAction, posts, hasPostUpdate }) => {
  useEffect(() => {
    if (hasPostUpdate || !posts.length) {
      getPostsAction({ endpoint: API_ENDPOINTS.feed, method: 'get' })
    }
  }, [hasPostUpdate])

  return (
    <div className="flex flex-col items-center gap-6 mt-2 overflow-auto max-h-75">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

const mapState = ({ feed }: GlobalState) => ({
  posts: feed.posts,
  hasPostUpdate: feed.hasUpdate,
  error: feed.error,
  isLoading: feed.loading
})

const mapDispatch = {
  getPostsAction: getPostsApi
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Feed)
