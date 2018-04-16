import React from 'react'
import { css } from 'glamor'

const styles = {
  a: css({
    color: '#666',
    fontStyle: 'italic'
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
    background: '#f9f9f9',
    border: '1px solid #444',
    outline: 'none',
    cursor: 'pointer',
    ':hover': {
      background: '#DDD'
    }
  })
}

// this will be a class with states

class Contact extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      reason: null
    }

    this.backButton = () => {
      return <button {...styles.resetButton} onClick={e => this.setState({ reason: null })}>Reset contact "form"</button>
    }

    this.renderSection = () => {
      switch (this.state.reason) {
        case 'job':
          return (
            <div className={'box flex-container'}>
              <p>- You can contact me at <a {...styles.a} href={'https://www.linkedin.com/in/smokerigni/'} target={'_blank'}>linkedin</a>.</p>
              { this.backButton() }
            </div>
          )
        case 'freelance activies':
          return (
            <div className={'box flex-container'}>
              <p>- Send me a message via <a {...styles.a} href={'mailto:smokerigni@gmail.com'}>email</a>!</p>
              { this.backButton() }
            </div>
          )
        case 'other activies':
          return (
            <div className={'box flex-container'}>
              <p>- You can send me a request at <a {...styles.a} href={'https://www.facebook.com/smokerigni'} target={'_blank'}>facebook</a>.</p>
              { this.backButton() }
            </div>
          )
        case 'say hello':
          return (
            <div className={'box flex-container'}>
              <p>- I know, this is a nice button. Treat it gently. :)</p>
              { this.backButton() }
            </div>
          )
        default:
          return null
      }
    }
  }

  componentWillMount () {}

  render () {
    return (
      <div {...css({ padding: '0 10%' })} className={'box no-gutter flex-container'}>
        <h1 {...css({ textAlign: 'center' })} className={'box'}>Contact</h1>
        <div className={'box'}>
          <p>
            - Hi Ignác, {this.state.reason ? this.state.reason === 'say hello' ? 'i have no question, just want to push this button.' : 'i would like to contact you. I have some questions about your ' + this.state.reason + '.' : 'i would like to contact you. I have some questions about your ___'}
          </p>
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
        </div>) : null}
        { this.renderSection() }
      </div>
    )
  }
}

export default Contact
