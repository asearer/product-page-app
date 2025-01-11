import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Add default admin account if it doesn't exist
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (!storedUsers.some(user => user.email === 'admin@test.test')) {
      const defaultAdmin = {
        name: 'Administrator',
        email: 'admin@test.test',
        password: 'Admin123!',
        isAdmin: true,
        signupDate: new Date().toISOString(),
        lastLogin: null
      };
      storedUsers.push(defaultAdmin);
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call to validate credentials
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find(u => u.email === email);

    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    const userData = {
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin || false,
      // Don't include password in user state
    };

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
