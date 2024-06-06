import "./styles.scss";
import Dog from "../../assets/dog.png";
import Elipse1 from "../../assets/elipse_1.png";
export const Dashboard = () => {
  return (
    <section id="dashboard" className="container">
      <div className="container__slogan">
        <h1 className="heading1 text_animation">
          A felicidade está mais perto do que você pensa
        </h1>
        <button className="btn__principal">Vamos lá!</button>
      </div>
      <div className="container__img">
        <img className="img__elipse" src={Elipse1} alt="Elipse decorativa" />
        <img className="img__dog" src={Dog} alt="Cachorro modelo da página" />
      </div>
    </section>
  );
};
