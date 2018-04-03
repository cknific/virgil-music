const metaTags = require('./src/data/website/meta-tags')

module.exports = {
  siteMetadata: {
    title: 'Virgil Music',
    metaTags: metaTags,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `PT Sans Narrow`,
        ],
      },
    },
  ],
};
