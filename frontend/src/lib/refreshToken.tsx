// hooks/useTokenRefresh.ts
import { useEffect } from 'react';
import { api } from '../lib/axios'; // Adjust as necessary

const useTokenRefresh = () => {
    useEffect(() => {
        const refreshToken = async () => {
            const token = localStorage.getItem('token');

            if (token) {
                try {
                    // Call your API to refresh the token
                    const response = await api.post('/refresh-token', { token });
                    const newToken = response.data.token;
                    localStorage.setItem('token', newToken); // Update the token
                } catch (error) {
                    console.error('Token refresh failed:', error);
                    localStorage.removeItem('token'); // Optionally clear token on failure
                }
            }
        };

        const interval = setInterval(refreshToken, 20 * 60 * 1000); // 20 minutes

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
};

export default useTokenRefresh;
