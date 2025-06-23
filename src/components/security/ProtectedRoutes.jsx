import { useAuth } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null; // Optional: Replace with a spinner/loading screen

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // 👈 This is the key part
};

export default ProtectedRoutes;
