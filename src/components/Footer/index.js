import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'

const StyledContainer = styled(Container)`
  background-color: #052f2d;
  color: #fff;
  text-align: center;
  font-size: .75rem;
  padding: 1rem;
`

const StyledLink = styled.a`
  color: #fff;

  &:hover {
    color: #fff;
  }
`

const Footer = () => (
  <div>
    <StyledContainer fluid>
      Album Artwork by&nbsp;
        <StyledLink
          href="https://www.drknudson.com/"
          target="_blank"
        >
          Dr. Knudson
        </StyledLink>
    </StyledContainer>
  </div>
)

export default Footer
