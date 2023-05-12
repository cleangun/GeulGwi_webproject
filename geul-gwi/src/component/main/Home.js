import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
// component Import!
import Header from './../common/header/Header';
import LeftNavbar from '../common/leftNav/LeftNavbar';
import HomePost from 'component/main/HomePost';
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
                    <RecomTitle style={{fontFamily : "Nanum Square Round"}}>금일의 추천 글</RecomTitle>
                    {/* 추천글 Contents */}
                    <RecomContentsContainer >
                        {/* 나중에 Component화 하여야 할 부분 */}
                        <RecomContents_HeadContainer >
                            
                        </RecomContents_HeadContainer>

                        {/* 콘텐츠 넣어야함 ( 나중에 컴포넌트 화 할 것 = 객체처럼 써야함) */}

                    </RecomContentsContainer>
                </RecomContainer>
            </HeadContainer>
            <MainContentsContainer>

                {/* 게시글 2개 넣어보기 ( 정적이라 동적으로 바꾸어 주어야함 )
                => 예를 들어) 기본적으로 최소 5개 콘텐츠를 보여주고, 스크롤 할 때마다 추가하는 식으로
                => 아마 보이지 않는 게시글들은 자원을 효율적으로 사용하기 위해 활성화 되지 않다가 
                => 다시 이전꺼를 보기 위해 활성화 시켜주는 식으로 */}
                <HomePost/>
                <HomePost/>
            </MainContentsContainer>

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
    font-size : 18px;
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

// 메인 게시글 콘테이너
const MainContentsContainer = styled.div`
    display : flex;
    width : 800px;
    height : auto;
    min-height : 1000px;
    
    margin : 0 auto;
    flex-direction : column;
    flex-wrap: no-wrap;
    align-items : center;

    border : 1px solid black;
`

export default Home;