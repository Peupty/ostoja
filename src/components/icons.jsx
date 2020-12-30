import React from "react"

const Icons = () => {
  return (
    <div className="row j-sa a-start gutters" id="icons">
      <div className="icons__item">
        <picture>
          <img src="../../icon_1.svg" alt="" />
        </picture>
        <h2 className="text--blue">Pas drzew przy drodze asfaltowej</h2>
      </div>
      <div className="icons__item">
        <picture>
          <img src="../../icon_2.svg" alt="" />
        </picture>
        <h2 className="text--blue">
          Ukształtowanie urozmaicone, teren malowniczy, lekko pofałdowany
        </h2>
      </div>
      <div className="icons__item">
        <picture>
          <img src="../../icon_3.svg" alt="" />
        </picture>
        <h2 className="text--blue">Regularny kształt działek</h2>
      </div>
    </div>
  )
}

export default Icons
