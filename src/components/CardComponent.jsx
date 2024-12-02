import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'

const CardComponent = ({ title, subtitle, onClick }) => {
  return (
    <Container onClick={onClick}>
      <SectionText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </SectionText>
    </Container>
  )
}

export default CardComponent

const Container = styled.div`
  flex: 0 800px; /* Ancho fijo de la tarjeta */
  height: 362px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  margin-right: 150px; /* Espacio entre tarjetas */
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  /* Evitar colapsos en pantallas pequeñas */
  flex-shrink: 0;

  @media (max-width: ${sizes.mobile}px) {
    flex: 0 249px; /* Ancho fijo de la tarjeta */
    height: 150px;
    margin-right: 20px;
  }
`

const SectionText = styled.div`
  width: 750px;
  padding: 50px 20px 20px 20px;
  @media (max-width: ${sizes.mobile}px) {
    width: 229px;
    padding: 10px;
  }
`

const Title = styled.p`
  color: #272727;
  line-height: 38.4px;
  font-size: 32px;
  font-family: 'fuenteNegrita';

  @media (max-width: ${sizes.mobile}px) {
    font-size: 13px;
    line-height: 15.6px;
  }
`

const Subtitle = styled.p`
  color: #272727;
  line-height: 24.38px;
  font-size: 20px;
  font-family: 'fuenteRegularMont';

  @media (max-width: ${sizes.mobile}px) {
    font-size: 10px;
    line-height: 12.19px;
  }
`
