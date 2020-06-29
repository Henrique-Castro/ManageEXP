import React from 'react';

import { HeaderSection } from './styles';

import { Typography } from '..';

const Header : React.FC = () => {
    return(
        <HeaderSection>
            <Typography text='29 de junho' fontFamily="robotoLightItalic" color='quaternary' />
        </HeaderSection>
    );
};

export default Header;