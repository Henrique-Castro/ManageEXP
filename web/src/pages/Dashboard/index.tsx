import React, { ChangeEvent } from 'react';

import { useAuth } from '../../contexts/auth';

function Dashboard() {
    const { signed, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    };

    return (
        <div className="">
            <button onClick={handleSignOut} >Sair</button>
        </div>
    );
};

export default Dashboard;
