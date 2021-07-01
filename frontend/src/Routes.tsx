import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes
