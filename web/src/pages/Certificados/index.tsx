import React, { useEffect } from 'react';

import { Title, Listas } from '../../components';
import { ICertificado } from '../../components/Listas/Certificado';

const header = ["Cliente", "Última Atualização", "Dias Restantes"];

const data: ICertificado[] = [
    {
        cliente: "Ifnity.Inc",
        dataAtualizacao: "18/03/2020",
        diasRestantes: "70.000"
    },
    {
        cliente: "Ifnity.Inc",
        dataAtualizacao: "18/03/2020",
        diasRestantes: "12.000"
    },
    {
        cliente: "Ifnity.Inc",
        dataAtualizacao: "18/03/2020",
        diasRestantes: "30.000"
    },
    {
        cliente: "Ifnity.Inc",
        dataAtualizacao: "18/03/2020",
        diasRestantes: "43.000"
    },
];

function Certificados() {

    let dataTeste = '07/07/2020';

    let date = new Date(dataTeste);

    console.log(date.getMonth());

    useEffect(() => {
        document.title = "Certificados | ManageEXP";
    }, []);

    return (
        <>
            <Title text='Certificados' />
            <Listas.Table>
                <Listas.Cabecalho headerData={header} />
                <Listas.Certificado data={data} />
                <Listas.Footer />
            </Listas.Table>

        </>
    );
};

export default Certificados;
