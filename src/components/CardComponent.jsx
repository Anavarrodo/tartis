import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'

const CardComponent = ({ title, subtitle }) => {
  return (
    <Container>
      <SectionText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </SectionText>
    </Container>
  )
}

export default CardComponent

const Container = styled.div`
  width: 800px;
  height: 362px;
  border-radius: 20px;
  padding: 50px 20px 20px 20px;
  gap: 40px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  margin-right: 150px;
  @media (max-width: ${sizes.mobile}px) {
  }
`
const SectionText = styled.div``
const Title = styled.p`
  color: #272727;
  line-height: 38.4px;
  font-size: 32px;
  font-family: 'fuenteNegrita';
  @media (max-width: ${sizes.mobile}px) {
  }
`
const Subtitle = styled.p`
  color: #272727;
  line-height: 24.38px;
  font-size: 20px;
  font-family: 'fuenteRegular';
  @media (max-width: ${sizes.mobile}px) {
  }
`
