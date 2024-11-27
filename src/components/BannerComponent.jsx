import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'
import { useMediaQuery } from 'react-responsive'
import bannerMobileImage from '../assets/images/bannerMobile.svg'
import bannerImage from '../assets/images/banner.svg'

const BannerComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: sizes.mobile })

  return (
    <Container>
      <TextContainer>
        <FirstLineTitle>Transformando ideas en</FirstLineTitle>
        <SecondLineTitle>Soluciones Digitales</SecondLineTitle>
        {!isMobile && (
          <SubtitleContainer>
            <FirstLineSubtitle>
              Diseño e implementación de soluciones adaptadas para empresas de
              todos los tamaños
            </FirstLineSubtitle>
          </SubtitleContainer>
        )}
      </TextContainer>
    </Container>
  )
}

export default BannerComponent

const Container = styled.div`
  height: 100vh; /* Ajusta el tamaño del contenedor */
  background-image: url(${bannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* Centra la imagen */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Alinea el contenido a la parte superior */
  margin-top: 70px;
  padding-left: 150px; /* Espacio a la izquierda para evitar que el texto esté pegado al borde */

  @media (max-width: ${sizes.mobile}px) {
    background-image: url(${bannerMobileImage});
    background-position: center 30%; /* Mueve la imagen más hacia abajo en pantallas pequeñas */
    margin-top: 50px;
    padding-left: 60px;
    height: calc(100vh - 50px);
  }
`

const TextContainer = styled.div`
  color: #0b0f1d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alineación hacia la parte superior */
  align-items: flex-start;
  max-width: 600px; /* Limita el ancho del texto para evitar que se vea muy largo en pantallas grandes */
  padding-top: 180px; /* Ajusta este valor para mover el contenido más hacia abajo */
  @media (max-width: ${sizes.mobile}px) {
    padding-top: 345px;
  }
`

const FirstLineTitle = styled.p`
  line-height: 38.4px;
  font-size: 32px;
  color: #0b0f1d;
  font-family: 'fuenteRegular';
  margin: 0;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 16px;
    line-height: 19.2px;
  }
`

const SecondLineTitle = styled.p`
  color: #0b0f1d;
  line-height: 76.8px;
  font-size: 64px;
  font-family: 'fuenteSemi';
  margin: 0;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 32px;
    line-height: 38.4px;
    margin: 14px 0px;
  }
`

const SubtitleContainer = styled.div`
  max-width: 525px;
`

const FirstLineSubtitle = styled.p`
  color: #0b0f1d;
  line-height: 27.6px;
  font-size: 24px;
  font-family: 'fuenteRegular';
  margin-top: 20px; /* Elimina el margen superior */
`
