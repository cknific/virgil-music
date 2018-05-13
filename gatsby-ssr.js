/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const serverStyleSheet = new ServerStyleSheet()

  replaceBodyHTMLString(
    renderToString(
      <StyleSheetManager sheet={serverStyleSheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    )
  )

  setHeadComponents([serverStyleSheet.getStyleElement()])
}
