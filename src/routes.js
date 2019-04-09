import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Not from './Components/Not/Not'


export default(
  <Switch>
    <Route path='/Home' component={Home} />
    <Route path='/Not' component={Not} />
  </Switch>
)

