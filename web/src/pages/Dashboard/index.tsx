import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import { Navigation } from '../../components/index';

function Dashboard() {
    const { signOut } = useAuth();

    useEffect(() => {
        document.title = "Dashboard | ManageEXP";
    }, []);

    function handleSignOut() {
        signOut();
    };

    return (
            <div className="">Dashboard</div>
    );
};

export default Dashboard;
