import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes
