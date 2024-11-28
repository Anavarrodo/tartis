import React from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'
import CaruselComponent from '../components/CaruselComponent'
import BannerService from '../assets/images/bannerServicios.svg'

const Services = () => {
  return (
    <Container>
      <TitleSection>
        <Title>Innovación para Impulsar tu Negocio</Title>
      </TitleSection>
      <CaruselSection>
        <CaruselComponent />
      </CaruselSection>
    </Container>
  )
}

export default Services

const Container = styled.div`
  height: 130vh;
  background-image: url(${BannerService});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;

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
  margin-left: 260px;

  @media (max-width: ${sizes.mobile}px) {
    line-height: 16.8px;
    font-size: 14px;
    font-family: 'fuenteSemi';
  }
`

const CaruselSection = styled.div`
  margin-top: 60px;
`
