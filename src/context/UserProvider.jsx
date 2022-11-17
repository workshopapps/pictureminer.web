import React, { useState, useContext } from "react";

export const UserContext = React.createContext();
UserContext.displayName = "UserProvider"

export default function UserProvider({ children }) {
    const [user, setUser] = useState("User 1")

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export function useUserProvider() {
    return useContext(UserContext)
}