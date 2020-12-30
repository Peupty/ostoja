import React from "react"
import Header from "./header"

const Visualisation = () => {
  return (
    <section id="wizualizacja" className="col gutters">
      <div className="row row--reverse j-sb wrap">
        <div className="col j-sb">
          <picture className="as-end">
            <img src="../../logo_segments.png" alt="" />
          </picture>
          <picture className="md--hide">
            <img
              src="../../dom_1.png"
              alt="drewniany dom z huśtawką, widok z prawej strony"
            />
          </picture>
        </div>
        <div className="col j-sb">
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
      </div>
      <h1 className="text--blue">
        Działka z domem już od <span className="text--orange">249 000 zł</span>
      </h1>
    </section>
  )
}

export default Visualisation
