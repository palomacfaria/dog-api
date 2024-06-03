import "./styles.scss"
import Elipse2 from "../../assets/elipse_2.png";
export const Header = () => {
  return (
    <header className="menu">
      <img className="elipse2" src={Elipse2} alt="elipse decorativa" />
      <p className="link__bold">SOBRE NÓS</p>
      <p className="link">NOSSOS ANIMAIS</p>
      <p className="link">NOSSA LOJA</p>
      <p className="link">CONTATO</p>
    </header>
  );
};
