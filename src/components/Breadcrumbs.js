import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Interactive from 'react-interactive'

const breadCrumbTitles = {
  '': '@smokerigni',
  'contact': 'Contact',
  'about': 'About',
  'cv': 'CV'
}

function BreadcrumbsItem ({ match }) {
  const title = breadCrumbTitles[match.url.split('/').slice(-1)]
  const to = title === undefined ? '/' : match.url

  return (
    <span>
      <Interactive
        as={Link}
        to={to}
      >{title || 'Page Not Found'}</Interactive>
      {!match.isExact && title && ' / '}
      {title &&
        <Route path={`${match.url === '/' ? '' : match.url}/:path`} component={BreadcrumbsItem} />
      }
    </span>
  )
}

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired
}

export default function Breadcrumbs () {
  return (
    <Route path='/' component={BreadcrumbsItem} />
  )
}
