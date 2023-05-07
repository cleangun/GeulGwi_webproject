import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
// component Import!
import Header from './../common/header/Header';
import LeftNavbar from './../common/left_nav/LeftNavbar';

// src Import!
import path from 'Img/back_gradient.jpg';

const Home = () => {
    const [isLogged, setIsLogged] = useState(true)
    return (
        <div style={{height : "1500px"}}>
            { isLogged?
            '' : <h1><Navigate to="/user" replace={true}/></h1>
                
            }
            <LeftNavbar />
            <HeadContainer style={{backgroundImage : `url(${path})`, backgroundPosition : "center" , backgroundRepeat : "no-repeat"}}>
                <Header />
                <RecomContainer >
                    {/* 추천글 타이틀 */}
                    <span className='Recom_Title'>금일의 추천 글</span>
                    {/* 추천글 Contents */}
                    <RecomContentsContainer >

                    </RecomContentsContainer>
                </RecomContainer>
            </HeadContainer>

        </div>
    );
};

// StyledComponent
const HeadContainer = styled.div`
    position : relative;
    top : 0%;
    width : 100%;
    height : 400px;
    
    /* background-image : url("img/back_gradient.jpg"); */
`
// 추천 Container들
const RecomContainer = styled.div`
    padding-top : 80px;
    width : 700px;
    height : 76%;
    background-color : rgba(255,255,255,0);
    border : 2px solid white;
    margin : 0 auto;
`
const RecomContentsContainer = styled.div`
    width : calc(100% - 3px);
    height : 150px;
    background-color : rgba(255,255,255,0);
    border : 2px solid white;
    border-radius : 12px;
`

export default Home;