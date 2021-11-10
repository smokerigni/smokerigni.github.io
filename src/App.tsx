import './App.scss'
import React, { useState } from "react"
import ContactCodeBlock from "./components/ContactCodeBlock/ContactCodeBlock"
import Technologies from "./components/Technologies/Technologies";

const App: React.FunctionComponent = () => {
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
        <ul className="align-self-baseline list-unstyled w-100">
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
      <article className="content">
        <div className="container-fluid">
          <header id="hello" className="row align-items-center justify-content-center">
            <div className="col-10 col-lg-4 col-md-8">
              <div className="d-flex flex-wrap">
                <h1>
                  Hello. It's me.
                  <span>@smokerigni</span>
                </h1>
                <p>
                  My name is Ignác Török. Having eight years' experience
                  in structuring, I have acquired proficient web developing skills, both at developing and at
                  implementing
                  interactive web services. My actual focus is the frontend with Reactjs.
                </p>
              </div>
            </div>
          </header>
          <section id="skills" className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-6 col-md-8">
              <h2>Skills</h2>
              <h3>Objective</h3>
              <p>
                Gained experience in UI/UX design by working as a web developer for nearly 6 years. I like facing
                challenges
                and provide neat solutions using the best tools available.
              </p>
              <h3>Knowledge</h3>
              <h4>Technologies</h4>
              <Technologies/>
              <h4>Software</h4>
              WebStorm, Apache NetBeans, VSCode, Xampp, Git, Notepad++, Sublime
            </div>
          </section>
          <section id="about" className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-6 col-md-8">
              <h2>About me</h2>
              <div>
                Switch: Chronology or Long version
              </div>
              <p>
                My name is Ignác Török. Having eight years' experience
                in structuring, I have acquired proficient web developing skills, both at developing and at implementing
                interactive web services. My actual focus is the frontend with Reactjs.
              </p>
              <p>
                At the beginning of my professional career, I designed minor web works. As a result, a couple of
                relatively
                simple, custom-built webpages were established as well as a few mini-games in Unity. This period was an
                impressive learning phase, for these early successes indeed had a great impact on me and encouraged me
                to
                continuously engage in this field.
              </p>
              <p>
                After I had obtained a web programming degree, I first cooperated in the development of an online
                journal
                engine. Then I started working in a high school as system monitoring administrator.
              </p>
              <h3>Back to school</h3>
              <p>
                There were 136 clients and 3 servers in the high school – I was in charge of maintaining all the
                machines
                and network devices, both software and hardware. I worked really hard and often went to the office on
                weekends, too. However, I have gained a handful of experience and a deeper apprehension in understanding
                larger systems.
                <br/>
                For programming fits rather to my interests than repairing, I left the job after almost a year.
              </p>
              <h3>Hello world</h3>
              <p>
                Later on, I was employed by a company in Budaörs, which dealt with web development and system
                maintenance.
                Actually, the complete repertoire included web development, system administrator services, (e-)commerce,
                and
                IT consulting. I worked there as a midlevel PHP developer between 2015 and 2017. This environment also
                provided me specific experiences in terms of corporate governance, operating customer services and
                frameworks. Previously, I had been operating all by myself, but then I learnt a lot about teamwork and
                what
                it is like being the part of a seven-member team.
              </p>
              <h3>MaxWhere, the future's software</h3>
              <p>
                I first met the MaxWhere team in 2016, when they were looking for a user interface developer. They
                shared
                their interesting ideas with me, and – since I liked their software – I decided to be the part of this
                project in January 2017.
              </p>
              <p>
                This software proved its potential serving as a rich location of future’s education and collaboration.
                The
                original idea was an innovative presentation tool, which now is suitable for a much more diverse usage.
                Worked closely with the UX team, my task was to develop the user interface of the software.
              </p>
              <h3>Present, future</h3>
              <p>
                Open to work!
              </p>
            </div>
          </section>
          <section id="contact" className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-6 col-md-8">
              <ContactCodeBlock/>
              +36317826113
              smokerigni@gmail.com
            </div>
          </section>
          <footer className="container-fluid">
            <p>Copyright 2021 @smokerigni</p>
          </footer>
        </div>
      </article>
    </React.Fragment>
  )
}

export default App
