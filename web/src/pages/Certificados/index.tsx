import React, { useEffect } from 'react';

function Certificados() {
    useEffect(() => {
        document.title = "Certificados | ManageEXP";
    }, []);

    return <h1>Certificados</h1>;
};

export default Certificados;
