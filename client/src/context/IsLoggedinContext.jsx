import { createContext, useState } from "react";


export const LoginContext = createContext();


export default function IsLoggedinContext({ children }) {
    const [isLoggedin, setIsLoggedin] = useState(false);
    return (
        <LoginContext.Provider value={[isLoggedin, setIsLoggedin]}>
            {children}
        </LoginContext.Provider>
    )
}
