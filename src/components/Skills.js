import React from 'react'
import { css } from 'glamor'
import { Helmet as Head } from 'react-helmet'

const styles = {
  h2: css({
    fontSize: '1.15em',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'right',
    color: '#607D8B',
    margin: 0,
    lineHeight: 1,
    paddingRight: '.5em',
    borderRight: '.25em solid #607D8B'
  }),
  h3: css({
    fontSize: '1em',
    fontWeight: 700,
    color: '#607D8B',
    margin: 0
  }),
  workDesc: css({
    background: '#f9f9f9',
    padding: '.5em 0',
    ' a': {
      color: '#666',
      fontStyle: 'italic'
    }
  }),
  badge: css({
    display: 'inline-block',
    padding: '0.25em 0.5em',
    margin: '0.35em',
    border: '1px solid rgba(255,255,255,.5)',
    fontWeight: 700,
    color: '#FFF',
    fontSize: '.75em'
  }),
  badges: [
    css({
      background: '#D84315'
    }),
    css({
      background: '#3F51B5'
    }),
    css({
      background: '#2196F3'
    }),
    css({
      background: '#607D8B'
    }),
    css({
      background: '#4CAF50'
    }),
    css({
      background: '#009688'
    })
  ]
}

export default function Skills () {
  return (
    <div {...css({ padding: '0 10%' })} className={'box no-gutter flex-container'}>
      <Head
        title='Skills - smokerigni.github.io'
        meta={[
          { property: 'og:title', content: 'Skills - smokerigni.github.io' },
          { property: 'og:description', content: 'Advanced web developer for nearly 6 years. I like facing challenges and provide neat solutions using the best tools available.' },
          { property: 'og:url', content: 'https://smokerigni.github.io/skills' },
          { name: 'description', content: 'Advanced web developer for nearly 6 years. I like facing challenges and provide neat solutions using the best tools available.' },
          { name: 'robots', content: 'index,follow' },
          { name: 'DC.coverage', content: 'Hungary' },
          { name: 'DC.description', content: 'Advanced web developer for nearly 6 years. I like facing challenges and provide neat solutions using the best tools available.' },
          { name: 'DC.format', content: 'text/html' },
          { name: 'DC.identifier', content: 'https://smokerigni.github.io/skills' },
          { name: 'DC.publisher', content: '@smokerigni' },
          { name: 'DC.title', content: 'Skills - smokerigni.github.io' },
          { name: 'DC.type', content: 'Text' }
        ]}>
        <html lang='en' amp />
        <link rel='schema.dcterms' href='http://purl.org/dc/terms/' />
      </Head>
      <h1 {...css({ textAlign: 'center' })} className={'box'}>Skills</h1>
      <div className={'box no-gutter flex-container'}>
        <div className={'box m-4'}>
          <h2 {...styles.h2}>Objective</h2>
        </div>
        <div className={'box m-8'}>
          <p>
            Gained experience in UI/UX design by working as a web developer for nearly 6 years. I like facing challenges and provide neat solutions using the best tools available.
          </p>
        </div>
      </div>
      <div className={'box no-gutter flex-container'}>
        <div className={'box m-4'}>
          <h2 {...styles.h2}>Knowledge</h2>
        </div>
        <div className={'box no-gutter m-8 flex-container'}>
          <div className={'box m-6'}>
            <h3 {...styles.h3}>Technologies</h3>
            <p>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>PHP</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>NodeJS</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Javascript</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>JQuery</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>CSS3</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>HTML5</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>ReactJS</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>SASS</span>
            </p>
          </div>
          <div className={'box m-6'}>
            <h3 {...styles.h3}>Softwares</h3>
            <p>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>NetBeans</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>VSCode</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Xampp</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Wamp</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Git</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Notepad++</span>
              <span {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Sublime</span>
            </p>
          </div>
        </div>
      </div>
      <div className={'box no-gutter flex-container'}>
        <div className={'box m-4'}>
          <h2 {...styles.h2}>Work history</h2>
        </div>
        <div className={'box no-gutter m-8'}>
          <div className={'box'}>
            <h3 {...styles.h3}>software UI developer (fullstack)</h3>
            <div {...styles.workDesc} className={'box no-gutter flex-container'}>
              <div className={'box no-gutter m-6'}>
                <i>2017 - present</i>
              </div>
              <div className={'box no-gutter m-6'}>
                <a href={'http://www.maxwhere.com/'} target={'_blank'}>MaxWhere</a>
              </div>
            </div>
            <ul>
              <li>working with NodeJS</li>
              <li>building React UI components</li>
              <li>Hapi and Express hosted webapps for MaxWhere</li>
            </ul>
          </div>
          <div className={'box'}>
            <h3 {...styles.h3}>midlevel PHP developer and system administrator</h3>
            <div {...styles.workDesc} className={'box no-gutter flex-container'}>
              <div className={'box no-gutter m-6'}>
                <i>2015 - 2017</i>
              </div>
              <div className={'box no-gutter m-6'}>
                <a href={'https://frik.hu/'} target={'_blank'}>FRIK</a>
              </div>
            </div>
            <ul>
              <li>Joomla, Wordpress sites</li>
              <li>SEO, Analytics</li>
              <li>Customer service</li>
              <li>Creative design</li>
              <li>Repairing PC's, notebooks etc.</li>
              <li>Custom Javascript solutions</li>
            </ul>
          </div>
          <div className={'box'}>
            <h3 {...styles.h3}>system administrator</h3>
            <div {...styles.workDesc} className={'box no-gutter flex-container'}>
              <div className={'box no-gutter m-6'}>
                <i>2015</i>
              </div>
              <div className={'box no-gutter m-6'}>
                <a href={'http://www.djg.hu/'} target={'_blank'}>DJGHS</a>
              </div>
            </div>
            <ul>
              <li>Repairing PC's, notebooks etc.</li>
              <li>Active Directory, mail server, firewall server</li>
            </ul>
          </div>
          <div className={'box'}>
            <h3 {...styles.h3}>freelancer</h3>
            <div {...styles.workDesc} className={'box no-gutter flex-container'}>
              <div className={'box no-gutter m-6'}>
                <i>2012 - present</i>
              </div>
              <div className={'box no-gutter m-6'} />
            </div>
            <ul>
              <li>working with NodeJS</li>
              <li>train myself in Electron</li>
              <li>PHP MVC develop</li>
              <li>IT consulting</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={'box no-gutter flex-container'}>
        <div className={'box m-4'}>
          <h2 {...styles.h2}>References</h2>
        </div>
        <div className={'box m-8'}>
          <p>Available upon request</p>
        </div>
      </div>
    </div>

  )
}
