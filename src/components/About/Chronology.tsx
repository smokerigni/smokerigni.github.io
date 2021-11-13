import React from "react"

const Chronology: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">1992</div>
        <div>@smokerigni version 1.0 released</div>
      </div>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">2013, 2020</div>
        <div>
          Patkós Stúdió website, custom PHP site and the redesign, then refactor in 2020 <br/>
          (<a
          href="https://patkosstudio.hu/" target="_blank">https://patkosstudio.hu/</a>)
        </div>
      </div>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">2015</div>
        <div>
          Damjanich János Gimnázium és Mezőgazdasági SZKI system administrator <br/>
          (<a
          href="https://djg.hu/" target="_blank">https://djg.hu/</a>)
        </div>
      </div>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">2013 – 2016</div>
        <div>
          TÁMOP 4.1.2. project - online journal system development, The University of Texas at Austin and ELTE
        </div>
      </div>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">2015 – 2017</div>
        <div>
          Fehér Rendszerház Informatikai Kft. as PHP developer (fullstack), custom sites using PHP and JS<br/>
          (<a
          href="https://frik.hu/" target="_blank">https://frik.hu/</a>)
        </div>
      </div>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">2017 – 2020</div>
        <div>
          Széchenyi István University FIEK project UI developer, React frontend (MaxWhere software)<br/>
          (<a
          href="https://www.maxwhere.com/" target="_blank">https://www.maxwhere.com/</a>)
        </div>
      </div>
      <div className="by-year d-flex flex-wrap">
        <div className="yr">2020 – 2021</div>
        <div>
          Mistems Kft. and MaxWhere Solutions Zrt. UI developer, React frontend (MaxWhere software)<br/>
          (<a
          href="https://www.maxwhere.com/" target="_blank">https://www.maxwhere.com/</a>)
        </div>
      </div>
    </React.Fragment>
  )
}

export default Chronology
