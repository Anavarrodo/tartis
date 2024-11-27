import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/breakpoints'
import { useMediaQuery } from 'react-responsive'

const NavBarComponent = ({
  clickFirstSection,
  clickSecondSection,
  clickThirdSection,
}) => {
  const isMobile = useMediaQuery({ maxWidth: sizes.mobile })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null) // Estado para la sección activa

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionClick = (callback, sectionName) => {
    callback()
    setActiveSection(sectionName) // Marca la sección activa
    setIsMenuOpen(false) // Cierra el menú
  }

  return (
    <Container>
      <InnerContainer>
        <TitleLogo>TARTIS</TitleLogo>
        {isMobile ? (
          <MenuActions
            onClick={handleMenuClick}
            aria-label="Abrir menú móvil"
          />
        ) : (
          <Menu>
            <Section
              onClick={() => handleSectionClick(clickFirstSection, 'services')}
              isActive={activeSection === 'services'}
            >
              Nuestros Servicios
            </Section>
            <Section
              onClick={() => handleSectionClick(clickSecondSection, 'about')}
              isActive={activeSection === 'about'}
            >
              Sobre Nosotros
            </Section>
            <Section
              onClick={() => handleSectionClick(clickThirdSection, 'contact')}
              isActive={activeSection === 'contact'}
            >
              Contacto
            </Section>
          </Menu>
        )}
      </InnerContainer>
      {isMobile && isMenuOpen && (
        <MobileMenu ref={menuRef}>
          <Section
            onClick={() => handleSectionClick(clickFirstSection, 'services')}
            isActive={activeSection === 'services'}
          >
            Nuestros Servicios
          </Section>
          <Section
            onClick={() => handleSectionClick(clickSecondSection, 'about')}
            isActive={activeSection === 'about'}
          >
            Sobre Nosotros
          </Section>
          <Section
            onClick={() => handleSectionClick(clickThirdSection, 'contact')}
            isActive={activeSection === 'contact'}
          >
            Contacto
          </Section>
        </MobileMenu>
      )}
    </Container>
  )
}

export default NavBarComponent

// Estilos
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  background-color: #ffffffe5;
  box-shadow: 0px 0px 7px 0px #7b7b7b40;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 80px;
  box-sizing: border-box;

  @media (max-width: ${sizes.mobile}px) {
    height: 50px;
    padding: 0 16px;
  }
`

const TitleLogo = styled.p`
  color: #272727;
  font-family: 'fuenteNegrita';
  font-size: 32px;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 16px;
  }
`

const Menu = styled.div`
  display: flex;
  gap: 86px;
`

const Section = styled.button`
  color: ${({ isActive }) => (isActive ? '#44494E' : '#272727')};
  font-family: ${({ isActive }) => (isActive ? 'fuenteSemi' : 'fuenteRegular')};
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    font-family: 'fuenteSemi';
    font-size: 22px;
  }

  @media (max-width: ${sizes.mobile}px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
    padding: 10px 0;

    &:hover {
      font-family: 'fuenteSemi';
      font-size: 16px;
    }
  }
`

const MenuActions = styled.button`
  width: 30px;
  height: 30px;
  background-image: url('/images/menu.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fafafa;
  box-shadow: 0px 0px 7px 0px #7b7b7b40;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
  z-index: 9;
`
