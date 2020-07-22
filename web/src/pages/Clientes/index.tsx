import React, { useEffect } from "react";

import { Title, Listas } from "../../components";
import { ICliente } from "../../components/Listas/Cliente";

const header = ["Cliente", "Responsável", "Domínio", "Contatos"];

const data: ICliente[] = [
  {
    id: 1,
    company: "Ifnity",
    technicalManager: "Matheus Santos",
    domainId: "ifinity.io.br",
    email: "contato@ifnity.com",
    phoneNumber: "(11) 912345678",
  },
  {
    id: 2,
    company: "BlockTime",
    technicalManager: "Renan",
    domainId: "blocktime.com.br",
    email: "contato@blocktime.com",
    phoneNumber: "(11) 912345678",
  },
  {
    id: 3,
    company: "Coca-cola",
    technicalManager: "Larissa Pato",
    domainId: "cocacola.com.br",
    email: "contato@coca.com",
    phoneNumber: "(11) 912345678",
  },
  {
    id: 4,
    company: "Twitter",
    technicalManager: "Henrique Castro",
    domainId: "twitter.com.br",
    email: "contato@twitter.com",
    phoneNumber: "(11) 912345678",
  },{
    id: 5,
    company: "Purê_code",
    technicalManager: "Matheus Santos",
    domainId: "purecode.com.br",
    email: "contato@ifnity.com",
    phoneNumber: "(11) 912345678",
  },
  {
    id: 6,
    company: "Youtube",
    technicalManager: "Renan",
    domainId: "youtube.com.br",
    email: "contato@ifnity.com",
    phoneNumber: "(11) 912345678",
  },
  {
    id: 7,
    company: "Live Disc",
    technicalManager: "Matheus Santos",
    domainId: "disc.com.br",
    email: "contato@disc.com",
    phoneNumber: "(11) 912345678",
  },
  {
    id: 8,
    company: "Claro",
    technicalManager: "Henrique Vianna",
    domainId: "claro.com.br",
    email: "contato@claro.com",
    phoneNumber: "(11) 912345678",
  }
];

function Clientes() {
  useEffect(() => {
    document.title = "Clientes | ManageEXP";
  }, []);

  var myArray = ["bedroomone", "bedroomonetwo", "bathroom"];

  var PATTERN = 'Domínio',
    filtered = myArray.filter(function (str) { return str.includes(PATTERN); });
  
  console.log(filtered);

  return (
    <>
      <Title text="Clientes" />
      <Listas.Table>
        <Listas.Cabecalho headerData={header} />
        <Listas.Cliente data={data} />
        <Listas.Footer />
      </Listas.Table>
    </>
  );
}

export default Clientes;
