import './Navigation.scss'
import React, { useState } from "react"

const Navigation: React.FunctionComponent = () => {
  const [ menu, setMenu ] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  const scrollToSection = (event: React.MouseEvent) => {
    event.preventDefault()
    const id = event.currentTarget.getAttribute('href')
    const targetSection = id !== null ? document.querySelector(id) : null
    if (targetSection !== null) targetSection.scrollIntoView({ behavior: 'smooth' })
    toggleMenu()
  }

  return (
    <React.Fragment>
      <nav className={(menu ? "open" : "closed") + " d-flex justify-content-center flex-wrap align-items-center"}>
        <div className="menu-toggle align-self-start d-flex align-items-center justify-content-center"
             onClick={toggleMenu}>
          <span className="menu-toggle-label-segment">m</span>
          <span className="bars">
            <div className="bar"/>
            <div className="bar"/>
            <div className="bar"/>
          </span>
          <span className="menu-toggle-label-segment">nu</span>
        </div>
        <div className="close-layer position-absolute"
             onClick={toggleMenu}/>
        <ul className="position-relative align-self-baseline list-unstyled w-100">
          <li>
            <a onClick={scrollToSection} href="#hello">Hello</a>
          </li>
          <li>
            <a onClick={scrollToSection} href="#skills">Skills</a>
          </li>
          <li>
            <a onClick={scrollToSection} href="#about">About</a>
          </li>
          <li>
            <a onClick={scrollToSection} href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
