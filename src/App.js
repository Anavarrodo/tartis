import logo from './logo.svg'
import './App.css'
import NavBarComponent from './components/NavBar/NavbarComponent'

function App() {
  return (
    <div className="App">
      <NavBarComponent
        clickFirstSection={() => console.log('Navegar a nuestros servicios')}
        clickSecondSection={() => console.log('Navegar a sobre nosotros')}
        clickThirdSection={() => console.log('Navegar a contacto')}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
