import { api } from "../lib/axios";

export async function refreshToken() {
    try {
        const response = await api.post('/refresh-token');
        const { token } = response.data;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Failed to refresh token:', error);
        window.location.href = '/sign-in';
    }
}
