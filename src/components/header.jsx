import React from "react"

const Header = ({
  title,
  paragraph,
  slot,
  slotInside = false,
  reverse = false,
}) => {
  return (
    <header
      className={`header gutters row ${
        reverse ? "wrap--reverse row--reverse" : "wrap"
      }`}
    >
      <div className="header__wrapper">
        <h1>{title}</h1>
        {slotInside && <div className="sm--show slot">{slot}</div>}
        <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
      </div>
      <div className={`slot${slotInside ? " sm--hide" : ""}`}>{slot}</div>
    </header>
  )
}

export default Header
