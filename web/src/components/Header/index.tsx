import React, { useState, useEffect } from 'react';

import { HeaderSection } from './styles';

import { Typography } from '..';

const Header: React.FC = () => {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            getCurrentTime()
        }, 1000);
    }, []);

    function getCurrentTime() {
        setTime(new Date());
    };    

    let formatterDate = new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });

    let formatterTime = new Intl.DateTimeFormat('pt-BR', {
        hour: 'numeric', 
        minute: 'numeric',
    });

    return (
        <HeaderSection>
            <Typography
                text={`${formatterDate.format(date)}, ${formatterTime.format(time)}`}
                fontSize='xp'
                fontFamily="robotoLightItalic"
                color='quaternary'
            />
        </HeaderSection>
    );
};

export default Header;