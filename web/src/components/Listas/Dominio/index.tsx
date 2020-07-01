import React from 'react';
import { STATUS_DOMAIN } from '../../Status/Domain/interface';
import { Status } from '../..';

export interface IDominio {
    dominio: string;
    dataAtualizacao: string;
    status: STATUS_DOMAIN;
};

export interface DominioProps {
    data: IDominio[];
};

const Dominio = ({ data }: DominioProps) => {
    let linhas = data.map((item, index) => (
        <tr key={index}>
            <td key={index} >{item.dominio}</td>
            <td key={index} >{item.dataAtualizacao}</td>
            <td key={index} >
                <Status.Domain label={item.status} />
            </td>
        </tr>
    ));

return (
    <tbody>
        {linhas}
    </tbody>
);
};

export default Dominio;
