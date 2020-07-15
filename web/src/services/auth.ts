interface Response {
    token: string,
    user: {
        name: string,
        email: string,
        cargo: string
    },
};

// Auth promise example
export function signIn() :Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'kdasvdhbhubsacax312sda',
                user: {
                    name: 'Matheus Pires Santos',
                    email: 'matheus@email.com',
                    cargo: 'Administrado'
                },
            });
        }, 2000);
    });
};
