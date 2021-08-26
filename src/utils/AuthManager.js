import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import auth from './Auth';

const AuthManager = ({ children }) => {
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const redirectHandler = async () => {
            if (!await auth.isLoggedIn()) {
                auth.removeToken();
                if (['/profile'].includes(location.pathname)) history.push('/login');
            } else {
                if (['/login'].includes(location.pathname)) history.push('/');
            }
        }
        redirectHandler();
    }, [history, location])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default AuthManager;