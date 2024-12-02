import React from 'react'
import styled from 'styled-components'
import InfoCardComponent from './InfoCardComponent'
import { sizes } from '../utils/breakpoints'
import info1 from '../assets/images/info_1.svg'
import info2 from '../assets/images/info_2.svg'
import info3 from '../assets/images/info_3.svg'

const InfoCardListComponent = () => {
  const options = [
    {
      text: 'En TARTIS, nos dedicamos al diseño e implementación de soluciones digitales para empresas de todos los tamaños y sectores. Contamos con un equipo de profesionales altamente cualificados y con años de experiencia, enfocados en transformar las ideas de nuestros clientes en realidades tecnológicas que impulsan el crecimiento y la eficiencia operativa. Desde el análisis y consultoría inicial hasta el despliegue y mantenimiento continuo, nos aseguramos de que cada proyecto cumpla y supere las expectativas de nuestros clientes.',
      photo: info1,
      isRigth: true,
      isLeft: false,
      max: '396px',
    },
    {
      text: 'Nuestro enfoque integral abarca desde la consultoría de software personalizada hasta el diseño y desarrollo de aplicaciones y sistemas a medida. Entendemos que cada empresa tiene sus propias necesidades y desafíos únicos, por lo que nos esforzamos en ofrecer soluciones específicamente adaptadas a cada cliente. Utilizando las últimas tecnologías y metodologías ágiles, garantizamos productos finales que son robustos, escalables y alineados con los objetivos empresariales.',
      textBold:
        'Transformamos tus ideas en soluciones digitales personalizadas y escalables, apoyándote en cada etapa con experiencia y compromiso.',
      photo: info2,
      isRigth: false,
      isLeft: true,
      max: '461px',
    },
    {
      text: 'Además de nuestras competencias en diseño y desarrollo, en TARTIS somos expertos en estrategias en cloud. Ayudamos a las empresas a migrar y gestionar sus aplicaciones en la nube, aprovechando las ventajas de la escalabilidad, flexibilidad y seguridad que ofrecen estas plataformas. Ya sea que estés buscando optimizar tus operaciones, reducir costes o mejorar la colaboración dentro de tu organización.',
      photo: info3,
      isRigth: true,
      isLeft: false,
      max: '343px',
    },
  ]

  return (
    <Container>
      {options.map((op, idx) => (
        <InfoCardComponent
          key={idx}
          info={op.text}
          infoBold={op.textBold}
          isRight={op.isRigth}
          isLeft={op.isLeft}
          photo={op.photo}
          max={op.max}
        />
      ))}
    </Container>
  )
}

export default InfoCardListComponent

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${sizes.mobile}px) {
    margin-left: 10px;
  }
`
