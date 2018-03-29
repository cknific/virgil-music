import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Link from 'gatsby-link'
import heroBackground from './images/album-art-green_wave.jpg'
import virgilLogo from './images/virgil-logo.png'

const SectionContainer = styled.div`
  background-color: #052f2d;
  background-image: url("${heroBackground}");
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 0 9rem;
  text-align: center;
  color: #fff;
`

const StyledImg = styled.img`
  align-self: center;
  max-width: 25rem;
  width: 100%;
`

const BandName = styled.div`
  margin: 2rem 0;
`

const SectionHeading = styled.h2`
  color: #fff;
  margin-bottom: 0;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: #fff;
  }
`


const PreOrder = () => (
  <SectionContainer>
    <Container>
      <SectionHeading>
        Pre-order 'The Pacer' at
      </SectionHeading>
      <BandName>
        <StyledImg alt="virgil logo" src={virgilLogo} />
      </BandName>
      <StyledLink to="#">
        District Lines Store
      </StyledLink>
    </Container>
  </SectionContainer>
)

export default PreOrder
