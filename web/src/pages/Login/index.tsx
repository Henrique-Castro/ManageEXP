import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import { Div, Headline, Title } from '../../components/'

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
            width='100%'
            height='100vh'
            padding={["small", "small"]} 
            backgroundColor='secondary'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Headline text='Login' />
            <Title text='Domínios' />
        </Div>
    );
};

export default Login;
