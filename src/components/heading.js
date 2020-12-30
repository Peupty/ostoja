import React from "react"
import Navigation from "@/components/navigation"
import Logo from "@/components/logo"

const Heading = () => {
  return (
    <section className="heading">
      <Navigation></Navigation>
      <header className="heading__title">
        <Logo></Logo>
        <h3>Twój własny raj</h3>
      </header>
    </section>
  )
}

export default Heading
