import React from "react"
import Navigation from "@/components/navigation"
import Logo from "@/components/logo"
import { HeadingImage } from "@/queries/images/Heading"

const Heading = () => {
  return (
    <section className="heading">
      <HeadingImage></HeadingImage>
      <Navigation></Navigation>
      <header className="heading__title">
        <Logo></Logo>
        <h3>Twój własny raj</h3>
      </header>
    </section>
  )
}

export default Heading
