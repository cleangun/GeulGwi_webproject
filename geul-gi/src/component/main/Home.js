import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
// component Import!
import Header from './../common/header/Header';
import LeftNavbar from './../common/left_nav/LeftNavbar';

// src Import!
import path from 'img/back_gradient.jpg';

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
                    <RecomTitle>금일의 추천 글</RecomTitle>
                    {/* 추천글 Contents */}
                    <RecomContentsContainer >
                        <RecomContents_HeadContainer >
                            
                        </RecomContents_HeadContainer>


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
    height : 480px;
    
    /* background-image : url("i-mg/back_gradient.jpg"); */
`
const RecomTitle = styled.span`
    display : inline-block;
    color : white;
    font-size : 17px;
    font-weight : bold;
    padding-bottom : 10px;
    
`

// 추천 Container들
const RecomContainer = styled.div`
    padding-top : 80px;
    width : 700px;
    height : 76%;
    background-color : rgba(255,255,255,0);
    margin : 0 auto;

`
const RecomContentsContainer = styled.div`
    width : calc(100% - 3px);
    height : 250px;
    background-color : rgba(255,255,255,0);
    border : 2px solid white;
    border-radius : 12px;
    overflow: hidden;
`
const RecomContents_HeadContainer = styled.div`
    position : relative;
    top : 0;
    left : 0;
    width : 100%;
    height : 35px;
    background-color : white;
`

export default Home;