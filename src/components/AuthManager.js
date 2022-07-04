import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';

const PersistLogin = ({ children }) => {
    const { auth, isLogined } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();

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

    }, [refresh, auth?.accessToken, isLogined, isLoading])

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

export default PersistLogin;