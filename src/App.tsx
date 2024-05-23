import { Link } from 'react-router-dom'
import { RouterMain } from './routes/RouterMain'
import "./styles/index.scss";

function App() {

  return (
    <div className='App'>
      <header>
        <nav className='menu'>
          <Link to="/" className='link'>
              HOME
          </Link>
          <Link to="/about" className='link_bold'>
              SOBRE NÓS
          </Link>
          <Link to="/animals" className='link'>
              NOSSOS ANIMAIS
          </Link>
          <Link to="/store" className='link'>
              NOSSA LOJA
          </Link>
          <Link to="/contact" className='link'>
              CONTATO
          </Link>
        </nav>
      </header>
      <RouterMain/>
    </div>
  )
}

export default App;
