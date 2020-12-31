import React from "react"
import "@/styles/scss/main.scss"
import SEO from "../components/seo"
import Heading from "@/components/heading"
import Info from "@/components/info"
import PlotPicker from "@/components/plot-picker"
import Gallery from "@/components/gallery"
import Visualization from "@/components/visualization"
import Footer from "@/components/footer"
import Contact from "../components/contact"

const IndexPage = () => (
  <main>
    <SEO title="Strona główna" />
    <Heading></Heading>
    <Info></Info>
    <PlotPicker></PlotPicker>
    <Gallery></Gallery>
    <Visualization></Visualization>
    <Contact></Contact>
    <Footer></Footer>
  </main>
)

export default IndexPage
