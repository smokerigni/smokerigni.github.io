import React from 'react'
import { css } from 'glamor'

import AsyncImage from './AsyncImage'

const styles = {
  p: css({
    fontSize: '1.1em',
    textAlign: 'justify',
    marginBottom: '2.25em'
  })
}

export default function About () {
  return (
    <div {...css({ padding: '0 10%' })} className={'box no-gutter flex-container'}>
      <h1 {...css({ textAlign: 'center' })} className={'box'}>About</h1>
      <p {...styles.p}>
        Hi, my name is Ignác Török and I live in Nagykáta, near Budapest (Hungary). I'm now 25 years old.
      </p>
      <p {...styles.p}>
        Advanced web developer with 6 years of experience in structuring, developing and implementing interactive web services. But that is just the back side of my work, the front is every time a user-friendly and usable design.
      </p>
      <p {...styles.p}>
        My career started as system administrator. There was 136 clients and 3 servers - my job was to maintenance all the machines and network devices, both softwares and hardwares. That was only a few months, then i found a new job.
      </p>
      <p {...styles.p}>
        From 2015 to 2017 i was a midlevel PHP developer at a small business. At that workplace i've learned many new things about customer service, gained more experience in repairing, i made many websites and i've experienced in teamwork (and project management). There was 6 colleagues, 2 worked remote and the others in the office.
      </p>
      <div className={'box no-gutter flex-container v-align-middle'}>
        <AsyncImage className={'box no-gutter m-4'}
          source={'/src/static/project-management.jpg'}
          alt={'Photo by Startup Stock Photos from Pexels'}
          title={'Project management'}
          placeholder={{
            box: {
              color: '#EDE1ED',
              width: 358,
              height: 288
            }
          }}
        />
        <div className={'box m-8'}>
          <p {...styles.p}>
            When it's a joint work the communication is very important. In this small business we used an own project management tool (which contained task module, messaging module etc.). Now in my current job we use Slack, Asana and Github. If these were not, the teamwork and the business management will be an impossible thing.
          </p>
        </div>
      </div>
      <p {...styles.p}>
        In 2016 i met with the MaxWhere team. I've decided to work with them in 2017 january, because they had a very intresting dream about VR. This software is an attractive tool both for collaboration, education and presentation. My specialization is the UI upgrading in MaxWhere and the possibilities of this software are near infinite.
      </p>
    </div>
  )
}
