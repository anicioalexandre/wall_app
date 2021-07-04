import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { connect, ConnectedProps } from 'react-redux'

import { clearProfile } from '../../../../redux/modules/profile/actions'
import { userLogout } from '../../../../redux/modules/auth/actions'
import { removeLocalToken } from '../../../../services/localStorage'
import Button from '../../../core/Button'

const LogoutButton: FC<PropsFromRedux> = ({
  logoutAction,
  clearProfileAction
}) => {
  const history = useHistory()
  const handleClick = () => {
    logoutAction()
    removeLocalToken()
    clearProfileAction()

    history.push('/login')
  }
  return <Button onClick={handleClick}>Logout</Button>
}

const mapDispatch = {
  logoutAction: userLogout,
  clearProfileAction: clearProfile
}

const connector = connect(null, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(LogoutButton)
