import "./styles/index.scss";
import { Link } from 'react-router-dom'
import { RouterMain } from './routes/RouterMain'
import Elipse2 from "./assets/elipse_2.png";

function App() {

  return (
    <div className='App'>
      <header>
        <nav className='menu'>
          <Link to="/" className='link'>
              HOME
          </Link>
          <img className='elipse2' src={Elipse2} alt='elipse decorativa'/>
          <Link to="/aboutUs" className='link_bold'>
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
