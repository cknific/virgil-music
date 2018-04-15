import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import heroBackground from './images/noise-and-hand-red.png'

const BioContainer = styled.div`
  margin-top: 4rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
`

const CenteredRow = styled(Row)`
  &&& {
    justify-content: center;
    margin-top: 4rem;
  }
`

const CompositionCredit = styled.h4`
  font-weight: 300;
  font-size: 1.4rem;
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
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
  margin-bottom: 0;
  text-transform: uppercase;
`

const StyledCol = styled(Col)`
  margin-bottom: 2rem;
`

const Bio = () => (
  <SectionContainer id="bio">
    <Container>
      <SectionHeading>
        Virgil
      </SectionHeading>
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
      <BioContainer>
        <h4>Bio</h4>
        <p>Virgil is an instrumental progressive rock outfit based out of Los Angeles, CA. "The Pacer" is the band's debut EP and features Brandon Giffin on bass, Justin McKinney on lead guitar, and Navene Koperweis on drums. Piloting the group is Chris Knific, who composes and produces all of the music. Knific draws on influences such as Exivious, Chimpspanner, Devin Townsend, The Contortionist, and Yes, resulting in a mixture of fusion jazz, prog rock, and metal.</p>
      </BioContainer>
    </Container>
  </SectionContainer>
)

export default Bio
