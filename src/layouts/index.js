import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.scss'

const IndexLayout = ({ children, data }) => (
  <div>
    <Helmet
      meta={data.site.siteMetadata.metaTags}
      title={data.site.siteMetadata.title}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
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