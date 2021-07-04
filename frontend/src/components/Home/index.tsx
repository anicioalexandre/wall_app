import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { profileApi } from '../../redux/modules/profile/actions'
import PostCreator from './components/PostCreator'
import Header from './components/Header'
import Feed from './components/Feed'
import { decodeToken } from '../../utils/token'
import { getLocalToken } from '../../services/localStorage'
import { API_ENDPOINTS } from '../../services/constants'

const Home: FC<PropsFromRedux> = ({ getProfileAction }) => {
  useEffect(() => {
    const token = getLocalToken()
    const userId = decodeToken(token.access).user_id

    getProfileAction({
      method: 'get',
      endpoint: `${API_ENDPOINTS.user}${userId}/`
    })
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
  getProfileAction: profileApi
}

const connector = connect(null, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Home)
