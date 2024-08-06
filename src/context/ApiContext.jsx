import { createContext, useState } from "react"

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [selectedPackage, setSelectedPackage] = useState('');

    return (
        <ApiContext.Provider value={{selectedPackage, setSelectedPackage}}>
            {children}
        </ApiContext.Provider>
    )
}

export  {ApiContext, ApiProvider}