import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const SectionContainer = styled.div`
  background-color: #333;
  padding: 4rem 0;
`

const SectionHeading = styled.h1`
  color: #fff;
  margin-bottom: 0;
  padding: 5rem 0;
`

const Section2 = () => (
  <SectionContainer>
    <Container>
      <SectionHeading>
        Section2
      </SectionHeading>
    </Container>
  </SectionContainer>
)

export default Section2
