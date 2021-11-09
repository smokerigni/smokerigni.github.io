import React, { useState, useEffect } from 'react'
import './ContactCodeBlock.scss'

const CodeCursorComponent = () => (
  <span className="code-cursor">_</span>
)

const ResetButton = ({ handleReset }: { handleReset: () => void }) => {
  const customHandleReset = (event: React.MouseEvent) => {
    event.preventDefault()
    handleReset()
  }
  return <span className="option-inline" onClick={customHandleReset}>Reset contact "form"</span>
}

const contactReasons = Object.freeze({
  JOB: 'job.',
  FREELANCE: 'freelance activities.',
  HELLO: '...i have no question, just want to push this button.'
})

const animatedTextHello: string = 'i have no question, just want to push this button.'
const animatedTextOther: string = 'i would like to contact you. I have some questions about your '

const ContactCodeBlock: React.FunctionComponent = () => {
  const [ reason, setReason ] = useState<string>('')
  const [ typed, setTyped ] = useState<string>('')

  const handleReasonSelect = (event: React.MouseEvent) => {
    event.preventDefault()
    setTyped(reason === contactReasons.HELLO
      ? animatedTextHello
      : animatedTextOther)
    clearInterval(animationHandlerInterval)
    setReason(event.currentTarget.innerHTML)
  }

  const handleResetReason = () => setReason('')

  let animationHandlerInterval: ReturnType<typeof setInterval>

  useEffect(() => {
    console.log('Reason changed')
    if (reason === '') {
      setTyped('')
      let i = 0
      animationHandlerInterval = setInterval(() => {
        if (i < animatedTextOther.length) {
          console.log('not equals, setTyped', animatedTextOther.substring(0, i + 1))
          setTyped(animatedTextOther.substring(0, i + 1))
          i++
        } else {
          console.log('clear')
          clearInterval(animationHandlerInterval)
        }
      }, 65)
    } else {
      // selecting a reason stops typing animation
      setTyped(reason === contactReasons.HELLO
        ? animatedTextHello
        : animatedTextOther)
    }
    return () => clearInterval(animationHandlerInterval)
  }, [ reason ])

  const renderAnswer = () => {
    switch (reason) {
      case contactReasons.JOB:
        return (
          <React.Fragment>
            <br/>
            {'>'} You can contact me at <a href={'https://www.linkedin.com/in/smokerigni/'}
                                           target={'_blank'}>linkedin</a>.
          </React.Fragment>
        )
      case contactReasons.FREELANCE:
        return (
          <React.Fragment>
            <br/>
            {'>'} Send me a message via <a href={'mailto:smokerigni@gmail.com'}>email</a>!
          </React.Fragment>
        )
      case contactReasons.HELLO:
        return (
          <React.Fragment>
            <br/>
            {'>'} I know, this is a nice button. Treat it gently. ;)
          </React.Fragment>
        )
      default:
        return <React.Fragment/>
    }
  }


  return (
    <div className="contact-code-block w-100 m-auto">
      <h2>Get in touch</h2>
      <div className="code-styled p-3">
        Contact PowerShell<br/>
        Copyright (C) Smokerigni. All rights reserved.<br/>
        <br/>
        PS Web:\{'>'}get-in-touch -message="- Hi Ignác, <span>{typed}</span>
        {reason === '' ? <CodeCursorComponent/> : (reason !== contactReasons.HELLO ? reason : '')}"
        {renderAnswer()}
        <br/><br/>
        {reason === ''
          ? (
            <div className="w-100 ">
              {Object
                .entries(contactReasons)
                .map(([ key, value ], i) =>
                  <span
                    className="option-inline"
                    key={key}
                    onClick={handleReasonSelect}>{value}</span>)}
            </div>
          )
          : <ResetButton handleReset={handleResetReason}/>}
      </div>

    </div>
  )
}

export default ContactCodeBlock
