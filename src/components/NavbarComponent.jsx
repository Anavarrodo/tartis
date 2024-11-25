import React from 'react'
import styled from 'styled-components'

const NavBarComponent = ({
  clickFirstSection,
  clickSecondSection,
  clickThirdSection,
}) => {
  return (
    <Container>
      <TitleLogo>TARTIS</TitleLogo>
      <Menu>
        <Section onClick={clickFirstSection}>Nuestros Servicios</Section>
        <Section onClick={clickSecondSection}>Sobre Nosotros</Section>
        <Section onClick={clickThirdSection}>Contacto</Section>
      </Menu>
    </Container>
  )
}

export default NavBarComponent

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffffe5;
  height: 70px;
  padding: 0 80px;
  box-shadow: 0px 0px 7px 0px #7b7b7b40;
  box-sizing: border-box;
  position: fixed;
  width: 100vw;
  top: 0; /* Fija la barra de navegación en la parte superior */
  z-index: 10; /* Asegura que el header esté encima de otros elementos */
`

const TitleLogo = styled.p`
  color: #272727;
  font-family: 'fuenteNegrita';
  font-size: 32px;
`

const Menu = styled.div`
  display: flex;
  gap: 86px;
`

const Section = styled.button`
  color: #272727;
  font-family: 'fuenteRegular';
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    font-family: 'fuenteSemi';
    font-size: 22px;
  }
`
