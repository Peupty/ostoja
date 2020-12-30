import React from "react"
import Logo from "./logo"
import Navigation from "./navigation"

const Footer = () => {
  return (
    <footer className="col gutters">
      <div className="row j-sb a-center">
        <Logo fontSize="5px"></Logo>
        <Navigation></Navigation>
      </div>
      <hr />
      <div className="socials">
        <ul className="row">
          <li>
            <a href="">.FACEBOOK</a>
          </li>
          <li>
            <a href="">.INSTAGRAM</a>
          </li>
          <li>
            <a href="">.MBN</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
