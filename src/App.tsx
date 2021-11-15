import './App.scss'
import React from "react"
import ContactCodeBlock from "./components/ContactCodeBlock/ContactCodeBlock"
import Technologies from "./components/Technologies/Technologies";
import Konami from "./components/Konami/Konami";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import ParallaxImage from "./components/ParallaxImage/ParallaxImage";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Navigation/>
      <article className="content w-100">
        <div className="container-fluid">
          <header id="hello" className="row align-items-center justify-content-center position-relative">
            <ParallaxImage/>
            <div className="position-relative col-10 col-lg-4 col-md-8">
              <div className="d-flex flex-wrap">
                <h1 className="w-100">
                  Hello. It's me.
                  <span>@smokerigni</span>
                </h1>
                <div className="sub-h1">Frontend developer</div>
                <p className="d-none">
                  My name is Ignác Török. Having eight years' experience
                  in structuring, I have acquired proficient web developing skills, both at developing and at
                  implementing
                  interactive web services. My actual focus is the frontend with Reactjs.
                </p>
              </div>
            </div>
          </header>
          <div id="konami-tooltip" className="text-center p-3">
            <i className="bi bi-egg-fill"/>
            <i className="bi bi-egg-fill"/>
            <i className="bi bi-egg-fill"/>
            Easter egg:
            Konami code works on this site
          </div>
          <section id="skills" className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-6 col-md-8">
              <h2>Skills</h2>
              <h3>Objective</h3>
              <p>
                Gained experience in UI/UX design by working as a web developer for nearly 8 years. I like facing
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
          <About/>
          <section id="contact" className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-6 col-md-8">
              <ContactCodeBlock/>
              <div className="quick-contact-actions row row-cols-lg-2 row-cols-1">
                <div className="col d-flex align-items-center my-3">
                  <i className="bi bi-envelope"/>
                  <a href="mailto:smokerigni@gmail.com">smokerigni@gmail.com</a>
                </div>
                <div className="col d-flex align-items-center my-3">
                  <i className="bi bi-phone-vibrate"/>
                  <a href="tel:+36317826113">+36317826113</a>
                </div>
                <div className="col d-flex align-items-center my-3">
                  <i className="bi bi-linkedin"/>
                  <a href="https://www.linkedin.com/in/smokerigni/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
                <div className="col d-flex align-items-center my-3">
                  <i className="bi bi-github"/>
                  <a href="https://github.com/smokerigni" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </section>
          <footer className="row">
            <p>&#169; 2018-2021 @smokerigni</p>
          </footer>
        </div>
      </article>
      <Konami/>
    </React.Fragment>
  )
}

export default App
