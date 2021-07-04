import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { connect, ConnectedProps } from 'react-redux'

import { LOGIN_BUTTON, LOGOUT_BUTTON } from '../../../../../core/Form/constants'
import { GlobalState } from '../../../../../../redux/modules/types'
import Button from '../../../../../core/Button'

const ActionButton: FC<PropsFromRedux> = ({ profileId }) => {
  const history = useHistory()
  const handleClick = () => {
    const route = profileId ? '/signup' : '/login'
    history.push(route)
  }

  const buttonName = profileId ? LOGOUT_BUTTON : LOGIN_BUTTON

  return <Button onClick={handleClick}>{buttonName}</Button>
}

const mapState = ({ profile }: GlobalState) => ({
  profileId: profile.profile.id
})

const connector = connect(mapState)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ActionButton)
