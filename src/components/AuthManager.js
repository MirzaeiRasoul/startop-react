import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useRefresh from '../hooks/useRefresh';

const AuthManager = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth, isLogined } = useAuth();
    const refresh = useRefresh();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err.response.data.message);
            } finally {
                setIsLoading(false);
            }
        }
        isLogined && !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <React.Fragment>
            {isLoading ?
                <main className='main'>Loading ...</main>
                :
                <React.Fragment>{children}</React.Fragment>
            }
        </React.Fragment>
    );
}

export default AuthManager;
