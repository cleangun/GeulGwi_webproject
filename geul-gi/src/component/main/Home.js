import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
// component Import!
import Header from './../common/header/Header';
import LeftNavbar from './../common/left_nav/LeftNavbar';
// src Import!
import path from 'Img/back_gradient.jpg';


// StyledComponent
const HeadContainer = styled.div`
    position : relative;
    top : 0%;
    width : 100%;
    height : 500px;
    /* background-image : url("img/back_gradient.jpg"); */
`

const Home = () => {
    const [isLogged, setIsLogged] = useState(true)
    return (
        <div style={{height : "1500px"}}>
            <LeftNavbar />
            <HeadContainer style={{backgroundImage : `url(${path})`}}>
                <Header />
            </HeadContainer>
            { isLogged?
            console.log(path) : <h1><Navigate to="/user" replace={true}/></h1>
                
            }
            
        </div>
    );
};

export default Home;