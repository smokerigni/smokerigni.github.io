import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import CV from './cv'
import About from './About'
import PageNotFound from './PageNotFound'

import { css } from 'glamor'

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

export default function App () {
  return (
    <main {...mainCSS} className={'box no-gutter flex-container'}>
      <Switch>
        <Route component={Header} />
      </Switch>
      <section className={'box no-gutter'}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cv' component={CV} />
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
