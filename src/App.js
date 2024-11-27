import styled from 'styled-components'
import NavBarComponent from './components/NavbarComponent'
import BannerComponent from './components/BannerComponent'
import Services from './sections/Services'

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
    </Container>
  )
}

export default App

const Container = styled.div``
