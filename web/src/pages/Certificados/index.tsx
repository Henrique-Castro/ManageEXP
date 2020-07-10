import React, { useEffect, useState } from "react";

import { Title, Listas } from "../../components";
import { ICertificado } from "../../components/Listas/Certificado";

import { handleCertificates } from '../../utils/handleData';

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
    const [sortedData, setSortedData] = useState<ICertificado[]>([])


  useEffect(() => {
    document.title = "Certificados | ManageEXP";

    const handleData = data.sort(handleCertificates);

    setSortedData(handleData);
  }, []);

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
