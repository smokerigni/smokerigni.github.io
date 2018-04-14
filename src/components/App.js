import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import PageNotFound from './PageNotFound'
import Breadcrumbs from './Breadcrumbs'

import { css } from 'glamor'

let mainCSS = css({
  background: '#ffffff'
})

let imageCSS = css({
  width: '3.6em',
  height: '3.6em',
  borderRadius: '50%'
})

export default function App () {
  return (
    <main {...mainCSS} className={'box no-gutter flex-container'}>
      <header className={'box no-gutter flex-container v-align-stretch'}>
        <div className={'box m-3 flex-container h-align-right'}>
          <img {...imageCSS} src={'/src/static/android-chrome-192x192.png'} alt={'@smokerigni'} />
        </div>
        <nav className={'box m-9 flex-container v-align-bottom'}>
          <Breadcrumbs />
        </nav>
      </header>
      <aside className={'box m-3 flex-container h-align-right'}>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>
        </nav>
      </aside>
      <section className={'box m-9'}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </section>
      <footer>
        Copyright 2018 @smokerigni
      </footer>
    </main>
  )
}
