import React, { useEffect, useState } from "react";

import { Title, Listas } from "../../components";
import { IDominio } from "../../components/Listas/Dominio";
import { STATUS_DOMAIN } from "../../components/Status/Domain/interface";

import { handleDomains } from "../../utils/handleData";

const header = ["Domínio", "Última Atualização", "Status"];

const data: IDominio[] = [
  {
    dominio: "www.google.com",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "matheuspsantos.dev",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["warn"],
  },
  {
    dominio: "www.blocktime.com.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["error"],
  },
  {
    dominio: "www.uol.com.br",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.google.com",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "matheuspsantos.dev",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["warn"],
  },
  {
    dominio: "www.blocktime.com.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["error"],
  },
  {
    dominio: "www.uol.com.br",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.google.com",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "matheuspsantos.dev",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["warn"],
  },
  {
    dominio: "www.blocktime.com.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["error"],
  },
  {
    dominio: "www.uol.com.br",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
];

function Dominios() {
  const [sortedData, setSortedData] = useState<IDominio[]>([]);

  useEffect(() => {
    document.title = "Domínios | ManageEXP";

    const handledData = data.sort(handleDomains);

    setSortedData(handledData);
  }, []);

  return (
    <>
      <Title text="Domínios" />
      <Listas.Table>
        <Listas.Cabecalho headerData={header} />
        <Listas.Dominio data={sortedData} />
        <Listas.Footer />
      </Listas.Table>
    </>
  );
}

export default Dominios;