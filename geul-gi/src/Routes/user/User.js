import React from "react";
import {Routes, Route} from 'react-router-dom';

import Login from "../../component/user/login/Login";

const User = () =>{
    return (
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/login/*" element={<Login />}></Route>
            </Routes>
    );
};
export default User;
