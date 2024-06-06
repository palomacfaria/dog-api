import "./styles.scss";
import Elipse2 from "../../assets/elipse_2.png";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <header className="menu">
      <ul className="menu__container">
      <li>
          <a
            className=" text-menu link"
            href="#dashboard"
            onClick={() => scrollToSection("dashboard")}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className=" text-menu link"
            href="#sobre-nos"
            onClick={() => scrollToSection("sobre-nos")}
          >
            SOBRE NÓS
          </a>
        </li>
        <li>
          <a
            className="text-menu link"
            href="#nossos-animais"
            onClick={() => scrollToSection("nossos-animais")}
          >
            NOSSOS ANIMAIS
          </a>
        </li>
        <li>
          <a
            className="text-menu link"
            href="#nossa-loja"
            onClick={() => scrollToSection("nossa-loja")}
          >
            NOSSA LOJA
          </a>
        </li>
        <li>
          <a
            className="text-menu link"
            href="#contato"
            onClick={() => scrollToSection("contato")}
          >
            CONTATO
          </a>
        </li>
      </ul>
    </header>
  );
};
