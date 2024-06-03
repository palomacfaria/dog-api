import "./styles.scss";
import OurStore from "../../assets/ourStore_img.png";
import FancyFeast from "../../assets/FancyFeast.png";
import Iams from "../../assets/Iams.png";
import Nulo from "../../assets/Nulo.png";
import Kibbles from "../../assets/KibblesNBits.png";
import Cesar from "../../assets/Cesar.png";
import HappyDog from "../../assets/HappyDog.png";
import ColeiraDog from "../../assets/ColeiraDog.png";
import ColeiraCat from "../../assets/ColeiraCat.png";
import Bolinha from "../../assets/Bolinha.png";

export const OurStoreCards = () => {
  const animals = [
    {
      id: FancyFeast,
      name: "FancyFeast ração para gato",
      img: FancyFeast,
    },
    { id: Iams, name: "Iams, ração para gato", img: Iams },
    { id: Nulo, name: "Nulo, ração para gato", img: Nulo },
    {
      id: Kibbles,
      name: "Kibbles nBits, ração para cachorro",
      img: Kibbles,
    },
    {
      id: Cesar,
      name: "Cesar, ração para cachorro",
      img: Cesar,
    },
    {
      id: HappyDog,
      name: "HappyDog, ração para cachorro",
      img: HappyDog,
    },
    {
      id: ColeiraDog,
      name: "Coleira para cachorro",
      img: ColeiraDog,
    },
    {
      id: ColeiraCat,
      name: "Coleira para Gato",
      img: ColeiraCat,
    },
    { id: Bolinha, name: "Bolinha para cachorro e gato", img: Bolinha },
  ];
  return (
    <section className="container__body">
      <img
        className="img__header"
        src={OurStore}
        alt="Cabeçalho da página nossa loja"
      />
      <div className="container__card">
        {animals.map((animal) => (
          <img className="img__card" src={animal.img} alt={animal.name} />
        ))}
      </div>
    </section>
  );
};
