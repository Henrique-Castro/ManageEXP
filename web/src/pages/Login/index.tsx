import React from 'react';

import { useAuth } from '../../contexts/auth';

function Login() {
    const { signIn } = useAuth()

    function handleSignIn() {
        signIn();
    };

    return (
        <div className="">
            <button onClick={handleSignIn}>Entrar</button>
        </div>
    );
};

export default Login;
