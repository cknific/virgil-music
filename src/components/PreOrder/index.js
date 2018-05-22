import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax';
import styled from 'styled-components'
import heroBackground from './images/album-art-green_wave.jpg'
import virgilLogo from '../../components/Hero/images/virgil-logo.png'
import appleMusicLogo from './images/apple-music.svg'
import appleiTunesLogo from './images/apple-itunes.svg'

const LogoImage = styled.img`
  height: 3rem;
  margin-bottom: 1rem;
  margin-right: 1rem;

  &:hover {
    opacity: .8;
  }
`

const StyledA = styled.a`
  color: #fff;

  &:hover {
    color: #fff;
  }
`

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

const SectionHeading = styled.h1`
  color: #fff;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0;
  text-transform: uppercase;
`

const StyledContainer = styled(Container)`
  &&& {
    padding: 8rem 0 9rem;
    max-width: 90vw;
  }
`

const StyledP = styled.p`
  font-size: 1.25rem;
`

const Subheading = styled.div`
  font-size: .9rem;
  letter-spacing: .2em;
  margin-top: 1rem;
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
        <StyledA
          href="https://itunes.apple.com/tr/album/the-pacer-ep/1387202201"
          target="_blank"
        >
          <StyledP>Pre-order now on Apple Music &amp; iTunes:</StyledP>
          <LogoImage src={appleMusicLogo} />
          <LogoImage src={appleiTunesLogo} />
        </StyledA>
        <Subheading>The Pacer EP - Available everywhere June 15th, 2018.</Subheading>
      </StyledContainer>
    </Parallax>
  </SectionContainer>
)

export default PreOrder
