// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../auth/authServices';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [messageOne, setMessageOne] = useState('');
    const [messageTwo, setMessageTwo] = useState('');

    useEffect(() => {
        // Check local storage for user information on application startup
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const register = async (userData) => {
        setIsLoading(true);
        try {

            const response = await authService.register(userData);
            setUser(response);
            setIsLoading(false);

        } catch (error) {

            setIsLoading(false);
            setIsError(true);
            setMessageOne(error.message || error.toString());

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
            setMessageTwo(error.message || error.toString());

        }
    }

    const logout = () => {
        authService.logout();
        setUser(null);
        setMessageOne(null);
        setMessageTwo(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isError,
                messageOne,
                messageTwo,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
