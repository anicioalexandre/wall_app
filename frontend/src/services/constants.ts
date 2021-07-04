export const BASE_URL = 'http://localhost:8000' // handling only local api for now

export const API_ENDPOINTS = {
  login: '/api/token/',
  refresh: '/api/token/refresh/',
  signUp: '/api/user/signup/',
  user: '/api/user/',
  feed: '/api/feed/',
  addPostVote: '/api/feed/add_vote/',
  removePostVote: '/api/feed/remove_vote/'
}
