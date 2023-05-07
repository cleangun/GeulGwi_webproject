import React from 'react';
import styled  from "styled-components";

// Header를 나중에 수정하기 위해서 Style된 Tag로 만들어둠
const Container = styled.div`
    width : 100%;
    height : 70px;
    background-color: rgba(255, 255, 255, 0);
`
const TextContainer = styled.div`
    width : 95%;
    height: 100%;
    margin : 0 auto;
    
    color : white;
    font-size: x-large;
    text-align: center;
    line-height: 70px;
`
const Header = () => {
    return (
        <Container>
            <TextContainer>
                글 귀
            </TextContainer>
        </Container>
    );
};

export default Header;