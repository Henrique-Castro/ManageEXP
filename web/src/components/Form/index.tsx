import React, { useState, ChangeEvent, FormEvent } from "react";

import { useAuth } from "../../contexts/auth";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import { Headline, Button } from "..";

import api from "../../services/api";

const Form: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [formData, setFormData] = useState({
    url: "https://teamtime.eastus2.cloudapp.azure.com/zabbix/api_jsonrpc.php",
    user: "Admin",
    password: "Senai@132",
  });

  const handleURL = async () => {
    const { url } = formData;

    await api
      .post("zabbix", JSON.stringify(url))
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: FormEvent) {
    handleURL();
    handleLogin();
  }

  function handleLogin() {
    const { user, password } = formData;

    const data = {
      user,
      password,
    };

    signIn(data);
  }

  function handleLogout() {
    api.post("Auth/Logout", {}).then((res) => console.log(res));
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
          <label>Usuário</label>
          <input
            type="text"
            name="user"
            placeholder="Escreva seu o nome de usuário"
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
      <Button.Default text="Entre!" onClick={handleSubmit} />
    </Container>
  );
};

export default Form;
