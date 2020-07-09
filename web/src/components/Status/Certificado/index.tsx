import React, { useState, useEffect } from 'react';

import { parseDays } from '../../../utils/daysFormat';

import { Container } from './styles';

interface Props {
    data?: string
}

const Certificado = ({ data }: Props) => {
    const [value, setValue] = useState(data);

    useEffect(() => {
        const resultado = parseDays(data);

        setValue(resultado);
    }, []);

    return (
        <Container variant='error' data={data}>
            {value}
        </Container>
    );
};

export default Certificado;
