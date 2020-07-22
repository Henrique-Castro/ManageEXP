import React, { useEffect, useState } from "react";

import { Title, Listas } from "../../components";
import { ICertificado } from "../../components/Listas/Certificado";

import api from "../../services/api";

import { handleCertificates } from "../../utils/handleData";

const header = ["Cliente", "Última Atualização", "Dias Restantes"];

const data: ICertificado[] = [
  {
    cliente: "BlockTime",
    dataAtualizacao: "22/07/20 20",
    diasRestantes: "8.000",
  },
  {
    cliente: "Ifnity Inc.",
    dataAtualizacao: "20/07/2020",
    diasRestantes: "15.000",
  },
  {
    cliente: "Coca-cola",
    dataAtualizacao: "19/07/2020",
    diasRestantes: "45.000",
  },
  {
    cliente: "Claro",
    dataAtualizacao: "22/07/2020",
    diasRestantes: "40.000",
  },
  {
    cliente: "Purê_Code",
    dataAtualizacao: "18/07/2020",
    diasRestantes: "18.000",
  },
  {
    cliente: "Youtube",
    dataAtualizacao: "15/07/2020",
    diasRestantes: "83'.000",
  },
  {
    cliente: "Twitter",
    dataAtualizacao: "18/07/2020",
    diasRestantes: "294.000",
  },
  {
    cliente: "JSDev",
    dataAtualizacao: "20/07/2020",
    diasRestantes: "100.000",
  },
  {
    cliente: "Live Disc",
    dataAtualizacao: "19/07/2020",
    diasRestantes: "182.000",
  },
];

interface Certificate {
  itemid: string;
  name: string;
  description: string;
  lastclock: string;
  lastvalue: string;
  prevvalue: string;
  hostid: string;
}

function Certificados() {
  const [sortedData, setSortedData] = useState<ICertificado[]>([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    document.title = "Certificados | ManageEXP";

    sortCertificates();

    getCertificates();
  }, []);

  async function getCertificates() {
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
        setCertificates(res.data);
      })
      .catch((error) => console.log(error));
  }

  function filterCertificates() {
    var PATTERN = "Certificado";

    const filteredItems = certificates.filter(function (certificate: Certificate) {
      return certificate.name.includes(PATTERN);
    });

    console.log(filteredItems[1]);

    const sort = filteredItems.sort(handleCertificates);
    setCertificates(sort);
  }

  function sortCertificates() {
    const sortData = data.sort(handleCertificates);
    setSortedData(sortData);
  }

  return (
    <>
      <Title text="Certificados" />
      <Listas.Table>
        <Listas.Cabecalho headerData={header} />
        <Listas.Certificado data={sortedData} />
        <Listas.Footer />
      </Listas.Table>
    </>
  );
}

export default Certificados;
