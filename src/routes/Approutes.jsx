import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from '../Screens/Login/LoginScreen';
import Home from '../Screens/Home';
import RegisteScreen from '../Screens/Register/RegisteScreen';
import NotfoundScreen from '../Screens/Notfoundpage/NotfoundScreen';


const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginScreen />} />
                <Route path='/register' element={<RegisteScreen />} />
                <Route path='/Home' element={<Home />} />
                <Route path='*' element={<NotfoundScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes