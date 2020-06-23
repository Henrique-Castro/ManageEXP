import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import Div from '../../components/Div'

function Login() {
    const { signIn } = useAuth()

    useEffect(() => {
        document.title = "Login | ManageEXP";
    }, []);

    function handleSignIn() {
        signIn();
    };

    return (
        <Div
            width='100wh'
            height='100vh'
            padding={["medium", "medium"]}
            backgroundColor='primary'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <h1 onClick={handleSignIn}>Teste</h1>
        </Div>
    );
};

export default Login;
