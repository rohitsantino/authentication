import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { ChangePassword } from '@pages/ChangePassword';

export default function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='change-password' element={<ChangePassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}