import React from 'react';
import { STATUS_DOMAIN } from '../../Status/Domain/interface';
import { Status } from '../..';

import { DomainRow } from './styles';

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
        <DomainRow key={index}>
            <td className='dominio' key={index} >{item.dominio}</td>
            <td className='dataAtualizacao' key={index} >{item.dataAtualizacao}</td>
            <td key={index} >
                <Status.Domain label={item.status} />
            </td>
        </DomainRow>
    ));

return (
    <tbody>
        {linhas}
    </tbody>
);
};

export default Dominio;
