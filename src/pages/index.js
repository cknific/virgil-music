import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  text-align: center;
`

const IndexPage = () => (
  <StyledContainer>
    <h1>Virgil Music</h1>
    <p>Coming Soon!!!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </StyledContainer>
)

export default IndexPage
