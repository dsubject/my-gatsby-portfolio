module.exports = {
  siteMetadata: {
    title: 'Danielle Subject',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      }
    ],
    description: "I'm a software developer with a special interest in creating a greener web. Welcome to my low-carbon website.",
    siteUrl: 'https://www.daniellesubject.com',
    twitterUsername: '@danisubject',
    image: '/encryptas.png',
    author: 'Danielle Subject',
    keywords: ['green software', 'green tech', 'software developer', 'beekeeping']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        loading: 'lazy'
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`
  ]
}
