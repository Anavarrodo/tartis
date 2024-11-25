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
  justify-content: space-around;
  align-items: center;
  background-color: #ffffffe5;

  height: 70px;
  padding: 0px 80px 0px 80px;
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
`
