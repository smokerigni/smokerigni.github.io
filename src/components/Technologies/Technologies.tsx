import React, { useState } from 'react'
import './Technologies.scss'

import ReactjsSVGSrc from './assets/react.svg'
import NodejsSVGSrc from './assets/node.svg'
import TypescriptSVGSrc from './assets/typescript.svg'
import JavascriptSVGSrc from './assets/javascript.svg'
import ElectronSVGSrc from './assets/electron.svg'

import PhpSVGSrc from './assets/php.svg'
import SassSVGSrc from './assets/sass.svg'
import Css3SVGSrc from './assets/css3.svg'
import Html5SVGSrc from './assets/html5.svg'

interface TechBadgeProps {
  img: string,
  label: string
}

const TechBadge: React.FunctionComponent<TechBadgeProps>
  = ({ img, label }) => (
  <figure className="tech-badge d-flex flex-wrap justify-content-center align-items-center">
    <img className="w-100" alt={label} src={img}/>
    <figcaption className="w-100 align-self-end text-center">{label}</figcaption>
  </figure>
)

const Technologies: React.FunctionComponent = () => {
  const [ reason, setReason ] = useState<string>('')
  // Reactjs, PHP, NodeJS, Javascript, CSS3, SASS, HTML5, Typescript
  const techStackArr = [
    { img: ReactjsSVGSrc, label: 'Reactjs' },
    { img: NodejsSVGSrc, label: 'NodeJS' },
    { img: TypescriptSVGSrc, label: 'Typescript' },
    { img: JavascriptSVGSrc, label: 'Javascript' },
    { img: ElectronSVGSrc, label: 'Electron' },
    { img: SassSVGSrc, label: 'SASS' },
    { img: Css3SVGSrc, label: 'CSS3' },
    { img: Html5SVGSrc, label: 'HTML5' },
    { img: PhpSVGSrc, label: 'PHP' },
  ]
  return (
    <div className="skills-technologies row">
      {
        techStackArr.map(tech => <TechBadge key={tech.label}
                                            img={tech.img}
                                            label={tech.label}/>)
      }
    </div>
  )
}

export default Technologies
