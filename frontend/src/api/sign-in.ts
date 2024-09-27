import { api } from '../lib/axios';

export interface SignInBody {
    email: string;
    password: string;
}

export async function signIn({ email, password }: SignInBody) {
    const response = await api.post('/sessions', { email, password });
    const { token } = response.data; // Assume the token is returned in this way
    localStorage.setItem('token', token); // Save token to local storage
    return token; // Return token for further use
}
