import React, { useEffect } from 'react';

import { Title, Listas } from '../../components';
import { IDominio } from '../../components/Listas/Dominio';
import { STATUS_DOMAIN } from '../../components/Status/Domain/interface';

const header = ["Domínio", "Última Atualização", "Status"];

const data: IDominio[] = [
    {
        dominio: "www.google.com",
        dataAtualizacao: "18/03/2020",
        status: STATUS_DOMAIN["publish"],
    },
    {
        dominio: "matheuspsantos.dev",
        dataAtualizacao: "29/06/2020",
        status: STATUS_DOMAIN["verify"],
    },
    {
        dominio: "www.blocktime.com.br",
        dataAtualizacao: "29/06/2020",
        status: STATUS_DOMAIN["outofarea"],
    },
    {
        dominio: "www.uol.com.br",
        dataAtualizacao: "18/03/2020",
        status: STATUS_DOMAIN["publish"],
    },
];

function Dominios() {
    useEffect(() => {
        document.title = "Domínios | ManageEXP";
    }, []);

    return (
        <>
            <Title text="Domínios" />
            <table>
                <Listas.Cabecalho headerData={header} />
                <Listas.Dominio data={data} />
            </table>
        </>
    );
};

export default Dominios;
