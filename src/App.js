import styled from 'styled-components'
import NavBarComponent from './components/NavbarComponent'
import BannerComponent from './components/BannerComponent'
import Services from './sections/Services'
import About from './sections/About'

function App() {
  return (
    <Container>
      <NavBarComponent
        clickFirstSection={() => console.log('Navegar a nuestros servicios')}
        clickSecondSection={() => console.log('Navegar a sobre nosotros')}
        clickThirdSection={() => console.log('Navegar a contacto')}
      />
      <BannerComponent />
      <Services />
      <About />
    </Container>
  )
}

export default App

const Container = styled.div``
