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
          { property: 'description', content: 'You\'re welcome in my site! I hope this page contains all what you looking for.' },
          { property: 'robots', content: 'index,follow' },
          { property: 'DC.coverage', content: 'Hungary' },
          { property: 'DC.description', content: 'You\'re welcome in my site! I hope this page contains all what you looking for.' },
          { property: 'DC.format', content: 'text/html' },
          { property: 'DC.identifier', content: 'https://smokerigni.github.io/' },
          { property: 'DC.publisher', content: '@smokerigni' },
          { property: 'DC.title', content: 'Home - smokerigni.github.io' },
          { property: 'DC.type', content: 'Text' }
        ]}>
        <html lang='en' amp />
        <link rel='schema.dcterms' href='http://purl.org/dc/terms/' />
      </Head>
    </div>
  )
}
