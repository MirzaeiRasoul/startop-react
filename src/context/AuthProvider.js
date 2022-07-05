import { createContext, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isLogined, innerSetIsLogined] = useState(JSON.parse(localStorage.getItem('isLogined')) || false);

    const setIsLogined = (value) => {
        if (value) {
            innerSetIsLogined(true);
            localStorage.setItem('isLogined', JSON.stringify(true));
        } else {
            innerSetIsLogined(false);
            localStorage.setItem('isLogined', JSON.stringify(false));
        }
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, isLogined, setIsLogined }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
