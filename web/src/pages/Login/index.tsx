import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';

import { Div, Button, Typography, Form } from '../../components/';

import Onboarding from '../../assets/images/OnboardingImage.png';
import OnboardingBackground from '../../assets/images/OnboardingBackground.png';
import Logo from '../../assets/images/BlueLogo.png';

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
            display='flex'
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
        >
            {/* Login Section */}
            <Div
                width='50%'
                height='100%'
                display='flex'
                position='relative'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                backgroundColor='tertiary'
            >
                <img
                    style={{
                        position: 'absolute',
                        top: 32,
                        left: 32,
                    }}
                    src={Logo}
                    alt="ManageEXP Logo"
                />
                <form action="">
                    <Form.Input type='text'/>
                    <Button.Default text='Entre!' onClick={handleSignIn} />
                </form>
            </Div>

            <Div
                width='50%'
                height='100%'
                display='flex'
                position='relative'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                backgroundColor='quaternary'
                overflow='hidden'
            >
                <Div
                    position='absolute'
                    top={0}
                    right={0}
                    zIndex={-2}
                >
                    <img
                        style={{ width: 'auto', height: '100vh' }}
                        src={OnboardingBackground}
                        alt=""
                    />
                </Div>

                {/* Onboarding Text */}
                <Div
                    width={290}
                    position='absolute'
                    top={60}
                    left={58}
                >
                    <Typography
                        text='Controle de clientes em um só lugar'
                        color='senary'
                        align='left'
                    />
                </Div>
                <img style={{ width: '55%', minWidth: 360, maxWidth: 600 }} src={Onboarding} alt="Onboarding" />
            </Div>
        </Div>
    );
};

export default Login;
