// AuthContext.js
import { createContext, useContext, useState } from 'react';
import authService from '../context/contextHelpers/authServices';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const register = async (userData) => {
        setIsLoading(true);
        try {
            const response = await authService.register(userData);
            setUser(response);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setMessage(error.message || error.toString());
        }
    }
    
    const login = async (userData) => {
        setIsLoading(true);
        try {
            const response = await authService.login(userData);
            setUser(response);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setMessage(error.message || error.toString());
        }
    }

    const logout = () => {
        authService.logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, isError, message, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
