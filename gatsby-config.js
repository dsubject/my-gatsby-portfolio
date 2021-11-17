module.exports = {
  siteMetadata: {
    title: "My Gatsby Blog",
    menuLinks:[
      {
        name: 'home',
        link:'/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-dark-mode'
  ],
};
