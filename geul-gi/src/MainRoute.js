import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import User from './Routes/user/User';
import Main from './Routes/main/Main';
import Home from './component/main/Home';
const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/user' element={<User />}></Route>
                <Route path='/main/*' element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;