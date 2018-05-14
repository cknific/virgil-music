import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import android192 from '../favicons/android-chrome-192x192.png'
import android512 from '../favicons/android-chrome-512x512.png'
import appleTouch from '../favicons/apple-touch-icon.png'
import favicon16 from '../favicons/favicon-16x16.png'
import favicon32 from '../favicons/favicon-32x32.png'
import SafariPinnedTab from '../favicons/safari-pinned-tab.svg'

import Header from '../components/Header'
import theme from '../components/styles/theme'
import './index.scss'

const IndexLayout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        meta={data.site.siteMetadata.metaTags}
        title={data.site.siteMetadata.title}
      >
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="mask-icon" href={SafariPinnedTab} color="#d62628" />
        <meta name="msapplication-TileColor" content="#666666" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      {children()}
    </div>
  </ThemeProvider>
)

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
  }).isRequired,
}

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        metaTags {
          name
          content
        }
        title
      }
    }
  }
`