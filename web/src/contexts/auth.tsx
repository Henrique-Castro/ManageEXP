import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
    name: string,
    email: string,
    cargo: string,
};

interface AuthContextProps {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = localStorage.getItem('manageEXP/user');
            const storagedToken = localStorage.getItem('manageEXP/token');

            if (storagedUser && storagedToken)
                setUser(JSON.parse(storagedUser));

            setLoading(false);
        };

        loadStorageData();
    }, []);

    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user);

        localStorage.setItem('manageEXP/user', JSON.stringify(response.user));
        localStorage.setItem('manageEXP/token', response.token);
    };

    async function signOut() {
        localStorage.removeItem('manageEXP/user');
        localStorage.removeItem('manageEXP/token');

        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
};
