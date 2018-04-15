module.exports = {
  siteMetadata: {
    title: 'Samaritan Outreach website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    }
    `gatsby-plugin-netlify-cms`
  ],
}
