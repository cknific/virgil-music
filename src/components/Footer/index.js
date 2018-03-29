import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

const StyledContainer = styled(Container)`
  background-color: #052f2d;
  color: #fff;
  text-align: center;
  font-size: .75rem;
  padding: 1rem;
`

const Footer = () => (
  <div>
    <StyledContainer fluid>
      Album Artwork by Dr. Knudson
    </StyledContainer>
  </div>
)

export default Footer
