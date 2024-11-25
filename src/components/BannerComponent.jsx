import React from 'react'
import styled from 'styled-components'
import bannerImage from '../assets/images/banner.svg'

const BannerComponent = () => (
  <Container>
    <FirstLineTitle>Transformando ideas en</FirstLineTitle>
    <SecondLineTitle>Soluciones Digitales</SecondLineTitle>
    <FirstLineSubtitle>
      Diseño e implementación de soluciones adaptadas
    </FirstLineSubtitle>
    <SecondLineSubtitle>para empresas de todos los tamaños</SecondLineSubtitle>
  </Container>
)

export default BannerComponent

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-image: url(${bannerImage}); /* Asegúrate de que la ruta esté correcta */
  background-size: cover;
  background-position: center;
  margin-top: 70px; /* Da espacio para que el header no se superponga con el banner */
`

const FirstLineTitle = styled.p`
  position: absolute; /* Habilita el desplazamiento del texto */
  top: 200px; /* Mueve el texto 200px hacia abajo */
  left: 150px; /* Mueve el texto 100px hacia la derecha */
  color: #0b0f1d;
  line-height: 38.4px;
  font-size: 32px;
  font-family: 'fuenteRegular';
`
const SecondLineTitle = styled.p`
  position: absolute; /* Habilita el desplazamiento del texto */
  top: 230px; /* Mueve el texto 200px hacia abajo */
  left: 150px; /* Mueve el texto 100px hacia la derecha */
  color: #0b0f1d;
  line-height: 76.8px;
  font-size: 64px;
  font-family: 'fuenteSemi';
`

const FirstLineSubtitle = styled.p`
  position: absolute; /* Habilita el desplazamiento del texto */
  top: 380px; /* Mueve el texto 200px hacia abajo */
  left: 150px; /* Mueve el texto 100px hacia la derecha */
  color: #0b0f1d;
  line-height: 27.6px;
  font-size: 24px;
  font-family: 'fuenteRegular';
`

const SecondLineSubtitle = styled.p`
  position: absolute; /* Habilita el desplazamiento del texto */
  top: 410px; /* Mueve el texto 200px hacia abajo */
  left: 150px; /* Mueve el texto 100px hacia la derecha */
  color: #0b0f1d;
  line-height: 27.6px;
  font-size: 24px;
  font-family: 'fuenteRegular';
`
