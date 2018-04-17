import React from 'react'
import { css } from 'glamor'

const styles = {
  a: css({
    color: 'yellow'
  }),
  button: css({
    display: 'block',
    textAlign: 'center',
    padding: '.85em',
    background: '#f9f9f9',
    border: '1px solid #444',
    width: '100%',
    outline: 'none',
    cursor: 'pointer',
    ':hover': {
      background: '#DDD'
    }
  }),
  resetButton: css({
    display: 'block',
    textAlign: 'center',
    padding: '.35em',
    margin: '0 auto',
    background: '#f9f9f9',
    border: '1px solid #444',
    outline: 'none',
    cursor: 'pointer',
    ':hover': {
      background: '#DDD'
    }
  }),
  code: css({
    background: '#242424',
    borderRadius: '.4em',
    padding: '.4em',
    display: 'block',
    widht: '100%',
    color: '#DEDEDE'
  })
}

class Contact extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      reason: null
    }

    this.pointer = () => {
      return <span {...css({
        animation: `${css.keyframes({
          '0%': { color: `inherit` },
          '50%': { color: `transparent` }
        })} .65s linear infinite`
      })}>_</span>
    }

    this.backButton = () => {
      return <button {...styles.resetButton} onClick={e => this.setState({ reason: null })}>Reset contact "form"</button>
    }

    this.renderAnswer = () => {
      switch (this.state.reason) {
        case 'job':
          return (
            <div>
              <br />
              > You can contact me at <a {...styles.a} href={'https://www.linkedin.com/in/smokerigni/'} target={'_blank'}>linkedin</a>.
            </div>
          )
        case 'freelance activies':
          return (
            <div>
              <br />
              > Send me a message via <a {...styles.a} href={'mailto:smokerigni@gmail.com'}>email</a>!>
            </div>
          )
        case 'other activies':
          return (
            <div>
              <br />
              > You can send me a request at <a {...styles.a} href={'https://www.facebook.com/smokerigni'} target={'_blank'}>facebook</a>.
            </div>
          )
        case 'say hello':
          return (
            <div>
              <br />
              > I know, this is a nice button. Treat it gently. ;)
            </div>
          )
        default:
          return null
      }
    }
  }

  componentWillMount () {}

  render () {
    if (this.state.reason) {
      this.refs.type.innerHTML = this.state.reason === 'say hello' ? 'i have no question, just want to push this button.' : 'i would like to contact you. I have some questions about your ' + this.state.reason + '.'
    } else {
      let message = 'i would like to contact you. I have some questions about your '
      let typingPromises = (message, timeout) =>
        [...message]
        .map((ch, i) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(message.substring(0, i + 1))
            }, timeout * i)
          })
        )

      typingPromises(message, 50).forEach(promise => {
        promise.then(portion => {
          this.refs.type.innerHTML = portion
        })
      })
    }

    return (
      <div {...css({ padding: '0 10%' })} className={'box no-gutter flex-container'}>
        <h1 {...css({ textAlign: 'center' })} className={'box'}>Contact</h1>
        <div className={'box'}>
          <code {...styles.code}>
            Contact PowerShell<br />
            Copyright (C) Smokerigni. All rights reserved.<br />
            <br />
            PS Web:\>get-in-touch -message="- Hi Ignác, <span ref={'type'} />
            { !this.state.reason ? this.pointer() : null}"
            { this.renderAnswer() }
          </code>
        </div>
        { !this.state.reason ? (<div className={'box no-gutter flex-container v-align-stretch'}>
          <div className={'box m-3 flex-container v-align-stretch'}>
            <button {...styles.button} onClick={e => this.setState({ reason: 'job' })}>job.</button>
          </div>
          <div className={'box m-3 flex-container v-align-stretch'}>
            <button {...styles.button} onClick={e => this.setState({ reason: 'freelance activies' })}>freelance activies.</button>
          </div>
          <div className={'box m-3 flex-container v-align-stretch'}>
            <button {...styles.button} onClick={e => this.setState({ reason: 'other activies' })}>other activies.</button>
          </div>
          <div className={'box m-3 flex-container v-align-stretch'}>
            <button {...styles.button} onClick={e => this.setState({ reason: 'say hello' })}>...i have no question, just want to push this button.</button>
          </div>
        </div>) : this.backButton()}
      </div>
    )
  }
}

export default Contact
