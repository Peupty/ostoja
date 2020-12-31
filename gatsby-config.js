const path = require("path")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ostoja Bogacko`,
    // description: ``,
    author: `Melville Watford`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ostoja bogacko`,
        short_name: `ostoja`,
        start_url: `/`,
        background_color: `#bedb39`,
        theme_color: `#bedb39`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: "1500",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
