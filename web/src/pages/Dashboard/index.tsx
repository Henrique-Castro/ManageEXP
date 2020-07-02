import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import { Status, Title, Button } from '../../components';

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
            <Button.Default text='Logout' variant='logout' onClick={handleSignOut} />
        </>
    );
};

export default Dashboard;
