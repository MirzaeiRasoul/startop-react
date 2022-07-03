import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TokenContext = createContext(null);

const TokenProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    return (
        <TokenContext.Provider value={[accessToken, setAccessToken]}>
            {children}
        </TokenContext.Provider>
    )
};

const useToken = () => useContext(TokenContext);

export { TokenContext, TokenProvider, useToken };