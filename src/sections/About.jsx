import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'
import InfoCardListComponent from '../components/InfoCardListComponent'

const About = () => {
  return (
    <Container>
      <InfoCardListComponent />
    </Container>
  )
}

export default About

const Container = styled.div`
  margin: 50px 0 50px 325px;

  @media (max-width: ${sizes.mobile}px) {
    margin: 0 10px;
  }
`
