import React from "react";
import ButtonFilled from "../Button/ButtonFilled";
import Field from "../Input/Field";

export default function UserLogin() {
  const submitHandler = () => {};
  return (
    <div className="user-login-container">
      <div className="title">
        <h2>Já tem uma conta</h2>
      </div>
      <form onSubmit={submitHandler} className="form-login">
        <Field type="email" placeholder="Email" required icon="icon-profile" />
        <Field
          type="password"
          placeholder="Senha"
          required
          icon="icon-padlock"
        />
        <ButtonFilled type="submit" label="Enviar" />
        <div className="cta-container">
          <a href="#">Criar Conta</a>
          <a href="#">Esqueci a senha</a>
        </div>
      </form>
    </div>
  );
}
