import React from 'react';
import styled, { withTheme } from 'styled-components';

import userIconPath from 'Img/icon/user.png'
import messageIconPath from 'Img/icon/message.png'
import bellIconPath from 'Img/icon/bell.png'

const LeftNavbar = () => {
    return (
        <NavBar>
            <ItemContainer>
                {console.log("userPath = "+userIconPath)}
                <Item styled={{backgroundImage : `url(${userIconPath})` , backgroundSize : `contain`}}>1</Item>
                <Item>2</Item>
                <Item>3</Item>
            </ItemContainer>
        </NavBar>
    );
};

// 왼쪽 네비게이션 전체 틀 ( Main Container )
const NavBar = styled.div`
    position : fixed;
    width : 100px;
    height : 100vh;
    top : 0%;
    left : 0px;
    background-color: white;
    box-shadow : 3px 3px 8px 0px grey;
    z-index: 1;
`

// Item 정렬을 위한 Container
const ItemContainer = styled.div`
    display : flex;
    width : 100%;
    height : 90%;
    padding-top : 10px;
    margin : 0 auto;
    flex-direction : column;
    align-items:center;
    border : 1px solid black;

    list-style : none;
`
// Item을 담음 (ItemContainer보다 하위)
const Item = styled.div`
    display : inline-block;
    width : 500px;
    height : 500px;
    margin : 5px;

    background-position : center;
    z-index : 2
`

export default LeftNavbar;