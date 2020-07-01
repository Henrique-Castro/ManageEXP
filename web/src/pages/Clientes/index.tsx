import React, { useEffect } from 'react';

import { Title } from '../../components';

function Clientes() {
    useEffect(() => {
        document.title = "Clientes | ManageEXP";
    }, []);

    return(
        <Title text='Clientes' />
    );
};

export default Clientes;
