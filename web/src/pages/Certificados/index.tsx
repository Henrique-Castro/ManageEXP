import React, { useEffect } from 'react';

import { Title } from '../../components';

function Certificados() {
    useEffect(() => {
        document.title = "Certificados | ManageEXP";
    }, []);

    return(
        <Title text='Certificados' />
    );
};

export default Certificados;
