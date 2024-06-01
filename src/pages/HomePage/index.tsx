import "./style.scss";
import Dog from "../../assets/dog.png";
import Elipse1 from "../../assets/elipse_1.png";
import Elipse2 from "../../assets/elipse_2.png";
import AboutUs from "../../assets/aboutUs_img.png";
import { AboutUsInfo } from "../../components/aboutUsInfo";

export const HomePage = () => {
  return (
    <>
      <header className="menu">
        <img className="elipse2" src={Elipse2} alt="elipse decorativa" />
        <p className="link__bold">SOBRE NÓS</p>
        <p className="link">NOSSOS ANIMAIS</p>
        <p className="link">NOSSA LOJA</p>
        <p className="link">CONTATO</p>
      </header>

      {/* Home Page */}
      <section className="container">
        <div className="container__slogan">
          <h1 className="heading1">
            A felicidade está mais perto do que você pensa
          </h1>
          <button className="btn__principal">Vamos lá!</button>
        </div>
        <div className="container__img">
          <img className="img__elipse" src={Elipse1} alt="Elipse decorativa" />
          <img className="img__dog" src={Dog} alt="Cachorro modelo da página" />
        </div>
      </section>

      {/* Sobre nós */}
      <section className="container__about">
        <img
          className="img__about"
          src={AboutUs}
          alt="Cabeçalho da página sobre nós"
        />

        <AboutUsInfo />
      </section>
    </>
  );
};
