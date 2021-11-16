module.exports = {
  siteMetadata: {
    siteUrl: `https://drc.foundation`,
    title: `DRC Foundation`,
    description: `The DRC Foundation is a non-official, community-led organization dedicated to supporting the growth and development of the DRC ecosystem.`,
    author: `@DRCToken`,
  },
  pathPrefix: "/drc-foundation", // For github page only, can remove later
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://drc.foundation`,
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DRC Foundation`,
        short_name: `DRC Foundation`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Lato:400,400i,700,700i&display=swap",
            `Noto+Sans+SC:400,700&display=swap`,
          ],
        },
      },
    },
  ],
};
