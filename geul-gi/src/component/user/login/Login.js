import React from "react";
import '../../../css/Login.css'
import LoginForm from "./LoginForm";
import styled from "styled-components";


const Circle=styled.div`
    position: absolute;
    top:50%;
    left: 25px;
    width : 25px;
    height : 25px;
    border-radius: 50%;
    background-color: white;
`



const Login = () => {
    return (
        <div className="Login">
            <Circle>

            </Circle>
            <div className="Circle"></div>
            <LoginForm/>
        </div>
        
    );
};

export default Login;