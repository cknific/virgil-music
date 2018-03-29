import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import heroBackground from './images/noise-and-hand-red.png'

const CenteredRow = styled(Row)`
  &&& {
    justify-content: center;
    margin-top: 3rem;
  }
`

const PerformerName = styled.h3`
  margin-top: .5rem;
`

const PerformerCredit = styled.div`
  font-style: italic;
`

const SectionContainer = styled.div`
  background-color: #222;
  background-image: url("${heroBackground}");
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 7rem 0 8rem;
  text-align: center;
  color: #fff;
`

const SectionHeading = styled.h1`
  color: #fff;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const StyledCol = styled(Col)`
  margin-bottom: 2rem;
`

const TheBand = () => (
  <SectionContainer>
    <Container>
      <SectionHeading>
        The Band
      </SectionHeading>
      <h4>Composition and Guitars by Chris Knific</h4>
      <Row>
        <Col>

        </Col>
      </Row>
      <CenteredRow>
        <StyledCol lg="4" md="6">
          <div>Drums</div>
          <PerformerName>Navene Koperweis</PerformerName>
          <PerformerCredit>Animals As Leaders, Entheos</PerformerCredit>
        </StyledCol>
        <StyledCol lg="4" md="6">
          <div>Bass</div>
          <PerformerName>Brandon Giffin</PerformerName>
          <PerformerCredit>The Faceless, Cynic</PerformerCredit>
        </StyledCol>
        <StyledCol lg="4" md="6">
          <div>Lead Guitar</div>
          <PerformerName>Justin McKinney</PerformerName>
          <PerformerCredit>The Faceless, The Zenith Passage</PerformerCredit>
        </StyledCol>
      </CenteredRow>
      <Row style={{ padding: '2rem 0 0' }}>
        <Col>
          <h4>Mixed by Simon Grove</h4>
          <PerformerCredit>Plini, Intervals, Instrumental Adj</PerformerCredit>
        </Col>
      </Row>
    </Container>
  </SectionContainer>
)

export default TheBand
