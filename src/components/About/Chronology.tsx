import React from "react"

interface JobBlockProps {
  interval: string
  position: string
  features: Array<string>
  corporation: string
  website?: string
}

const JobBlock: React.FunctionComponent<JobBlockProps> = (
  { interval, position, features, corporation, website }) => (
  <div className="by-year d-flex flex-wrap">
    <div className="yr">{interval}</div>
    <div>
      <div><b>{position}</b></div>
      {features.length > 0 && <div>
        <ul className="list-unstyled features">
          {features.map((d, i) =>
            <li key={i}>{d}</li>)}
        </ul>
      </div>}
      <div>{corporation}</div>
      {website !== undefined && <div><a href={website} target="_blank" rel="noreferrer">{website}</a></div>}
    </div>
  </div>)

const Chronology: React.FunctionComponent = () => {
  const timeLine = [
    {
      interval: "1992",
      position: "",
      features: [ "@smokerigni version 1.0 released" ],
      corporation: "",
      website: ""
    },
    {
      interval: "2013, 2020",
      position: "fullstack developer",
      features: [ "PHP MVC custom development, database design", "unique frontend", "redesign and refactor in 2020" ],
      corporation: "Patkós Stúdió",
      website: "https://patkosstudio.hu/"
    },
    {
      interval: "2015",
      position: "system administrator",
      features: [ "Windows server (AD)", "100+ clients" ],
      corporation: "Damjanich János Gimnázium",
      website: "https://djg.hu/"
    },
    {
      interval: "2013 – 2016",
      position: "fullstack developer",
      features: [ "custom PHP MVC", "online journal engine" ],
      corporation: "The University of Texas at Austin and ELTE (TÁMOP 4.1.2.)"
    },
    {
      interval: "2015 – 2017",
      position: "fullstack developer",
      features: [ "custom sites using PHP and JS", "Joomla, Wordpress, Drupal, other CMS" ],
      corporation: "Fehér Rendszerház Informatikai Kft.",
      website: "https://frik.hu/"
    },
    {
      interval: "2017 - 2021",
      position: "frontend developer (React)",
      features: [ "software UI development", "completed several projects including a conference webapp, content sharing webapp prototype" ],
      corporation: "MaxWhere",
      website: "https://www.maxwhere.com/"
    }
  ]
  return (
    <React.Fragment>
      {
        timeLine.map((job, index) =>
          <JobBlock key={index} {...job} />)
      }
    </React.Fragment>
  )
}

export default Chronology
