import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import { Navigation, Status } from '../../components';

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

    let testObject: DomainObjectWillBeReceivedFromAPI = {
        type: STATUS_DOMAIN.verify,
    };

    return (
        <>
            Dashboard
            <Status.Domain label={testObject} />
        </>
    );
};

export default Dashboard;
