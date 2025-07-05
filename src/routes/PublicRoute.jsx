import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
        return <Navigate to='/home' replace />
    }
    return children

}
