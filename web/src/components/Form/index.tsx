import React, { useState, ChangeEvent, FormEvent } from "react";

import { useAuth } from "../../contexts/auth";
import { useHistory } from "react-router-dom"

import { Container } from "./styles";

import { Headline, Button } from "..";

import api from "../../services/api";

const Form: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [formData, setFormData] = useState({
    url: "",
    user: "",
    password: "",
  });

  const handleURL = () => {
    const { url } = formData;

    api.post("zabbix", url);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  function handleSumit(event: FormEvent) {
    const { user, password } = formData;

    const data = {
      user, 
      password
    };

    api.post('Auth', data);
  }

  return (
    <Container>
      <div className="title">
        <Headline text="Login" />
      </div>

      <form action="">
        <div className="inputContainer">
          <label>URL do Zabbix</label>
          <input
            type="text"
            name="url"
            placeholder="Escreva a URL do Zabbix"
            onChange={handleInputChange}
          />
        </div>

        <div className="inputContainer">
          <label>Email</label>
          <input 
            type="email"
            name="user" 
            placeholder="Escreva seu email"
            onChange={handleInputChange} 
          />
        </div>

        <div className="inputContainer">
          <label>Senha</label>
          <input 
            type="password"
            name="password" 
            placeholder="Escreva sua senha" 
            onChange={handleInputChange}  
          />
        </div>
      </form>
      <Button.Default text="Entre!" onClick={() => signIn()} />
    </Container>
  );
};

export default Form;
