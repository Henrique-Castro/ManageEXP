import React, { useState, useEffect } from 'react';

import { STATUS_CERTIFICATE } from './interface';

import { parseDays } from '../../../utils/daysFormat';

import { Container } from './styles';

const Certificado = ({ data }: STATUS_CERTIFICATE) => {
    const [value, setValue] = useState(data);

    useEffect(() => {
        const resultado = parseDays(data);

        setValue(resultado);
    }, [data]);

    return (
        <Container variant='error' data={data}>
            {value}
        </Container>
    );
};

export default Certificado;
