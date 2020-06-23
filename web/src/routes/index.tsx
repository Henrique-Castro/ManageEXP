import React from 'react';
import { useAuth } from '../contexts/auth';

// Routes
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <div>
                <span>Carregandoo ...</span>
            </div>
        );
    };

    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
