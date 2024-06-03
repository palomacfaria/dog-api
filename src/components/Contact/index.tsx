import "./styles.scss";
import Contacto from "../../assets/contact_img.png";
import InfoContacts from "../../assets/info_contacts.png";
export const Contact = () => {
  return (
    <section className="container__contact">
      <img
        className="img__header"
        src={Contacto}
        alt="Cabeçalho da página Contato"
      />
      <div className="container__form">
        <form className="form">
          <div className="container__input">
            <label>
              Entre com seu número de telefone
              <input type="text" name="phone" placeholder="(99) 99999-9999" />
            </label>
            <input type="submit" value="Submit" />
          </div>
          <div className="container__input">
            <label>
              Você também pode nos fornecer seu e-mail para receber novidades
              <input
                type="email"
                name="email"
                placeholder="usuario@email.com"
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div>
          <img src={InfoContacts} alt="Informações de contas bancárias" />
        </div>
      </div>
    </section>
  );
};
