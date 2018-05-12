import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax';
import styled from 'styled-components'

import heroBackground from './images/ck-and-brandon.jpg'

const SectionContainer = styled.div`
  background-color: black;
  text-align: center;
  width: 100%;
`

const StyledContainer = styled(Container)`
  &&& {
    padding-top: 5rem;
    padding-bottom: 5rem;
    color: white;
    max-width: 45rem;
  }
`

const Bio = () => (
  <SectionContainer id="bio">
    <Parallax
      bgImage={heroBackground}
      bgImageAlt="Band Image"
      strength={50}
      blur={{min: 0,max:4}}
    >
      <StyledContainer>
        <h4>Bio</h4>
        <p>Virgil is an instrumental progressive rock outfit based out of Los Angeles, CA. "The Pacer" is the band's debut EP and features Brandon Giffin on bass, Justin McKinney on lead guitar, and Navene Koperweis on drums.</p>
        <p>Piloting the group is Chris Knific, who draws on influences such as Pat Metheny, Yes, Cynic, and Devin Townsend, resulting in a mixture of fusion jazz, prog rock, and metal.</p>
        <p>While Knific has scored films and written both popular and academic work, "The Pacer" is Knific's first exercise in his journey to meld these musical worlds with his own artistic vision.</p>
      </StyledContainer>
    </Parallax>
  </SectionContainer>
)

export default Bio
