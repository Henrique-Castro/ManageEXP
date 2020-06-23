import React, { useEffect } from 'react';

function Dominios() {
    useEffect(() => {
        document.title = "Domínios | ManageEXP";
    }, []);

    return <h1>Dominios</h1>;
};

export default Dominios;
