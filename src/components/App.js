import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import CV from './cv'
import About from './About'
import PageNotFound from './PageNotFound'

import ReactGA from 'react-ga'

import { css } from 'glamor'

ReactGA.initialize('UA-93555115-3')

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

class Analytics extends React.Component {
  componentDidMount () {
    this.sendPageChange(this.props.location.pathname, this.props.location.search)
  }

  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname ||
      this.props.location.search !== prevProps.location.search) {
      this.sendPageChange(this.props.location.pathname, this.props.location.search)
    }
  }

  sendPageChange (pathname, search = '') {
    /* Later search component? */
    const page = pathname + search
    ReactGA.set({page})
    ReactGA.pageview(page)
  }

  render () {
    return null
  }
}

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
