import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            if (!accessToken) {
                try {
                    const response = await axios.post('/api/auth/refresh/', {}, {
                        withCredentials: true
                    });
                    setAccessToken(response.data.accessToken);
                    setIsLoading(false);
                } catch (err) {
                    setAccessToken(null);
                    setIsLoading(false);
                    // console.log(err.response.data.message);
                }
            }
        }
        checkToken();
    }, [accessToken])

    return (
        <React.Fragment>
            {isLoading ? <main className='main'>Loading ...</main> : (
                <AuthContext.Provider value={[accessToken, setAccessToken]}>
                    {children}
                </AuthContext.Provider>
            )}
        </React.Fragment>
    )
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };