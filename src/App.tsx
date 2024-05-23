import { Link } from 'react-router-dom'
import { RouterMain } from './routes/RouterMain'

function App() {

  return (
    <div className='App'>
      <header>
        <nav>
          <Link to="/">
              HOME
          </Link>
          <Link to="/about">
              SOBRE NÓS
          </Link>
          <Link to="/animals">
              NOSSOS ANIMAIS
          </Link>
          <Link to="/store">
              NOSSA LOJA
          </Link>
          <Link to="/contact">
              CONTATO
          </Link>
        </nav>
      </header>
      <RouterMain/>
    </div>
  )
}

export default App;
