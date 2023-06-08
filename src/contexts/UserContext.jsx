import {createContext, useState} from "react";


export const UserContext = createContext()

const UserContextProviders = ({children}) => {
    const [userData, setUserData] = useState()
    const updateData = (newData) => {
        setUserData(newData)
    }
    return (<UserContext.Provider value={{userData, updateData}}>
        {children}
    </UserContext.Provider>)
}
export default UserContextProviders;