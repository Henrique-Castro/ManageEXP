import React from 'react';

import { Container } from './styles';

import { ColorsStatusOptions } from '../../../styles/themes/colors';

interface Props {
    variant: ColorsStatusOptions;
    value: string;
}

const Certificado = ({ variant, value }: Props) => {

    let formatterDate = new Intl.DateTimeFormat('pt-BR', {
        month: 'short',
        day: 'short',
        year: 'numeric',
    });

    return (
        <Container variant={variant} value={value}>
            {value}
        </Container>
    );
};

export default Certificado;
