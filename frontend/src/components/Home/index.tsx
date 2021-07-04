import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { clearProfile, profileApi } from '../../redux/modules/profile/actions'
import PostCreator from './components/Feed/components/PostCreator'
import Header from './components/Feed/components/Header'
import Feed from './components/Feed'
import { decodeToken } from '../../utils/token'
import { getLocalToken, removeLocalToken } from '../../services/localStorage'
import { API_ENDPOINTS } from '../../services/constants'
import { userLogout } from '../../redux/modules/auth/actions'

const Home: FC<PropsFromRedux> = ({
  getProfileAction,
  clearProfileAction,
  logoutAction
}) => {
  useEffect(() => {
    const token = getLocalToken()
    const userId = decodeToken(token.access).user_id

    getProfileAction({
      method: 'get',
      endpoint: `${API_ENDPOINTS.user}${userId}/`
    })

    return () => {
      removeLocalToken()
      clearProfileAction()
      logoutAction()
    }
  }, [])

  return (
    <>
      <Header />
      <PostCreator />
      <Feed />
    </>
  )
}

const mapDispatch = {
  getProfileAction: profileApi,
  clearProfileAction: clearProfile,
  logoutAction: userLogout
}

const connector = connect(null, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Home)
