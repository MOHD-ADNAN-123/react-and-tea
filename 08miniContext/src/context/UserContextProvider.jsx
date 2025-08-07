import React from 'react'
import UserContext from "./UserContext";

//Provider (function)
const UserContextProvider = ({children})=> {
    const [user,setUser] =React.useState(null)
    return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
    )
}

//export the provider
export default UserContextProvider