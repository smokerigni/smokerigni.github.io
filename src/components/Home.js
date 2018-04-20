import React from 'react'
import { Helmet as Head } from 'react-helmet'

export default function Home () {
  return (
    <div>
      <Head
        title='Home - smokerigni.github.io'
        meta={[
          { property: 'og:title', content: 'Home - smokerigni.github.io' },
          { property: 'og:description', content: 'You\'re welcome in my site! I hope this page contains all what you looking for.' },
          { property: 'og:url', content: 'https://smokerigni.github.io/' },
          { name: 'description', content: 'You\'re welcome in my site! I hope this page contains all what you looking for.' },
          { name: 'robots', content: 'index,follow' },
          { name: 'DC.coverage', content: 'Hungary' },
          { name: 'DC.description', content: 'You\'re welcome in my site! I hope this page contains all what you looking for.' },
          { name: 'DC.format', content: 'text/html' },
          { name: 'DC.identifier', content: 'https://smokerigni.github.io/' },
          { name: 'DC.publisher', content: '@smokerigni' },
          { name: 'DC.title', content: 'Home - smokerigni.github.io' },
          { name: 'DC.type', content: 'Text' }
        ]}>
        <html lang='en' amp />
        <link rel='schema.dcterms' href='http://purl.org/dc/terms/' />
      </Head>
    </div>
  )
}
