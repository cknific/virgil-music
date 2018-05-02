import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import heroBackground from './images/album-art-no_text.jpg'
import virgilLogo from './images/virgil-logo.png'

const StyledImg = styled.img`
  max-width: 50rem;
  width: 95%;
`

const HeroContainer = styled.div`
  align-items: center;
  background-color: #111;
  background-image: url("${heroBackground}");
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 80vh;
  justify-content: center;
  margin-top: -4rem;
`

const StyledContainer = styled('Container')`
  &&& {
    align-items: start;
    display: flex;
    justify-content: center;
  }
`

const Hero = () => (
  <HeroContainer>
    <StyledContainer>
      <StyledImg alt="virgil logo" src={virgilLogo} />
    </StyledContainer>
  </HeroContainer>
)

export default Hero
