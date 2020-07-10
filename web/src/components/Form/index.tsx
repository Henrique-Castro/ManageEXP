import React from "react";

import { useAuth } from "../../contexts/auth";

import { Container } from "./styles";

import { Headline, Button } from "..";

const Form: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <Container>
      <div className="title">
        <Headline text="Login" />
      </div>

      <form action="">
        <div className="inputContainer">
          <label>URL do Zabbix</label>
          <input type="text" placeholder="Escreva a URL do Zabbix" />
        </div>

        <div className="inputContainer">
          <label>Email</label>
          <input type="email" placeholder="Escreva seu email" />
        </div>

        <div className="inputContainer">
          <label>Senha</label>
          <input type="password" placeholder="Escreva sua senha" />
        </div>
      </form>
      <Button.Default text="Entre!" onClick={() => signIn()} />
    </Container>
  );
};

export default Form;
