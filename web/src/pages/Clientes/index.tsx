import React, { useEffect } from "react";

import { Title, Listas } from "../../components";
import { ICliente } from "../../components/Listas/Cliente";

const header = ["Cliente", "Responsável", "Domínio", "Contatos"];

const data: ICliente[] = [
    {
        id: 1,
        company: "Ifnity",
        technicalManager: "Matheus Santos",
        domainId: 12,
        email: "contato@ifnity.com",
        phoneNumber: "(11) 948112842"
    },
    {
        id: 1,
        company: "Ifnity",
        technicalManager: "Matheus Santos",
        domainId: 12,
        email: "contato@ifnity.com",
        phoneNumber: "(11) 948112842"
    },
    {
        id: 1,
        company: "Ifnity",
        technicalManager: "Matheus Santos",
        domainId: 12,
        email: "contato@ifnity.com",
        phoneNumber: "(11) 948112842"
    },
    {
        id: 1,
        company: "Ifnity",
        technicalManager: "Matheus Santos",
        domainId: 12,
        email: "contato@ifnity.com",
        phoneNumber: "(11) 948112842"
    },
]

function Clientes() {
  useEffect(() => {
    document.title = "Clientes | ManageEXP";
  }, []);

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
