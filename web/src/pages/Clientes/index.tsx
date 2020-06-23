import React, { useEffect } from 'react';

function Clientes() {
    useEffect(() => {
        document.title = "Clientes | ManageEXP";
    }, []);

    return <h1>Clientes</h1>;
};

export default Clientes;
