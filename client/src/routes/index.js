import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';

export default function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}