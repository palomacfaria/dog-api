import "./style.scss";
import Dog from "../../assets/dog.png";
import Elipse1 from "../../assets/elipse_1.png";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="container__info">
        <h2 className="heading1">
          A felicidade está mais perto do que você pensa
        </h2>
        <button>Vamos lá!</button>
      </div>
      <div className="container__img">
        <img className="elipse" src={Elipse1} />
        <img className="dog" src={Dog} />
      </div>
    </div>
  );
};
