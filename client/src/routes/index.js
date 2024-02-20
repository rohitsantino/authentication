import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { ChangePassword } from '@pages/ChangePassword';
import { UserDashboard } from '@pages/UserDashboard';
import { ProtectedRoute } from '@protectedRoute';
import { useContext } from 'react';
import { LoginContext } from '@context/IsLoggedinContext';

export default function RouteHandler() {
    const [isLoggedin] = useContext(LoginContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='change-password' element={<ChangePassword />} />
                        <Route path='user' element={<UserDashboard />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}