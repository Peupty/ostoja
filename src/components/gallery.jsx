import React from "react"
import ImageGallery from "react-image-gallery"
import images from "@/content/gallery.json"

const pictures = images.map(img => ({
  original: "/images/galeria/" + img,
}))

export default class Gallery extends React.Component {
  render() {
    return (
      <section id="galeria">
        <h1 className="text--white">Galeria</h1>
        <ImageGallery
          items={pictures}
          showThumbnails={false}
          showIndex={true}
          autoPlay={true}
        ></ImageGallery>
      </section>
    )
  }
}
