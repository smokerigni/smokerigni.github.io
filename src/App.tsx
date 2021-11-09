import './App.css'
import React from "react"
import ContactCodeBlock from "./components/ContactCodeBlock/ContactCodeBlock";

const App: React.FunctionComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-4">
          <h1>Hello.</h1>
          <p>
            My name is Ignác Török. Having eight years' experience
            in structuring, I have acquired proficient web developing skills, both at developing and at implementing
            interactive web services. My actual focus is the frontend with Reactjs.
          </p>
          <img className="d-block w-100" src="/pexels-olia-danilevich-4974914.jpg"/>
        </div>
      </div>
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-4">
          <ContactCodeBlock/>
        </div>
      </div>
    </div>
  )
}

export default App
