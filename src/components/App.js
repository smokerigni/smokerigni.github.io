import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Analytics from './Analytics'
import Home from './Home'
import Contact from './Contact'
import Skills from './Skills'
import About from './About'
import PageNotFound from './PageNotFound'

import { css } from 'glamor'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

let now = new Date()
now.setTime(now.getTime() + 1 * 3600 * 24 * 30 * 1000)
console.log(now)

cookies.set('cookie', 'This is a cookie :)', { path: '/', expires: now })
console.log(cookies.get('cookie'))

let mainCSS = css({
  background: '#ffffff'
})

let footerCSS = css({
  position: 'fixed',
  width: '100vh',
  bottom: '0',
  left: 'calc(100% - 1em)',
  transform: 'rotate(-90deg)',
  transformOrigin: 'left center'
})

const AnalyticsTracker = () => {
  return <Route component={Analytics} />
}

export default function App () {
  return (
    <main {...mainCSS} className={'box no-gutter flex-container'}>
      <AnalyticsTracker />
      <Switch>
        <Route component={Header} />
      </Switch>
      <section className={'box no-gutter'}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </section>
      <footer {...footerCSS}>
        <span {...css({ fontSize: '.7em', color: '#888', letterSpacing: '1px', textTransform: 'uppercase' })}>Copyright 2018 @smokerigni</span>
      </footer>
    </main>
  )
}
