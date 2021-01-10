import React from "react"
import ImageGallery from "react-image-gallery"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: { fluid: { originalName: { regex: "/slide/" } } }) {
        nodes {
          fluid(maxWidth: 1920, quality: 80) {
            originalName
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <section id="galeria">
      <h1 className="text--white">Galeria</h1>
      <ImageGallery
        items={data.allImageSharp.nodes.map(img => ({
          original: img.fluid.srcWebp,
        }))}
        showThumbnails={false}
        showIndex={true}
        autoPlay={true}
        lazyLoad={true}
        originalAlt="widok okolicy"
      ></ImageGallery>
    </section>
  )
}

export default Gallery
