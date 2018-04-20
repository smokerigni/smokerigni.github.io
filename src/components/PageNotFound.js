import React from 'react'
import PropTypes from 'prop-types'
import { Helmet as Head } from 'react-helmet'

const propTypes = {
  location: PropTypes.object.isRequired
}

export default function PageNotFound ({ location }) {
  return (
    <div>
      <Head title='404 - Page not found - smokerigni.github.io'>
        <html lang='en' amp />
      </Head>
      Page not found - the path, <code>{location.pathname}</code>,
      doesn't exist on this site.
    </div>
  )
}

PageNotFound.propTypes = propTypes
