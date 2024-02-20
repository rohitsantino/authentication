import { createContext, useState } from "react";


export const LoginContext = createContext();
import React from 'react'

export default function IsLoggedinContext({ children }) {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    return (
        <LoginContext.Provider value={[isLoggedin, setIsLoggedIn]}>
            {children}
        </LoginContext.Provider>
    )
}
