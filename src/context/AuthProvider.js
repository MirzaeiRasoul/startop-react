import { createContext, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isLogined, setIsLogined] = useState(JSON.parse(localStorage.getItem('isLogined')) || false);

    const setLogin = () => {
        setIsLogined(true);
        localStorage.setItem('isLogined', JSON.stringify(true));
    }

    const setLogout = () => {
        setIsLogined(false);
        localStorage.setItem('isLogined', JSON.stringify(false));
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, isLogined, setLogin, setLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
