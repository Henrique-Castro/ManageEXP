import React, { useState, useEffect } from 'react';

import { Container } from './styles';

interface Props {
    data?: string
}

const Certificado = ({ data }: Props) => {

    const [value, setValue] = useState(data);

    useEffect(() => {
        parseData();
    }, []);

    const parseData = () => {
        const parsedValue = value?.split('.');

        if (parsedValue) {

            const days = parseInt(parsedValue[0]);

            let leftMonth = Math.floor(days / 30);
            let leftDays = days % 30;

            const concatValue = `${leftMonth > 0 ? `${leftMonth} ${leftMonth === 1 ? 'mês' : 'meses' }` : ''} ${leftMonth && leftDays ? 'e' : ''} ${leftDays > 0 ? `${leftDays} ${leftDays === 1 ? 'dia' : 'dias'}` : ''} `;

            setValue(concatValue);
        }
    };

    return (
        <Container variant='error' data={data}>
            {value}
        </Container>
    );
};

export default Certificado;
