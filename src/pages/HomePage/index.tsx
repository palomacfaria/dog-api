import "./style.scss";
import Dog from "../../assets/dog.png";
import Elipse1 from "../../assets/elipse_1.png";
import Elipse2 from "../../assets/elipse_2.png";
import AboutUs from "../../assets/aboutUs_img.png";
import AboutMentally from "../../assets/img_aboutUs-1.png";
import AboutSocialization from "../../assets/img_aboutUs-2.png";

export const HomePage = () => {
  return (
    <>
      {/* menu */}
      <header>
        <nav className="menu">
          <img className="elipse2" src={Elipse2} alt="elipse decorativa" />
          <p className="link__bold">SOBRE NÓS</p>
          <p className="link">NOSSOS ANIMAIS</p>
          <p className="link">NOSSA LOJA</p>
          <p className="link">CONTATO</p>
        </nav>
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
        <div className="container__info">
          <img
            className="img__about-espiral"
            src={AboutMentally}
            alt="Garoto com seu cachorro na paria"
          />
          <div className="about__info-mentally">
            <h2 className="heading2">MENTALMENTE SAUDÁVEL</h2>
            <p className="paragraph">
              Para muitas pessoas, especialmente aquelas que se sentem
              solitárias, ter um animal de estimação pode ser uma valiosa fonte
              de conforto e companhia. Alugar um animal de estimação dá às
              pessoas solitárias a oportunidade de desfrutar da presença e do
              amor de um animal de estimação, o que pode aumentar
              significativamente o seu humor e bem-estar num momento tão
              difícil.
            </p>
          </div>
        </div>

        <div className="container__info">
          <div className="about__info-mentally">
            <h2 className="heading2">MENTALMENTE SAUDÁVEL</h2>
            <p className="paragraph">
              Para muitas pessoas, especialmente aquelas que se sentem
              solitárias, ter um animal de estimação pode ser uma valiosa fonte
              de conforto e companhia. Alugar um animal de estimação dá às
              pessoas solitárias a oportunidade de desfrutar da presença e do
              amor de um animal de estimação, o que pode aumentar
              significativamente o seu humor e bem-estar num momento tão
              difícil.
            </p>
          </div>
          <img
            className="img__about-espiral"
            src={AboutSocialization}
            alt="Gatinho modelo"
          />
        </div>
      </section>
    </>
  );
};
