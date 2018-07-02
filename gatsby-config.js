module.exports = {
  siteMetadata: {
    title: `Welcome to Sung's World 🚀`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/contributions`,
        name: 'contributions',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
