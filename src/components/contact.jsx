import React from "react"

const Contact = () => {
  return (
    <div id="kontakt" className="row j-sb gutters">
      <div className="col j-center">
        <h1 className="text--blue">Kontakt</h1>
        <address>
          MBN Mazurskie biuro Nieruchomości <br />
          ul. Dąbrowskiego 13 <br />
          11-500 Giżycko <br />
          +48 874 281 938 <br />
          <a href="https://mbn.mazury.pl">www.mbn.mazury.pl</a> <br />
          <a href="mailto:mbn@mbn.mazury.pl">mbn@mbn.mazury.pl</a>
        </address>
      </div>
      <iframe
        src="https://www.youtube.com/embed/s1X5ZYMLmps"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>{" "}
    </div>
  )
}

export default Contact
