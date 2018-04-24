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
          My name is Ignác Török and I work as a web developer. I live in Nagykáta, near Budapest. Having six years' experience in structuring, I have acquired proficient web developing skills, both at developing and at implementing interactive web services.
        </p>
        <p {...styles.p}>
          At the beginning of my professional career, I designed minor web works. As a result, a couple of relatively simple, custom-built webpages were established as well as a few mini-games in Unity. This period was an impressive learning phase, for these early successes indeed had a great impact on me and encouraged me to continuously engage in this field.
        </p>
        <p {...styles.p}>
          After I had obtained a web programming degree, I first cooperated in the development of an online journal engine. Then I started working in a high school as system monitoring administrator.
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
            There were 136 clients and 3 servers in the high school – I was in charge of maintaining all the machines and network devices, both softwares and hardwares. I worked really hard and often went to the office on weekends, too. However, I have gained a handful of experience and a deeper apprehension in understanding larger systems.
            <br />
            For programming fits rather to my interests than repairing, I left the job after almost a year.
          </p>
        </div>
      </div>
      <div {...styles.wrapper}>
        <h2>Getting started</h2>
        <p {...styles.p}>
          Later on, I was employed by a company in Budaörs, which dealt with web development and system maintenance. Actually, the complete repertoire included web development, system administrator services, (e-)commerce, and IT consulting. I worked there as a midlevel PHP developer between 2015 and 2017. This environment also provided me specific experiences in terms of corporate governance, operating customer services and frameworks. Previously, I had been operating all by myself, but then I learnt a lot about teamwork and what it is like being the part of a seven-member team.
        </p>
      </div>
      <div {...styles.wrapper} {...css({ background: '#f3f3f3' })}>
        <h2>Virtual reality in reality</h2>
        <div className={'box no-gutter flex-container'}>
          <AsyncImage className={'box no-gutter m-6'}
            source={'/src/static/maxwhere.jpg'}
            alt={'maxwhere victorian'}
            title={'MaxWhere software'}
            caption={'MaxWhere\'s Victorian space, a good space for board meetings'}
            placeholder={{
              box: {
                color: '#EDE1ED',
                width: 1000,
                height: 750
              }
            }} />
          <div className={'box m-6'}>
            <p {...styles.p}>
              I first met the MaxWhere team in 2016, when they were looking for a user interface developer. They shared their interesting ideas with me, and – since I liked their software – I decided to be the part of this project in January 2017.
            </p>
            <h3>MaxWhere, the future's software</h3>
            <p {...styles.p}>
              This software proved its potential serving as a rich location of future’s education and collaboration. The original idea was an innovative presentation tool, which now is suitable for a much more diverse usage. Working closely with the UX team, my task is to develop the user interface of the software.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
