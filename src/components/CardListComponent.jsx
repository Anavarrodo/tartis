import React from 'react'
import styled from 'styled-components'
import CardComponent from './CardComponent'
import { sizes } from '../utils/breakpoints'

const CardListComponent = ({ onCardClick }) => {
  const options = [
    {
      title: 'Implementación y mantenimiento de Proyectos',
      subtitle:
        'Nos encargamos de la implementación de tus soluciones tecnológicas, ofreciendo soporte continuo para mantener tu software actualizado y funcionando de manera óptima.',
    },
    {
      title: 'Estrategias en la nube',
      subtitle:
        'Te ayudamos a migrar y gestionar tus aplicaciones en la nube, aprovechando los beneficios de la escalabilidad, flexibilidad y seguridad que ofrecen las soluciones cloud modernas.',
    },
  ]

  return (
    <Container>
      {options.map((op, idx) => (
        <CardComponent
          key={idx}
          title={op.title}
          subtitle={op.subtitle}
          onClick={() => onCardClick(idx)}
        />
      ))}
    </Container>
  )
}

export default CardListComponent

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content; /* Ajusta el ancho al contenido */
  margin-left: 260px;

  @media (max-width: ${sizes.mobile}px) {
    margin-left: 10px;
  }
`
