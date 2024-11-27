import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'

const Services = () => {
  return (
    <Container>
      <TitleSection>
        <Title>Innovación para Impulsar tu Negocio</Title>
      </TitleSection>
    </Container>
  )
}

export default Services

const Container = styled.div`
  height: calc(100vh - 70px); /* Ajusta el tamaño del contenedor */
  background-image: url('/images/bannerServicios.svg');
  background-size: cover;
  background-position: center 20%; /* Mueve la imagen hacia abajo (ajustar el porcentaje según necesidad) */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Alinea el contenido a la parte superior */
  padding-left: 240px; /* Espacio a la izquierda para evitar que el texto esté pegado al borde */

  @media (max-width: ${sizes.mobile}px) {
    padding-left: 20px;
  }
`

const TitleSection = styled.div``
const Title = styled.p`
  color: #272727;
  line-height: 43.2px;
  font-size: 36px;
  font-family: 'fuenteNegrita';
  margin: 0;

  @media (max-width: ${sizes.mobile}px) {
    line-height: 16.8px;
    font-size: 14px;
    font-family: 'fuenteSemi';
  }
`
