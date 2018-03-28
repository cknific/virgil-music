import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const HeroContainer = styled.div`
  background-image: url("http://via.placeholder.com/1250x550/111/333");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #111;
  padding: 4rem 0;
`

const HeroHeading = styled.h1`
  color: #fff;
  margin-bottom: 0;
  max-width: 40rem;
  padding: 5rem 0;
`

const Hero = () => (
  <HeroContainer>
    <Container>
      <HeroHeading>
        Virgil | The Pacer
      </HeroHeading>
    </Container>
  </HeroContainer>
)

export default Hero
