import React from "react";
import '../../../css/Login.css'
import LoginForm from "./LoginForm";
import styled from "styled-components";


const Circle=styled.div`
    position: absolute;
    top: 50%;
    left: 25px;
    width : 25px;
    height : 25px;
    border-radius: 50%;
    background-color: white;

    &:before{
        content: "";
        background-color: white;
        border: 50%;
        position : absolute;
        left: 25px;
        top : 50%;
        opacity: 0;
        animation: wave 3s 0s infinite linear;
    }
    
    &:after{
        content: "";
        opacity: 0;
        animation : wave 3s 1.5s infinite linear;
    }

    @keyframes wave {
        0%{
            scale: 100%;
            opacity: 1;
        }
        100%{
            scale: 500%;
            opacity: 0;
        }
    }
`

const Login = () => {
    return (
        <div className="Login">
            <Circle>

            </Circle>
            <LoginForm/>
        </div>
        
    );
};

export default Login;