import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import { Status, Title } from '../../components';

import {
    STATUS_DOMAIN,
    DomainObjectWillBeReceivedFromAPI,
} from "../../components/Status/Domain/interface";

function Dashboard() {
    const { signOut } = useAuth();

    useEffect(() => {
        document.title = "Dashboard | ManageEXP";
    }, []);

    function handleSignOut() {
        signOut();
    };

    return (
        <>
            <Title text='Dashboard' />
            <button onClick={handleSignOut}>Clique em mim</button>
        </>
    );
};

export default Dashboard;
