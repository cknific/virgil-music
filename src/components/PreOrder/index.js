import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import heroBackground from './images/album-art-green_wave.jpg'
import virgilLogo from '../../components/Hero/images/virgil-logo.png'

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
  font-family: "PT Sans Narrow", sans-serif;
  margin-bottom: 0;
`

const StyledLink = styled.a`
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: #fff;
  }
`

const comingSoon = (event) => {
  event.preventDefault()
  window.confirm('Pre-order coming soon!')
}

const PreOrder = () => (
  <SectionContainer id="pre-order">
    <Container>
      <SectionHeading>
        Pre-order "THE PACER" at the
      </SectionHeading>
      <BandName>
        <StyledImg alt="virgil logo" src={virgilLogo} />
      </BandName>
      <StyledLink href="#" onClick={comingSoon}>
        District Lines Store (Coming Soon!)
      </StyledLink>
    </Container>
  </SectionContainer>
)

export default PreOrder
