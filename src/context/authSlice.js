import React, { createContext, useContext, useState } from 'react';
import authService from './contextHelpers/authServices';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const login = async (user) => {
    setIsLoading(true);
    try {
      const response = await authService.login(user);
      setUser(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setMessage(error.message || error.toString());
    }
  }

  const logout = async () => {
    await authService.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, isError, message, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
