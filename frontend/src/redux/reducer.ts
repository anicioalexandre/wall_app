import { combineReducers } from 'redux'

import auth from './modules/auth/reducer'
import profile from './modules/profile/reducer'
import feed from './modules/feed/reducer'

export default combineReducers({ auth, profile, feed })
