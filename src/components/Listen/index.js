import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const SectionContainer = styled.div`
  background-color: #434e50;
  width: 100%;
  position: relative;
  padding: 56% 0 0;
`

const StyledIframe = styled.iframe`
  border: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Listen = () => (
  <SectionContainer id="listen">
    <StyledIframe
      src="https://www.youtube.com/embed/PBhvj8ad6Rw?rel=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </StyledIframe>
  </SectionContainer>
)

export default Listen
