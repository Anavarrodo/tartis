import styled from 'styled-components'
import NavBarComponent from './components/NavbarComponent'
import BannerComponent from './components/BannerComponent'
import Services from './sections/Services'
import About from './sections/About'
import Info from './sections/Info'

function App() {
  return (
    <>
      <NavBarComponent
        clickFirstSection={() => console.log('Navegar a nuestros servicios')}
        clickSecondSection={() => console.log('Navegar a sobre nosotros')}
        clickThirdSection={() => console.log('Navegar a contacto')}
      />
      <Container>
        <BannerComponent />
        <Services />
        <About />
        <Info />
      </Container>
    </>
  )
}

export default App

const Container = styled.div``
