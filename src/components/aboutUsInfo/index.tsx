import "./styles.scss";
import AboutMentally from "../../assets/img_aboutUs-1.png";
import AboutSocialization from "../../assets/img_aboutUs-2.png";
import AboutConvivence from "../../assets/img_aboutUs-3.png";

export const AboutUsInfo = () => {
  const informations = [
    {
      id: "aboutMentally",
      name: "Garoto com seu cachorro na paria",
      title: "MENTALMENTE SAUDÁVEL",
      description:
        "   Para muitas pessoas, especialmente aquelas que se sentem solitárias, ter um animal de estimação pode ser uma valiosa fonte de conforto e companhia. Alugar um animal de estimação dá às pessoas solitárias a oportunidade de desfrutar da presença e do amor de um animal de estimação, o que pode aumentar significativamente o seu humor e bem-estar num momento tão difícil.",
      img: AboutMentally,
    },
    {
      id: "aboutSocialization",
      name: "Gatinho modelo",
      title: "SOCIALIZAÇÃO ANIMAL",
      description:
        "Muitos animais de estimação precisam socializar e interagir com pessoas e outros animais para serem felizes e saudáveis. Alugar animais de estimação também ajuda aqueles animais que procuram um lar permanente. Enquanto estão alugados, recebem cuidado, atenção e a oportunidade de mostrar suas melhores qualidades aos potenciais adotantes. Isso pode aumentar significativamente as chances de uma adaptação bem-sucedida e de uma vida feliz em uma nova casa.",
      img: AboutSocialization,
    },
    {
      id: "aboutConvivence",
      name: "Cachorro e gato modelo",
      title: "CONVIVÊNCIA",
      description:
        "Você escolhe seu próprio período de aluguel e horário que for mais conveniente para você. Tudo que você precisa é pegar seu animal de estimação e desfrutar de um companheiro temporário.O aluguel permite que você desfrute do maravilhoso mundo dos animais. Você pode ganhar uma experiência valiosa e entender se uma determinada espécie animal combina com você.",
      img: AboutConvivence,
    },
  ];

  return (
    <>
      {informations.map((information) => (
        <div className="container__info">
          <img
            className="img__about-espiral"
            src={information.img}
            alt={information.name}
          />

          <div className="about__info">
            <h2 className="heading2">{information.title}</h2>
            <p className="paragraph">{information.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
