export type GlobalState = {
  auth: import('./auth/types').AuthState
  profile: import('./profile/types').ProfileState
  feed: import('./feed/types').FeedState
}
