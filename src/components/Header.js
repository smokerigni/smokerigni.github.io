import React from 'react'
import { NavLink } from 'react-router-dom'

import { css } from 'glamor'

let imageCSS = css({
  width: '3.6em',
  height: '3.6em',
  borderRadius: '50%'
})

let menuCSS = css({
  background: 'url(/src/static/background.jpg) no-repeat center center',
  backgroundSize: 'cover'
})

let menuLayerCSS = css({
  background: 'rgba(0,0,0,.72)'
})

let menuItemCSS = css({
  width: '3.6em',
  height: '3.6em',
  margin: '0 1em'
})

let menuItemCircleCSS = css({
  position: 'relative',
  background: 'rgba(255,255,255,0)',
  borderRadius: '50%',
  ' a': {
    display: 'block',
    width: '.6em',
    height: '.6em',
    borderRadius: '50%',
    background: 'rgba(255,255,255,.44)',
    ':hover': {
      background: 'rgba(255,255,255,.88)'
    }
  }
})

let menuItemCaptionCSS = css({
  position: 'absolute',
  textAlign: 'center',
  top: '1.8em',
  transform: 'rotate(30deg)',
  left: '3.2em',
  transformOrigin: 'left top',
  color: '#ffffff',
  fontSize: '.85em',
  textTransform: 'uppercase'
})

let menuSeparatorCSS = css({
  width: 'calc((100% - 24em) / 5)',
  borderBottom: '1px solid rgba(255,255,255,.4)',
  display: 'block'
})

class Header extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.style = css({
      height: this.props.location.pathname === '/' ? '100vh' : '8em'
    })
  }

  componentWillMount () {
    this.unlisten = this.props.history.listen((location, action) => {
      if (location.pathname === '/') {
        this.style = css({
          height: '100vh'
        })
      } else {
        this.style = css({
          height: '8em'
        })
      }
    })
  }
  componentWillUnmount () {
    this.unlisten()
  }

  render () {
    return (
      <header {...this.style} {...menuCSS} className={'header box no-gutter flex-container v-align-stretch'}>
        <nav {...menuLayerCSS} className={'box flex-container v-align-stretch'}>
          <ul {...css({ listStyle: 'none' })} className={'box no-gutter flex-container h-align-center v-align-middle'}>
            <li {...menuItemCSS}>
              <NavLink to={'/'}>
                <img {...imageCSS} src={'/src/static/android-chrome-192x192.png'} alt={'@smokerigni'} />
              </NavLink>
            </li>
            <li {...menuSeparatorCSS} />
            <li {...css(menuItemCSS, menuItemCircleCSS)} className={'flex-container h-align-center v-align-middle'}>
              <NavLink to={'/cv'}>
                <div {...menuItemCaptionCSS}>CV</div>
              </NavLink>
            </li>
            <li {...menuSeparatorCSS} />
            <li {...css(menuItemCSS, menuItemCircleCSS)} className={'flex-container h-align-center v-align-middle'}>
              <NavLink to={'/about'}>
                <div {...menuItemCaptionCSS}>About</div>
              </NavLink>
            </li>
            <li {...menuSeparatorCSS} />
            <li {...css(menuItemCSS, menuItemCircleCSS)} className={'flex-container h-align-center v-align-middle'}>
              <NavLink to={'/contact'}>
                <div {...menuItemCaptionCSS}>Contact</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
