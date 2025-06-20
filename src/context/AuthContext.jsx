import React, { createContext, useEffect } from 'react'

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storeAuth = localStorage.getItem('isAuthenticated');
        if (isAuthenticated === 'true') {
            setIsAuthenticated = true;
        }
    }, [])

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true')
    }

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated')
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);