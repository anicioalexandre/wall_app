import { combineReducers } from 'redux'

import auth from './modules/auth'
import profile from './modules/profile'

export default combineReducers({ auth, profile })
