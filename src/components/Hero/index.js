import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import heroBackground from './images/album-art-no_text.jpg'
import virgilLogo from './images/virgil-logo.png'

const StyledImg = styled.img`
  align-self: center;
  max-width: 50rem;
  width: 100%;
`

const HeroContainer = styled.div`
  background-color: #111;
  background-image: url("${heroBackground}");
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 17rem 0;
`

const Hero = () => (
  <HeroContainer>
    <Container className="d-flex justify-content-center">
      <StyledImg alt="virgil logo" src={virgilLogo} />
    </Container>
  </HeroContainer>
)

export default Hero
