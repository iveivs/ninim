import { createContext } from "react";

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
})

export function CryptoContextProvider({children}) {
    return <CryptoContext.Provider
            >
        {children}
    </CryptoContext.Provider>
}