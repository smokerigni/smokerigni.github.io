import React from 'react'
import { NavLink } from 'react-router-dom'

import AsyncImage from './AsyncImage'

import { css } from 'glamor'

let imageCSS = css({
  width: '3.6em',
  height: '3.6em',
  borderRadius: '50%'
})

let menuCSS = css({
  position: 'relative',
  overflow: 'hidden'
})

let menuLayerCSS = css({
  background: 'rgba(0,0,0,.72)',
  position: 'relative',
  zIndex: '2'
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
        <AsyncImage
          className={'flex-container v-align-middle'}
          style={{
            position: 'absolute',
            top: '-9999px',
            right: '-9999px',
            bottom: '-9999px',
            left: '-9999px',
            margin: 'auto',
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%'
          }}
          source={'/src/static/background.jpeg'}
          placeholder={{
            image: '/src/static/background-200.jpeg'
          }}
        />
        <nav {...menuLayerCSS} className={'box flex-container v-align-stretch'}>
          <ul {...css({ listStyle: 'none' })} className={'box no-gutter flex-container h-align-center v-align-middle'}>
            <li {...menuItemCSS}>
              <NavLink to={'/'}>
                <img {...imageCSS} src={'/src/static/android-chrome-192x192.png'} alt={'@smokerigni'} />
              </NavLink>
            </li>
            <li {...menuSeparatorCSS} />
            <li {...css(menuItemCSS, menuItemCircleCSS)} className={'flex-container h-align-center v-align-middle'}>
              <NavLink to={'/skills'}>
                <div {...menuItemCaptionCSS}>Skills</div>
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
