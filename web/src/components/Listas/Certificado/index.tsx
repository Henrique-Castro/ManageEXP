import React from 'react';

import { CertificateRow } from './styles';
import { Status } from '../..'

export interface ICertificado {
    cliente: string;
    dataAtualizacao: string;
    diasRestantes: string;
};

export interface CertificadoProps {
    data: ICertificado[]
};

const Certificado = ({ data }: CertificadoProps) => {

    let linhas = data.map((item, index) => (
        <CertificateRow key={index}>
            <td className="certificado" >{item.cliente}</td>
            <td className="dataAtualizacao" >{item.dataAtualizacao}</td>
            <td>
                <Status.Certificado data={item.diasRestantes}/>
            </td>
        </CertificateRow>
    ));

    return(
        <tbody>
            {linhas}
        </tbody>
    );
};

export default Certificado;
