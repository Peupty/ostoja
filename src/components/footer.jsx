import React from "react"
import Logo from "./logo"
import Navigation from "./navigation"

const Footer = () => {
  return (
    <footer className="gutters">
      <div className="row j-sb a-center">
        <Logo></Logo>
        <Navigation></Navigation>
      </div>
      <hr />
      <div className="socials">
        <ul className="row">
          <li>
            <a href="https://www.facebook.com/mbnmazury" className="flex">
              <img
                src="../../images/fb_icon.svg"
                height="24px"
                alt="fb icon"
                className="md--show"
              />
              <span className="md--hide">.FACEBOOK</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mbn_nieruchomosci_mazury/?igshid=11xa49tgicdvj"
              className="flex"
            >
              <img
                src="../../images/ig_icon.svg"
                height="24px"
                alt="ig icon"
                className="row md--show"
              />
              <span className="flex md--hide">.INSTAGRAM</span>
            </a>
          </li>
          <li>
            <a href="https://mbn.mazury.pl" className="row md--hide">
              .MBN
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
