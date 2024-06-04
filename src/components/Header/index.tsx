import "./styles.scss";
import Elipse2 from "../../assets/elipse_2.png";
export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ul className="menu">
      <img className="elipse2" src={Elipse2} alt="elipse decorativa" />
      <li className="link__bold">
        <a href="#sobre-nos" onClick={() => scrollToSection("sobre-nos")}>
          SOBRE NÓS
        </a>
      </li>
      <li className="link">
        <a
          href="#nossos-animais"
          onClick={() => scrollToSection("nossos-animais")}
        >
          NOSSOS ANIMAIS
        </a>
      </li>
      <li className="link">
        <a href="#nossa-loja" onClick={() => scrollToSection("nossa-loja")}>
          NOSSA LOJA
        </a>
      </li>
      <li className="link">
        <a href="#contato" onClick={() => scrollToSection("contato")}>
          CONTATO
        </a>
      </li>
    </ul>
  );
};
