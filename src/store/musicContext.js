import { createContext,useState } from "react";

export const MusicContext = createContext({
    
    
})

const MusicContextProvider = ({ children }) => {
    
    return <MusicContext.Provider value={value}></MusicContext.Provider>
}
export default MusicContextProvider;
