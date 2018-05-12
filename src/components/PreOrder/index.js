import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax';
import styled from 'styled-components'
import heroBackground from './images/album-art-green_wave.jpg'
import virgilLogo from '../../components/Hero/images/virgil-logo.png'

const SectionContainer = styled.div`
  background-color: #052f2d;
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

const StyledContainer = styled(Container)`
  &&& {
    padding: 8rem 0 9rem;
    max-width: 90vw;
  }
`

const PreOrder = () => (
  <SectionContainer id="pre-order">
    <Parallax
      bgImage={heroBackground}
      bgImageAlt="Album Art"
      strength={300}
      blur={-1}
    >
      <StyledContainer>
        <BandName>
          <StyledImg alt="virgil logo" src={virgilLogo} />
        </BandName>
        <SectionHeading>
          "THE PACER" - Available everywhere June 15th, 2018.
        </SectionHeading>
      </StyledContainer>
    </Parallax>
  </SectionContainer>
)

export default PreOrder
