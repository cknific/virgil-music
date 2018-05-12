import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax';
import styled from 'styled-components'

import heroBackground from './images/noise-and-hand-red.png'

const CenteredRow = styled(Row)`
  &&& {
    justify-content: center;
    margin-top: 4rem;
  }
`

const CompositionCredit = styled.h4`
  font-weight: 300;
  font-size: 1.2rem;
`

const PerformerName = styled.h3`
  margin-top: .5rem;
`

const PerformerCredit = styled.div`
  font-style: italic;
`

const PerformerRole = styled.h4`
  font-family: "PT Sans Narrow", sans-serif;
  text-transform: uppercase;
`

const SectionContainer = styled.div`
  background-color: #4e1110;
  text-align: center;
  color: #fff;
`

const SectionHeading = styled.h1`
  color: #fff;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0;
  text-transform: uppercase;
`

const StyledCol = styled(Col)`
  margin-bottom: 2rem;
`

const Subheading = styled.div`
  font-size: .9rem;
  letter-spacing: .2em;
  margin-bottom 2rem;
`

const StyledContainer = styled(Container)`
  &&& {
    padding: 5rem 0;
  }
`

const About = () => (
  <SectionContainer id="pacer">
    <Parallax
      bgImage={heroBackground}
      bgImageAlt="Background Image"
      strength={-200}
    >
      <StyledContainer>
        <SectionHeading>
          The Pacer
        </SectionHeading>
        <Subheading>EP Available June 15</Subheading>
        <CompositionCredit>
          Composition and Guitars by Chris Knific
        </CompositionCredit>
        <CenteredRow>
          <StyledCol lg="4" md="6">
            <PerformerRole>Drums</PerformerRole>
            <PerformerName>Navene Koperweis</PerformerName>
            <PerformerCredit>Animals As Leaders, Entheos</PerformerCredit>
          </StyledCol>
          <StyledCol lg="4" md="6">
            <PerformerRole>Bass</PerformerRole>
            <PerformerName>Brandon Giffin</PerformerName>
            <PerformerCredit>The Faceless, Cynic</PerformerCredit>
          </StyledCol>
          <StyledCol lg="4" md="6">
            <PerformerRole>Lead Guitar</PerformerRole>
            <PerformerName>Justin McKinney</PerformerName>
            <PerformerCredit>The Faceless, The Zenith Passage</PerformerCredit>
          </StyledCol>
        </CenteredRow>
        <Row style={{ padding: '2rem 0 0' }}>
          <Col>
            <h4>Mixed by Simon Grove</h4>
            <PerformerCredit>Plini, Intervals, Instrumental (Adj.)</PerformerCredit>
          </Col>
        </Row>
      </StyledContainer>
    </Parallax>
  </SectionContainer>
)

export default About
