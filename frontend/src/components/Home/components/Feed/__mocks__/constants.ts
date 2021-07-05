import { GlobalState } from '@redux/modules/types'

export const INITIAL_STATE: GlobalState = {
  auth: {
    token: null,
    loading: false,
    error: {}
  },
  profile: {
    profile: {},
    loading: false,
    error: {}
  },
  feed: {
    posts: [],
    loading: false,
    error: {},
    hasUpdate: false
  }
}

export const FILLED_STATE: GlobalState = {
  auth: {
    token: {
      refresh: 'refresh_token',
      access: 'Access_token'
    },
    loading: false,
    error: {}
  },
  profile: {
    profile: {
      email: 'tester3@tester.com',
      username: 'tester3',
      isActive: true,
      id: 1
    },
    loading: false,
    error: {}
  },
  feed: {
    posts: [
      {
        author: 'tester3',
        content: 'Cool post.',
        createdAt: '2021-07-04T03:22:58.608758Z',
        id: 1,
        upVote: 0,
        userUpVotes: []
      },
      {
        author: 'tester2',
        content: 'Cool post 2.',
        createdAt: '2021-07-04T03:22:58.608758Z',
        id: 2,
        upVote: 0,
        userUpVotes: []
      }
    ],
    loading: false,
    error: {},
    hasUpdate: false
  }
}
