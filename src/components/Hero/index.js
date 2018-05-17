import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Row,
} from 'reactstrap'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import heroBackground from './images/album-art-no_text.jpg'
import virgilLogo from './images/virgil-logo.png'
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const StyledImg = styled.img`
  max-width: 50rem;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
`

const HeroContainer = styled.div`
  align-items: center;
  background-color: #111;
  background-image: url("${heroBackground}");
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 80vh;
  width: auto;
  justify-content: center;
  margin-top: -4rem;
  position: relative;

  ${breakpoint('xs', 'sm')`
    height: 60vh;
  `};

  ${breakpoint('sm', 'md')`
    height: 70vh;
  `};
`

const StyledDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: white;
  padding: .5rem 1vw .5rem 0;
  position: absolute;
  text-align: center;
  width: 100%;
`

const StyledContainer = styled('Container')`
  &&& {
    align-items: start;
    display: flex;
    flex-direction: column;
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  &&& {
    margin-right: .3rem;
  }
`

const StyledLink = styled(Link)`
  &&& {
    color: #fff;
  }
`

const StyledRow = styled(Row)`
  &&& {
    justify-content: center;
    padding-top: 1.5rem;
    width: 100%;
  }
`

const Hero = () => (
  <HeroContainer>
    <StyledContainer>
      <StyledImg alt="virgil logo" src={virgilLogo} />
    </StyledContainer>
    <StyledDiv>
      <StyledLink to="/#listen">
        <StyledFontAwesomeIcon icon={faPlayCircle} />Stream "Will it Blend?" Now
      </StyledLink>
    </StyledDiv>
  </HeroContainer>
)

export default Hero
