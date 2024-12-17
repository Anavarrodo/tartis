import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

const optionsLabels = [
  'Enfoque personalizado',
  'Innovación Continua',
  'Metodología TARTIS',
  'Relaciones a largo plazo',
]

const Info = () => {
  return (
    <>
      <ContainerClient>
        <SectionTitleCarousel>
          <TitleCarousel>Nuestros clientes, nuestra inspiración</TitleCarousel>
        </SectionTitleCarousel>
        <Carousel indicators={false} interval={null}>
          {/* Primer slide - Tarjeta Blanca */}
          <Carousel.Item>
            <CardClient>
              <CardContent>
                <h3>Cámara de comercio de Huelva</h3>
                <p>
                  Soluciones para optimizar procesos y mejorar la eficiencia
                  operativa.
                </p>
              </CardContent>
            </CardClient>
          </Carousel.Item>

          {/* Segundo slide */}
          <Carousel.Item>
            <CardClient>
              <CardContent>
                <h3>WEITEC</h3>
                <p>
                  Creamos aplicaciones a medida con tecnologías avanzadas,
                  garantizando productos robustos y escalables.
                </p>
              </CardContent>
            </CardClient>
          </Carousel.Item>

          {/* Tercer slide */}
          <Carousel.Item>
            <CardClient>
              <CardContent>
                <h3>B2Space</h3>
              </CardContent>
            </CardClient>
          </Carousel.Item>
        </Carousel>
      </ContainerClient>

      <ContainerLabels>
        <Carousel indicators={false}>
          {optionsLabels.map((opt, idx) => {
            return (
              <Carousel.Item key={idx}>
                <CardLabels>
                  <CardContent>
                    <h2>{opt}</h2>
                  </CardContent>
                </CardLabels>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </ContainerLabels>

      <ContainerTalking>
        <SectionTitleTalking>
          <WrapperColumn>
            <TitleTalking>
              ¿Interesado en crear una oportunidad de negocio?
            </TitleTalking>
            <SubtitleTalking>Hablemos</SubtitleTalking>
          </WrapperColumn>
        </SectionTitleTalking>
      </ContainerTalking>
    </>
  )
}

export default Info

// Styled Components
const ContainerClient = styled.div`
  background-color: #44494e;
  height: 630px;
  width: 100%;
`

const SectionTitleCarousel = styled.div`
  background-color: #44494e;
  display: flex;
  justify-content: center;
  padding: 0px 50px;
`

const TitleCarousel = styled.p`
  width: 844px;
  margin: 80px 0px;
  color: #ffffff;
  font-family: 'fuenteNegrita';
  font-size: 40px;
  line-height: 48px;
`

// Tarjeta Blanca
const CardClient = styled.div`
  width: 489px;
  height: 339px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto; /* Centrar horizontalmente */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: #ffffff;
`

const CardContent = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    margin: 0;
    color: #272727;
    font-size: 24px;
    font-weight: bold;
    font-family: 'fuenteNegrita';
    font-size: 36px;
    line-height: 43.2px;
  }

  h2 {
    margin: 0;
    color: #272727;
    font-size: 24px;
    font-weight: bold;
    font-family: 'fuenteNegrita';
    font-size: 48px;
    line-height: 55.2px;
  }

  p {
    margin: 0;
    color: #272727;
    font-size: 16px;
    line-height: 1.5;
    font-family: 'fuenteRegularMont';
  }
`

const ContainerLabels = styled.div`
  width: 100%;
  background-color: #fafafa;
`

const CardLabels = styled.div`
  background-color: #ffffff;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto; /* Centrar horizontalmente */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: #ffffff;
`

const ContainerTalking = styled.div`
  width: 100%;
  background-color: #42b874;
  height: 305px;
`

const SectionTitleTalking = styled.div`
  background-color: #42b874;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100%; /* Asegura el centrado vertical completo */
`

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const TitleTalking = styled.p`
  width: 795px;
  color: #ffffff;
  font-family: 'fuenteNegrita';
  font-size: 36px;
  line-height: 41.4px;
`

const SubtitleTalking = styled(TitleTalking)``
