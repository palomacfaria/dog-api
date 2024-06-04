import "./styles.scss";
import OursAnimals from "../../assets/OursAnimals_img.png";
import Gary from "../../assets/Gary.png";
import Zoe from "../../assets/Zoe.png";
import Spike from "../../assets/Spike.png";
import Paçoca from "../../assets/Paçoca.png";
import Serena from "../../assets/Serena.png";
import Kiwi from "../../assets/Kiwi.png";
import Luna from "../../assets/Luna.png";
import Bidu from "../../assets/Bidu.png";
import Cake from "../../assets/Cake.png";

export const OursAnimalsCards = () => {
  const animals = [
    {
      id: Gary,
      name: "Foto do Gary, cachorro da raça Yorkshire Terrier",
      img: Gary,
    },
    { id: Zoe, name: "Foto da Zoe, gata da raça Siberiano", img: Zoe },
    { id: Spike, name: "Foto do Spike, gato da raça Maine Coon", img: Spike },
    {
      id: Paçoca,
      name: "Foto do Paçoca, gato da raça Half Breed",
      img: Paçoca,
    },
    {
      id: Serena,
      name: "Foto da Serena, cadela da raça Samoieda",
      img: Serena,
    },
    {
      id: Kiwi,
      name: "Foto do Kiwi, cachorro da raça Yorkshire Terrier",
      img: Kiwi,
    },
    {
      id: Luna,
      name: "Foto da Luna, gata da raça British Longhair",
      img: Luna,
    },
    {
      id: Bidu,
      name: "Foto do Bidu, cachorro da raça Jack Russel Terrier",
      img: Bidu,
    },
    { id: Cake, name: "Foto da Cake, cachorro da raça Welsh Corgi", img: Cake },
  ];
  return (
    <section id="nossos-animais" className="container__body">
      <img
        className="img__header"
        src={OursAnimals}
        alt="Cabeçalho da página nossos animais"
      />
      <div className="container__card">
        {animals.map((animal) => (
          <img className="img__card" src={animal.img} alt={animal.name} />
        ))}
      </div>
    </section>
  );
};
