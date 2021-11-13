import './About.scss'
import React, { useState } from "react"
import Chronology from "./Chronology";
import Story from "./Story";

const About: React.FunctionComponent = () => {
  const [ tab, setTab ] = useState<string>('short')

  const selectLongTab = () => setTab('long')
  const selectShortTab = () => setTab('short')

  return (
    <React.Fragment>
      <section id="about" className="row h-100 align-items-center justify-content-center">
        <div className="col-12 col-lg-6 col-md-8">
          <h2>About me</h2>
          <div className="about-switch row row-cols-2">
            <div className="col">
              <div
                onClick={selectLongTab}
                className={"tab even d-flex align-items-center justify-content-center" + (tab === 'long' ? ' active' : '')}>
                Story
              </div>
            </div>
            <div className="col">
              <div
                onClick={selectShortTab}
                className={"tab odd d-flex align-items-center justify-content-center" + (tab === 'short' ? ' active' : '')}>
                Chronology
              </div>
            </div>
          </div>
          {tab === 'short'
            ? <Chronology/>
            : <Story/>}
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
