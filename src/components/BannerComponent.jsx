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
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  margin-top: 70px;
`

const FirstLineTitle = styled.p`
  position: absolute;
  top: 200px;
  left: 150px;
  color: #0b0f1d;
  line-height: 38.4px;
  font-size: 32px;
  font-family: 'fuenteRegular';
`
const SecondLineTitle = styled.p`
  position: absolute;
  top: 230px;
  left: 150px;
  color: #0b0f1d;
  line-height: 76.8px;
  font-size: 64px;
  font-family: 'fuenteSemi';
`

const FirstLineSubtitle = styled.p`
  position: absolute;
  top: 380px;
  left: 150px;
  color: #0b0f1d;
  line-height: 27.6px;
  font-size: 24px;
  font-family: 'fuenteRegular';
`

const SecondLineSubtitle = styled.p`
  position: absolute;
  top: 410px;
  left: 150px;
  color: #0b0f1d;
  line-height: 27.6px;
  font-size: 24px;
  font-family: 'fuenteRegular';
`
