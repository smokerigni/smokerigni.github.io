import React from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'

export default function Home () {
  const repoReadmeLink = text => (
    <Interactive
      as='a'
      href='https://github.com/rafrex/spa-github-pages#readme'
    >{text}</Interactive>
  )

  return (
    <div>
      <p>
        Home page
      </p>
    </div>
  )
}
