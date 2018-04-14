import React from 'react'
import Interactive from 'react-interactive'
import { Switch, Route, Link } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import s from '../styles/exampleComponent.style'

const ExamplePageText = () => (
  <p style={s.p}>
    This is an example page. Refresh the page or copy/paste the url to
    test out the redirect functionality (this same page should load
      after the redirect).
  </p>
)

export default function ExampleComponent () {
  return (
    <div>
      <ExamplePageText />
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to='/asd' >
          example link
          </Interactive>
      </div>
    </div>

  )
}
