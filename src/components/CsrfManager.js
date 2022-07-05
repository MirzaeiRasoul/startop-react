import React, { useState, useEffect } from 'react';
import useCsrf from '../hooks/useCsrf';

const CsrfManager = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const csrf = useCsrf();

    useEffect(() => {
        const getCsrfToken = async () => {
            try {
                await csrf();
            } catch (err) {
                console.error(err.response.data.message);
            } finally {
                setIsLoading(false);
            }
        };
        getCsrfToken();
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

export default CsrfManager;
