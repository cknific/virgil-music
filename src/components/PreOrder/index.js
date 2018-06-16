import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax';
import styled from 'styled-components'
import heroBackground from './images/album-art-green_wave.jpg'
import virgilLogo from '../../components/Hero/images/virgil-logo.png'
import appleiTunesLogo from './images/apple-itunes.svg'
import appleiMusicLogo from './images/apple-music.svg'
import googlePlayLogo from './images/google.svg'
import spotifyLogo from './images/spotify.svg'

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
        <StyledP>The Pacer EP - Available Now!</StyledP>
        <StyledA
          href="https://itunes.apple.com/tr/album/the-pacer-ep/1387202201?app=itunes"
          target="_blank"
        >
          <LogoImage src={appleiTunesLogo} />
        </StyledA>
        <StyledA
          href="https://itunes.apple.com/us/album/the-pacer-ep/1387202201"
          target="_blank"
        >
          <LogoImage src={appleiMusicLogo} />
        </StyledA>
        <StyledA
          href="https://play.google.com/store/music/album/Virgil_The_Pacer?id=Bqvb2lthxa6ww67ys5dyse2fqhm&hl=en"
          target="_blank"
        >
          <LogoImage src={googlePlayLogo} />
        </StyledA>
        <StyledA
          href="https://open.spotify.com/album/45g7ZKjZy9ycW9MW9dg7ws?si=0hIf53v3QFSVK4hDFvbRuw"
          target="_blank"
        >
          <LogoImage src={spotifyLogo} />
        </StyledA>
        <Subheading>And wherever else you consume music...</Subheading>
      </StyledContainer>
    </Parallax>
  </SectionContainer>
)

export default PreOrder
