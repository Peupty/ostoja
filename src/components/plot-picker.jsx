import React from "react"
import plotsJSON from "@/content/plots"

const showPopup = ({ clientX: x, clientY: y }, el) => {
  const popupElement = document.createElement("div")
  const popupContainer = document.querySelector("#popup")
  popupElement.className = "popup__content"
  popupElement.innerText = `Cena działki nr ${el.id} - ${el.price} zł`
  popupContainer.top = y
  popupContainer.left = x
  popupContainer.style.visibility = "visible"
  document.querySelector(`#dzialka-${el.id}`).className = "asd"
  popupContainer.appendChild(popupElement)
}

const hidePopup = el => {
  document.querySelector(`#dzialka-${el.id}`).className = ""
  document.querySelector("#popup").style.visibility = "hidden"
  document.querySelector(".popup__content").remove()
}

const col_1 = plotsJSON.slice(0, plotsJSON.length / 2 + (plotsJSON.length % 2))
const col_2 = plotsJSON.slice(
  plotsJSON.length - col_1.length + (plotsJSON.length % 2)
)

const PlotPicker = () => {
  return (
    <section id="plot-picker" className="gutters">
      <picture>
        <img src="../../działki.png" alt="" useMap="#plot-map" />
        <div id="popup"></div>
      </picture>
      <map name="plot-map">
        {plotsJSON.map(el => (
          <area
            key={el.id}
            coords={el.coords}
            shape="poly"
            title={el.id}
            alt={`Działka nr ${el.id}`}
            onClick={() => alert(el.price)}
            onMouseEnter={e => showPopup(e, el)}
            onMouseLeave={() => hidePopup(el)}
          />
        ))}
      </map>
      <ul className="row j-sa">
        <li>
          <ul>
            {col_1.map(el => (
              <li
                key={el.id}
                id={`dzialka-${el.id}`}
                dangerouslySetInnerHTML={{
                  __html: `Działka nr ${el.id} - powierzchnia ${el.area} m<sup>2</sup> - cena za 1m2: 27zł - wartość: ${el.price}`,
                }}
              ></li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {col_2.map(el => (
              <li
                key={el.id}
                id={`dzialka-${el.id}`}
              >{`Działka nr ${el.id} - powierzchnia ${el.area} m2 - cena za 1m2: 27zł - wartość: ${el.price}`}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default PlotPicker
