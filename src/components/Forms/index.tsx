import React, { useState } from "react";
import "./styles.scss";

export const Form = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneInput(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container__input">
        <label htmlFor="phone">
          <p className="label__text">Digite seu número de telefone</p>
        </label>
        <input
          type="text"
          id="phone"
          value={phoneInput}
          onChange={handlePhone}
          placeholder="(99) 99999-9999"
          className="text-input"
        />
      </div>
      <div className="container__input">
        <label htmlFor="email">
          <p className="label__text">Você também pode nos fornecer seu e-mail para receber novidades</p>
        </label>
        <input
          type="email"
          id="email"
          value={emailInput}
          onChange={handleEmail}
          placeholder="email@email.com"
          className="text-input"
        />
      </div>
      <button type="submit" className="btn__submit">
        Enviar
      </button>
    </form>
  );
};
