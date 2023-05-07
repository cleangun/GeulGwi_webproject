import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    position : sticky;
    width : 80px;
    height : 500px;
    top : 20%;
    left : 0px;
    background-color: white;
    box-shadow : 3px 3px 8px 0px grey;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    
    z-index: 1;
`

const LeftNavbar = () => {
    return (
        <NavBar />
    );
};

export default LeftNavbar;