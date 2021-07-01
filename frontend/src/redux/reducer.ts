import { combineReducers } from 'redux'

import auth from './modules/auth/reducer'
import profile from './modules/profile/reducer'

export default combineReducers({ auth, profile })
