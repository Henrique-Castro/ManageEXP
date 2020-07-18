import React, { useEffect, useState } from "react";

import { Title, Listas } from "../../components";
import { ICertificado } from "../../components/Listas/Certificado";

import api from "../../services/api";

import { handleCertificates } from "../../utils/handleData";

const header = ["Cliente", "Última Atualização", "Dias Restantes"];

const data: ICertificado[] = [
  {
    cliente: "Ifnity.Inc",
    dataAtualizacao: "18/03/2020",
    diasRestantes: "70.000",
  },
  {
    cliente: "Ifnity.Inc",
    dataAtualizacao: "18/03/2020",
    diasRestantes: "12.000",
  },
  {
    cliente: "Ifnity.Inc",
    dataAtualizacao: "18/03/2020",
    diasRestantes: "30.000",
  },
  {
    cliente: "Ifnity.Inc",
    dataAtualizacao: "18/03/2020",
    diasRestantes: "43.000",
  },
];

function Certificados() {
  const [sortedData, setSortedData] = useState<ICertificado[]>([]);
  const [certificates, setCertificates] = useState<ICertificado[]>([]);

  useEffect(() => {
    getCertificates();
  });

  useEffect(() => {
    document.title = "Certificados | ManageEXP";

    const handleData = certificates.sort(handleCertificates);

    setSortedData(handleData);
  }, []);

  function getCertificates() {
    api.get("Item").then((res) => setCertificates(res.data));
  };

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
