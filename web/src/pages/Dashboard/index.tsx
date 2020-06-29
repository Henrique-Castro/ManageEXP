import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

function Dashboard() {
    const { signOut } = useAuth();

    useEffect(() => {
        document.title = "Dashboard | ManageEXP";
    }, []);

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
