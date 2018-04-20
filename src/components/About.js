import React from 'react'
import { css } from 'glamor'
import { Helmet as Head } from 'react-helmet'

import AsyncImage from './AsyncImage'

const styles = {
  p: css({
    fontSize: '1.2em',
    textAlign: 'justify',
    marginBottom: '2.25em'
  }),
  wrapper: css({
    padding: '0 10%',
    '@media(max-width: 768px)': {
      padding: 0
    }
  })
}

export default function About () {
  return (
    <div className={'box no-gutter flex-container'}>
      <Head
        title='About - smokerigni.github.io'
        meta={[
          { property: 'og:title', content: 'About - smokerigni.github.io' },
          { property: 'og:description', content: 'Let\'s read more about my works and experiences! My story as a web developer.' },
          { property: 'og:url', content: 'https://smokerigni.github.io/about' },
          { property: 'description', content: 'Let\'s read more about my works and experiences! My story as a web developer.' },
          { property: 'robots', content: 'index,follow' },
          { property: 'DC.coverage', content: 'Hungary' },
          { property: 'DC.description', content: 'Let\'s read more about my works and experiences! My story as a web developer.' },
          { property: 'DC.format', content: 'text/html' },
          { property: 'DC.identifier', content: 'https://smokerigni.github.io/about' },
          { property: 'DC.publisher', content: '@smokerigni' },
          { property: 'DC.title', content: 'About - smokerigni.github.io' },
          { property: 'DC.type', content: 'Text' }
        ]}>
        <html lang='en' amp />
        <link rel='schema.dcterms' href='http://purl.org/dc/terms/' />
      </Head>
      <h1 {...css({ textAlign: 'center' })} className={'box'}>About</h1>
      <div {...styles.wrapper}>
        <p {...styles.p}>
          Hi, my name is Ignác Török and I work as a web developer. I live in Nagykáta, near Budapest. I am an advanced web developer with 6 years of experience in structuring, developing and implementing interactive web services.
        </p>
        <p {...styles.p}>
          At the beginning of my professional career, I made minor web works. As a result, a couple of relatively simple, custom-built webpages were created, as well as a few mini-games created in Unity. At this point I learned, and early work encouraged me.
        </p>
        <p {...styles.p}>
          After my successful web programmer exam, I first participated in the development of an online journal engine. Then i started working in a high school as a system administrator.
        </p>
      </div>
      <div {...styles.wrapper} {...css({ background: '#f3f3f3' })} className={'box no-gutter flex-container v-align-middle'}>
        <AsyncImage className={'box no-gutter m-6'}
          source={'/src/static/system-administrator.jpeg'}
          alt={'system administrator'}
          title={'system administrator'}
          placeholder={{
            image: '/src/static/system-administrator-200.jpeg'
          }}
        />
        <div className={'box m-6'}>
          <h2>Back to school</h2>
          <p {...styles.p}>
            In the high school there was 136 clients and 3 servers - my job was to maintenance all the machines and network devices, both softwares and hardwares. There was a lot of work, and often I went to the office on weekends. Here I've gained experience in understanding larger systems. As programming is more interested me than repairing, I changed job after almost a year.
          </p>
        </div>
      </div>
      <div {...styles.wrapper}>
        <h2>Getting started</h2>
        <p {...styles.p}>
          My next job was a web developer and system administrator company in Budaörs. The entire repertoire included web development, system administrator services, (e-)commerce, and IT consulting. I worked here as a midlevel PHP developer between 2015 and 2017. Here I've learned many new things about corporate governance, customer service operations, and frameworks. There i had 7 colleagues, 2 worked remotely. Previously I did all the projects on my own, but I had to work here in a team as a teammate.
        </p>
      </div>
      <div {...styles.wrapper} {...css({ background: '#f3f3f3' })}>
        <h2>Virtual reality in reality</h2>
        <div className={'box no-gutter flex-container'}>
          <AsyncImage className={'box no-gutter m-6'}
            source={'/src/static/maxwhere.jpg'}
            alt={'maxwhere victorian'}
            title={'MaxWhere software'}
            caption={'MaxWhere\'s Victorian space, a good space for board meetings for example'}
            placeholder={{
              box: {
                color: '#EDE1ED',
                width: 1000,
                height: 750
              }
            }} />
          <div className={'box m-6'}>
            <p {...styles.p}>
              I first met with the MaxWhere team in 2016, they were looking for a user interface developer. They had interesting ideas and I liked their software, so in January 2017 I decided to be part of this.
            </p>
            <h3>MaxWhere, the future's software</h3>
            <p {...styles.p}>
              This software is a potentially rich location of future's education and collaboration. The original idea was an innovative presentation tool that now knows much more. My job is to develop the software's user interface working closely with the UX team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
