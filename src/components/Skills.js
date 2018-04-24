import React from 'react'
import { css } from 'glamor'
import { Helmet as Head } from 'react-helmet'

const styles = {
  h2: css({
    fontSize: '1.15em',
    fontWeight: 700,
    margin: 0,
    lineHeight: 1
  }),
  h3: css({
    fontSize: '1em',
    fontWeight: 700,
    color: '#323232',
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
    margin: '0.35em',
    color: '#FFF',
    fontSize: '.85em',
    background: '#f9f9f9',
    borderRadius: '.4em',
    padding: '.4em'
  }),
  badges: [
    css({
      color: '#D84315',
      border: '1px solid #D84315'
    }),
    css({
      color: '#3F51B5',
      border: '1px solid #3F51B5'
    }),
    css({
      color: '#2196F3',
      border: '1px solid #2196F3'
    }),
    css({
      color: '#607D8B',
      border: '1px solid #607D8B'
    }),
    css({
      color: '#4CAF50',
      border: '1px solid #4CAF50'
    }),
    css({
      color: '#009688',
      border: '1px solid #009688'
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
        <div className={'box l-2 m-3 s-12'}>
          <h2 {...styles.h2}>Objective</h2>
        </div>
        <div className={'box l-10 m-9 s-12'}>
          <p>
            Gained experience in UI/UX design by working as a web developer for nearly 6 years. I like facing challenges and provide neat solutions using the best tools available.
          </p>
        </div>
      </div>
      <div className={'box no-gutter flex-container'}>
        <div className={'box l-2 m-3 s-12'}>
          <h2 {...styles.h2}>Knowledge</h2>
        </div>
        <div className={'box no-gutter l-10 m-9 s-12 flex-container'}>
          <div className={'box m-6'}>
            <h3 {...styles.h3}>Technologies</h3>
            <p>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>PHP</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>NodeJS</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Javascript</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>JQuery</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>CSS3</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>HTML5</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>ReactJS</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>SASS</code>
            </p>
          </div>
          <div className={'box m-6'}>
            <h3 {...styles.h3}>Softwares</h3>
            <p>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>NetBeans</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>VSCode</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Xampp</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Wamp</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Git</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Notepad++</code>
              <code {...css(styles.badge, styles.badges[Math.floor(Math.random() * 6)])}>Sublime</code>
            </p>
          </div>
        </div>
      </div>
      <div className={'box no-gutter flex-container'}>
        <div className={'box l-2 m-3 s-12'}>
          <h2 {...styles.h2}>Work history</h2>
        </div>
        <div className={'box no-gutter l-10 m-9 s-12'}>
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
        <div className={'box l-2 m-3 s-12'}>
          <h2 {...styles.h2}>References</h2>
        </div>
        <div className={'box l-10 m-9 s-12'}>
          <p>Available upon request</p>
        </div>
      </div>
    </div>

  )
}
