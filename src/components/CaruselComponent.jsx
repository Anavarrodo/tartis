import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import CardListComponent from './CardListComponent'
import { sizes } from '../utils/breakpoints'

const CaruselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const carouselRef = useRef(null)

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

  const cardWidth = 950 // Ancho total de la tarjeta

  const handleCardClick = (index) => {
    setCurrentIndex(index)
  }

  // Eventos para arrastrar con el ratón
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setPrevTranslate(currentTranslate)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const currentPosition = e.clientX
    const diffX = currentPosition - startX
    setCurrentTranslate(prevTranslate + diffX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    const movedBy = currentTranslate - prevTranslate

    // Umbral del 20% del ancho de la tarjeta
    const threshold = cardWidth * 0.2

    console.log('movedBy:', movedBy)
    console.log('threshold:', threshold)

    if (movedBy > threshold && currentIndex < options.length - 1) {
      console.log('Avanzar a la siguiente tarjeta')
      setCurrentIndex(currentIndex + 1)
    } else if (movedBy < -threshold && currentIndex > 0) {
      console.log('Retroceder a la tarjeta anterior')
      setCurrentIndex(currentIndex - 1)
    } else {
      console.log('Volver a la posición original')
      setCurrentIndex(currentIndex)
    }
  }

  useEffect(() => {
    setCurrentTranslate(-currentIndex * cardWidth)
  }, [currentIndex])

  return (
    <Container
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      // Eventos táctiles (opcional)
      onTouchStart={(e) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX)
        setPrevTranslate(currentTranslate)
      }}
      onTouchMove={(e) => {
        if (!isDragging) return
        const currentPosition = e.touches[0].clientX
        const diffX = currentPosition - startX
        setCurrentTranslate(prevTranslate + diffX)
      }}
      onTouchEnd={handleMouseUp}
    >
      <Carousel
        style={{
          transform: `translateX(${currentTranslate}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        <CardListComponent options={options} onCardClick={handleCardClick} />
      </Carousel>
    </Container>
  )
}

export default CaruselComponent

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: grab;
  height: 380px;
  @media (max-width: ${sizes.mobile}px) {
    height: 166px;
  }
`

const Carousel = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  will-change: transform;
  user-select: none;
`
