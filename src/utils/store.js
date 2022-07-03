import React, { createContext, useReducer } from "react";

const initialState = { isAuthenticated: false };
const Context = createContext(initialState);

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'login':
                return { isAuthenticated: true };
            case 'logout':
                return { isAuthenticated: false };
            default:
                throw new Error();
        };
    }, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export { Context, StoreProvider };