import React from 'react';
import styled, { withTheme } from 'styled-components';

// import React Icons
import { FiUser } from "react-icons/fi"; // user icon
import { MdOutlineEmail } from "react-icons/md";
import { BiBell } from "react-icons/bi";


const LeftNavbar = () => {
    return (
        <NavBar>
            <ItemContainer>
                <Item><FiUser size={"25px"} /></Item>
                <Item><MdOutlineEmail size={"25px"} /></Item>
                <Item><BiBell size={"25px"} /></Item>
            </ItemContainer>
        </NavBar>
    );
};

// 왼쪽 네비게이션 전체 틀 ( Main Container )
const NavBar = styled.div`
    position : fixed;
    width : 70px;
    height : 50vh;
    top : 25%;
    left : 0px;
    background-color: rgba(255,255,255,1);
    border-top-right-radius: 8px ;
    border-bottom-right-radius: 8px ;
    border : 1px solid #FFF7F7;
    /* box-shadow : 2px 2px 15px 5px #D2D2D2; */
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
`
// Item을 담음 (ItemContainer보다 하위)
const Item = styled.div`
    display : inline-block;
    width : 45px;
    height : 45px;
    margin : 5px;
`

export default LeftNavbar;