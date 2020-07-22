import React, { useEffect, useState } from "react";

import { Title, Listas } from "../../components";
import { IDominio } from "../../components/Listas/Dominio";
import { STATUS_DOMAIN } from "../../components/Status/Domain/interface";

import api from "../../services/api";

import { handleDomains } from "../../utils/handleData";

const header = ["Domínio", "Última Atualização", "Status"];

const data: IDominio[] = [
  {
    dominio: "www.youtube.com",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.ifnity.io.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.cocacola.com.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["error"],
  },
  {
    dominio: "www.claro.com.br",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.blocktime.com",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["error"],
  },
  {
    dominio: "www.uol.com.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.disc.com.br",
    dataAtualizacao: "29/06/2020",
    status: STATUS_DOMAIN["warn"],
  },
  {
    dominio: "www.twitter.com.br",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
  {
    dominio: "www.pure.com.br",
    dataAtualizacao: "18/03/2020",
    status: STATUS_DOMAIN["success"],
  },
];

interface Domain {
  itemid: string;
  name: string;
  description: string;
  lastclock: string;
  lastvalue: string;
  prevvalue: string;
  hostid: string;
}

function Dominios() {
  const [sortedData, setSortedData] = useState<IDominio[]>([]);
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    document.title = "Domínios | ManageEXP";

    sortDomains();

    getDomains();
  }, []);

  async function getDomains() {
    const filter = {
      output: [
        "itemid",
        "name",
        "description",
        "lastclock",
        "lastvalue",
        "prevvalue",
        "hostid",
      ],
      selectGroups: "extend",
      filter: {
        hostid: "10084",
      },
    };

    await api
      .post("Item/Get", filter)
      .then((res) => {
        console.log(res);
        setDomains(res.data);
      })
      .catch((error) => console.log(error));

    filterDomains();
  }

  function filterDomains() {
    var PATTERN = "Domínio";

    const filteredItems = domains.filter(function (domain: Domain) {
      return domain.name.includes(PATTERN);
    });

    console.log(filteredItems[1]);

    const sort = filteredItems.sort(handleDomains);
    setDomains(sort);
  }

  function sortDomains() {
    const sortData = data.sort(handleDomains);

    setSortedData(sortData);
  }

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
