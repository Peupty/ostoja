import React from "react"

const Visualisation = () => {
  return (
    <section id="wizualizacja" className="gutters">
      <div className="k">
        <picture>
          <img
            src="../../dom_2.png"
            alt="drewniany dom z huśtawką, widok z lewej strony"
          />
        </picture>
        <h1 className="as-start text--blue">
          Buduj z nami <br /> <span>swoją przyszłość</span>
        </h1>
      </div>
      <div className="col j-sb c">
        <picture className="seg-logo">
          <img src="../../logo_segments.png" alt="" />
        </picture>
        <picture className="md--hide">
          <img
            src="../../dom_1.png"
            alt="drewniany dom z huśtawką, widok z prawej strony"
          />
        </picture>
      </div>
      <h1 className="text--blue d">
        Działka z domem już od <br/><span className="text--orange">249 000 zł</span>
      </h1>
    </section>
  )
}

export default Visualisation
