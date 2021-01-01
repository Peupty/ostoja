import React, { useState } from "react"
import plotsJSON from "@/content/plots"

const sold = [533, 534, 536, 543, 544, 545, 552]

const plots = plotsJSON.map(el => {
  if (sold.includes(el.id)) {
    el.price = 0
  }
  return el
})

const col_1 = plotsJSON.slice(0, plotsJSON.length / 2 + (plotsJSON.length % 2))
const col_2 = plotsJSON.slice(
  plotsJSON.length - col_1.length + (plotsJSON.length % 2)
)

const scaleOverlay = (coords, currentWidth, originalWidth) =>
  currentWidth < originalWidth
    ? coords
        .split(",")
        .map(el => parseInt(+el * (currentWidth / originalWidth)))
        .join(",")
    : coords

const PlotPicker = () => {
  const defaultPlot = {
    price: 0,
    area: 0,
    id: 0,
  }
  const [plot, setPlot] = useState(defaultPlot)
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth))

  return (
    <section id="plot-picker" className="gutters col a-center">
      <picture>
        <img src="../../działki.png" alt="" />
        {plot.id > 0 && (
          <div id="popup" className="col text--blue">
            <h3>Działka nr {plot.id}</h3>
            <div className="row j-sb">
              <div className="col">
                <h4>Powierzchnia</h4>
                <h5
                  dangerouslySetInnerHTML={{
                    __html: plot.area + "m<sup>2</sup>",
                  }}
                ></h5>
              </div>
              <div className="col">
                <h4>Cena</h4>
                <h5>{plot.price ? plot.price + " zł" : "sprzedano"}</h5>
              </div>
            </div>
          </div>
        )}
        <svg
          className="plot-area"
          height="100%"
          width="100%"
          onClick={e => {
            setPlot(defaultPlot)
          }}
        >
          <g>
            {plots.map(el => (
              <polygon
                key={el.id}
                id={`plot-marker-${el.id}`}
                className={`plot ${
                  el.price ? "plot--available" : "plot--sold"
                } ${plot.id === el.id ? "plot--active" : ""}`}
                points={scaleOverlay(el.coords, width, 1364)}
                onClick={e => {
                  e.stopPropagation()
                  setPlot({ ...el })
                }}
              ></polygon>
            ))}
          </g>
        </svg>
      </picture>
      <div className="plot-list">
        <li>
          <ul className="col a-start">
            {col_1.map(el => (
              <li
                key={el.id}
                id={`dzialka-${el.id}`}
                dangerouslySetInnerHTML={{
                  __html: `Działka nr ${el.id} - powierzchnia ${
                    el.area
                  } m<sup>2</sup> - cena za 1m2: 27zł - wartość: ${
                    el.area * 27
                  }`,
                }}
              ></li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {col_2.map(el => (
              <li key={el.id} id={`dzialka-${el.id}`}>{`Działka nr ${
                el.id
              } - powierzchnia ${el.area} m2 - cena za 1m2: 27zł - wartość: ${
                el.area * 27
              }`}</li>
            ))}
          </ul>
        </li>
      </div>
    </section>
  )
}

export default PlotPicker
