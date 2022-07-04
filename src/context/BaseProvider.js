import { createContext, useState } from 'react';

const BaseContext = createContext({});

const BaseProvider = ({ children }) => {
    const [base, setBase] = useState({});

    return (
        <BaseContext.Provider value={{ base, setBase }}>
            {children}
        </BaseContext.Provider>
    );
}

export { BaseProvider, BaseContext };
