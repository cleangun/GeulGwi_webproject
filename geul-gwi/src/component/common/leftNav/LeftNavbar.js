import {React , useState} from 'react';
import styled from 'styled-components';
// css import
import path from 'css/common/leftNav/leftNav.css'

// import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as SolidUser, faEnvelope as SolidEnvelope , faBell as SolidBell} from '@fortawesome/free-solid-svg-icons'
import { faUser as RegularUser, faEnvelope as RegularEnvelope , faBell as RegularBell} from '@fortawesome/free-regular-svg-icons'


// State
const LeftNavbar = () => {
    const [userHover, setUserHover] = useState(true);
    const [envelopeHover, setEnvelopeHover] = useState(true);
    const [bellHover, setBellHover] = useState(true);
    
    
    const setHover = (stateName, isTrue) => {
        switch (stateName){
            case "user":
                setUserHover(isTrue);
                break;
            case "msg":
                setEnvelopeHover(isTrue);
                break;
            case "bell":
                setBellHover(isTrue);
                break;
            default:
                break;
        }
            
    };

    return (

        <NavBar>
            <ItemContainer>
                <Item 
                onMouseOver={() => setHover("user",false)}
                onMouseOut={() => setHover("user",true)}>
                    <FontAwesomeIcon size="xl" color={'#444444'} title='계정' icon={userHover ? RegularUser : SolidUser} />
                </Item>
                <Item
                onMouseOver={() => setHover("msg",false)}
                onMouseOut={() => setHover("msg",true)}>
                    <FontAwesomeIcon size="xl" color={'#444444'} title='메시지' icon={envelopeHover ? RegularEnvelope : SolidEnvelope}/>
                </Item>
                <Item
                onMouseOver={() => setHover("bell",false)}
                onMouseOut={() => setHover("bell",true)}>
                    <FontAwesomeIcon size="xl" color={'#444444'} title='메시지' icon={bellHover ? RegularBell : SolidBell}/>
                </Item>
                

                
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
    border : 1px solid #C6C6C6;
    /* box-shadow : 3px 3px 3px 3px grey; */
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
    display : inline-flex;
    width : 45px;
    height : 45px;
    margin : 10px;
    justify-content: center;
    align-items: center;
    cursor : pointer;

`

export default LeftNavbar;