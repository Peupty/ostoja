import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Logo from "@/components/logo"

const links = ["informacje", "galeria", "kontakt"]

const Navigation = () => {
  return (
    <nav className="navigation">
      <picture className="navigation__button md--show">
        <img src="../../menu_icon.svg" alt="MENU" />
      </picture>
      <div className="navigation__actions">
        <ul className="row md--col">
          <li className="md--show">
            <Logo></Logo>
          </li>
          {links.map(link => (
            <li key={link}>
              <AnchorLink className="navigation__link" to={"#" + link}>
                {link.toUpperCase()}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <div className="js-end md--show socials">
          <a href="">
            <img src="../../fb_icon.svg" alt="fb" className="socials__icon" />
          </a>
          <a href="">
            <img src="../../ig_icon.svg" alt="ig" className="socials__icon" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
