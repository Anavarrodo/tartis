import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'
import CaruselComponent from '../components/CaruselComponent'
import BannerService from '../assets/images/bannerServicios.svg'
import BannerServiceMobile from '../assets/images/BannerServiceMobile.svg'

const Services = () => {
  return (
    <Container>
      <TitleSection>
        <Title>Innovación para Impulsar tu Negocio</Title>
      </TitleSection>
      <CaruselSection>
        <CaruselComponent />
      </CaruselSection>
      <TextSection>
        <Text>¿Qué hacemos para asegurar el éxito de tu proyecto?</Text>
        <Subtext>
          Nuestro enfoque ágil y adaptable nos permite diseñar e implementar
          soluciones tecnológicas personalizadas, asegurando que cada proyecto
          se desarrolle con precisión y se ajuste a tus necesidades específicas,
          impulsando tu transformación digital de manera efectiva.
        </Subtext>
      </TextSection>
    </Container>
  )
}

export default Services

const Container = styled.div`
  position: relative;
  background-image: url(${BannerService});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinea los hijos (como TextSection) al final del container */

  @media (max-width: ${sizes.mobile}px) {
    background-image: url(${BannerServiceMobile});
    background-position: center;
    margin-bottom: 86px;
  }
`

const TitleSection = styled.div``
const Title = styled.p`
  color: #272727;
  line-height: 43.2px;
  font-size: 36px;
  font-family: 'fuenteNegrita';
  margin-left: 260px;

  @media (max-width: ${sizes.mobile}px) {
    line-height: 16.8px;
    font-size: 14px;
    font-family: 'fuenteSemi';
    margin-left: 10px;
  }
`

const CaruselSection = styled.div`
  margin-top: 60px;
  margin-bottom: 145px;

  @media (max-width: ${sizes.mobile}px) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`
const TextSection = styled.div`
  margin-bottom: 135px; /* Ajusta la posición del texto dinámicamente */
  margin-left: 295px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${sizes.mobile}px) {
    margin-bottom: -52px; /* Ajusta el margen para pantallas pequeñas */
    margin-left: 50px;
  }
`

const Text = styled.p`
  max-width: 550px;
  font-size: 40px;
  color: #272727;
  line-height: 43.2px;
  font-family: 'fuenteNegrita';

  @media (max-width: ${sizes.mobile}px) {
    max-width: 190px;
    font-size: 14px;
    line-height: 16.8px;
    font-family: 'fuenteSemi';
    margin-top: 40px;
  }
`

const Subtext = styled.p`
  max-width: 900px;
  font-size: 20px;
  color: #272727;
  margin-top: 10px; /* Ajusta la distancia entre el texto y el subtítulo */
  font-family: 'fuenteRegularMont';

  @media (max-width: ${sizes.mobile}px) {
    max-width: 265px;
    font-size: 10px;
    margin-top: 5px;
  }
`
