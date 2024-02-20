import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { LoginContext } from '@context/IsLoggedinContext'

const ProtectedRoutes = () => {
    const[isLoggedin]=useContext(LoginContext);
    return(
        isLoggedin? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoutes