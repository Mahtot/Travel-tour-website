import { createContext, useState, useEffect } from "react"

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [selectedPackage, setSelectedPackage] = useState('');
    const [user, setUser] = useState(null);
    const [savedPackages, setSavedPackages] = useState('')

    // Check if a user has previously already logged in and if s user saved a package
    useEffect(()=> {
      const storedUser = localStorage.getItem('user')
      const storedPackages = localStorage.getItem("savedPackages")

      if(storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser ({})
      }
      

      if(storedPackages) {
        setSavedPackages(JSON.parse(storedPackages))
      } else {
        setSavedPackages([])
      }
      

    },[])

    const savePackage = (pkg) =>{
          const updatedSavedPackage = [...savedPackages, pkg];
          setSavedPackages(updatedSavedPackage)
          localStorage.setItem("savedPackages", JSON.stringify(updatedSavedPackage))
    }

    const removeSavedPackage = (packageId) =>{
        const updatedSavedPackage = savedPackages.filter(pkg => pkg.id !==packageId)
        setSavedPackages(updatedSavedPackage)
        localStorage.setItem("savedPackages", JSON.stringify(updatedSavedPackage))

    }

    const login = (userData) => {
        setUser(userData);
        localStorage.setITem("user", JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
    }
    return (
        <ApiContext.Provider value={{ user, login, logout, selectedPackage, setSelectedPackage, savedPackages,removeSavedPackage,savePackage }}>
            {children}
        </ApiContext.Provider>
         )
}

export  {ApiContext, ApiProvider}