import "./styles.scss";
import Contacto from "../../assets/contact_img.png";
import InfoContacts from "../../assets/pagamento.png";
import { Form } from "../Forms";
export const Contact = () => {
  return (
    <section id="contato" className="container__contact">
      <img
        className="img__header"
        src={Contacto}
        alt="Cabeçalho da página Contato"
      />
      <div className="container__form">
        <Form />
        <img className="img_pagamentos" src={InfoContacts} alt="Informações de contas bancárias" />
      </div>
    </section>
  );
};
