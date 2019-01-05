module.exports = {
    siteMetadata: {
        title: "A Man and His Manhood"
    },
    plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}