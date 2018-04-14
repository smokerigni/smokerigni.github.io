import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import Breadcrumbs from './Breadcrumbs'
import s from '../styles/app.style'

export default function App () {
  return (
    <div style={s.root}>
      <h1 style={s.title}>smokerigni.github.io</h1>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}
