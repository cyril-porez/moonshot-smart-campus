

// contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const AuthContext = createContext();

// Provider pour AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const login = (username, password) => {
    // Logique de connexion
  };

  const logout = () => {
    // Logique de déconnexion
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, message }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour utiliser AuthContext
export const useAuth = () => useContext(AuthContext);
