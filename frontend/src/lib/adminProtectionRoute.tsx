import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/sign-in" />; // Redirect to sign-in if no token
    }

    return children; // Render the children if authenticated
};

export default ProtectedRoute; // Ensure you export the component
