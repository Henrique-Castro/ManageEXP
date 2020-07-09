import React, { useState } from "react";

import { useAuth } from '../../contexts/auth'

import { Container, EyeIcon } from "./styles";

import { Headline, Button } from "..";

const Form: React.FC = () => {
  // const [active, setActive] = useState<boolean>(false)

  const { signIn } = useAuth();

  return (
    <Container>
      <div className="title">
        <Headline text="Login" />
      </div>

      <form action="">
        <div className="inputContainer">
          <label>URL do Zabbix</label>
          <input type="text" placeholder='Escreva a URL do Zabbix' />
        </div>

        <div className="inputContainer">
          <label>Email</label>
          <input type="email" placeholder='Escreva seu email' />
        </div>

        <div className="inputContainer">
          <label>Senha</label>
          <div className="iconInput">
            <input type="password" placeholder='Escreva sua senha' />
            <EyeIcon/>
          </div>
        </div>
      </form>
      <Button.Default text="Entre!" onClick={() => signIn()} />
    </Container>
  );
};

export default Form;
