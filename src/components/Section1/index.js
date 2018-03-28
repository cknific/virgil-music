import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const SectionContainer = styled.div`
  background-color: #222;
  padding: 4rem 0;
  text-align: right;
`

const SectionHeading = styled.h1`
  color: #fff;
  margin-bottom: 0;
  padding: 5rem 0;
`

const Section1 = () => (
  <SectionContainer>
    <Container>
      <SectionHeading>
        Section1
      </SectionHeading>
    </Container>
  </SectionContainer>
)

export default Section1
