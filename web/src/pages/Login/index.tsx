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
            width={200}
            height={200}
            padding={["medium", "medium"]}
            position='absolute'
            left={50}
            top={50}
            backgroundColor='primary'
            display='flex'
        >
            <button onClick={handleSignIn}>Entrar</button>
        </Div>
    );
};

export default Login;
