// userContext.js
import React, { useState, createContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:3001/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(result => {
                if (result.user) {
                    setUser(result.user);
                } else {
                    localStorage.removeItem('token');
                }
            })
            .catch(() => localStorage.removeItem('token'));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        toast.success('Successfully logged in!');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        toast.success('Successfully logged out!');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                stacked
            />
            {children}
        </UserContext.Provider>
    );
};
