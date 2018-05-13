import React, { Component } from 'react'
import PropTypes from 'prop-types'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
}

class HTML extends Component {
  static defaultProps = {
    bodyAttributes: [],
    headComponents: [],
    htmlAttributes: [],
    postBodyComponents: [],
    preBodyComponents: [],
  }

  static propTypes = {
    body: PropTypes.string.isRequired,
    bodyAttributes: PropTypes.arrayOf(PropTypes.object),
    headComponents: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    ),
    htmlAttributes: PropTypes.arrayOf(PropTypes.object),
    postBodyComponents: PropTypes.arrayOf(PropTypes.object),
    preBodyComponents: PropTypes.arrayOf(PropTypes.object),
  }

  headComponentsWithoutStyles() {
    const { headComponents } = this.props
    const stylesIndex = this.styleHeadComponentsIndex()

    return headComponents.filter((component, index) => index !== stylesIndex)
  }

  styleHeadComponents() {
    const { headComponents } = this.props
    const stylesIndex = this.styleHeadComponentsIndex()

    return headComponents.filter((component, index) => index === stylesIndex)
  }

  styleHeadComponentsIndex() {
    const { headComponents } = this.props

    return headComponents.findIndex(
      component =>
        Array.isArray(component) &&
        component[0] &&
        'type' in component[0] &&
        component[0].type === 'style'
    )
  }

  /* eslint-disable react/no-danger */
  render() {
    const {
      body,
      bodyAttributes,
      htmlAttributes,
      postBodyComponents,
      preBodyComponents,
    } = this.props

    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{ __html: stylesStr }}
          id="gatsby-inlined-css"
        />
      )
    }

    return (
      <html {...htmlAttributes} lang="en-US">
        <head>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          {this.headComponentsWithoutStyles()}
          {css}
          {this.styleHeadComponents()}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            id="___gatsby"
            key="body"
          />
          {postBodyComponents}
        </body>
      </html>
    )
  }
  /* eslint-enable react/no-danger */
}

module.exports = HTML
