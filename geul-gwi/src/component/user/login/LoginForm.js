// 로그인 페이지 가운데 폼
import React, { useState } from 'react';
import '../../../css/LoginForm.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const LoginForm = () => {
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');

    const logAccount = (event) => {
        event.preventDefault()
        console.log("event = "+event);
        console.log("event.target = "+event.target);
        console.log("event.target.value = "+event.target.value);
        console.log("Id : "+Id);
        console.log("Password : "+Password);
    }

    return (
        <div className="LoginForm">
                <div className="LeftContainer">
                    <div className="TitleContainer">
                        <h1><Link to="/" style={{color : "black"}}>글 귀</Link></h1>
                        <h5>당신의 따뜻한 말을 담다</h5>
                    </div>
                </div>
                <div className="RightContainer">
                    {/* Test */}
                    <form className="FormContentManage" onSubmit={logAccount}>
                        <input className='loginFormInput' type='text' placeholder='당신의 아이디 입력' onChange={(e) => setId(e.target.value)}></input>
                        <input className='loginFormInput' type='password' placeholder='비밀번호 입력' onChange={(e) => setPassword(e.target.value)}></input><br/>
                        <input className='loginFormButton' type='submit' value="LOGIN" />
                    </form>
                    {/* 회원가입,  아이디찾기 , 비밀번호 찾기 */}
                    <div className='sub_Container'>
                        <SubSpan>아이디</SubSpan>
                        <SubSpan>비밀번호 찾기</SubSpan>
                        <SubSpan>회원가입</SubSpan>
                        
                        <SubSpan>
                            {/* <CheckBoxIcon src={process.env.PUBLIC_URL + '/icon/loginFormCss/no_checked.png'}></CheckBoxIcon> */}
                            <input type='checkbox'/>
                        </SubSpan>
                    </div>
                    
                </div>
            </div>
    );
};

const SubSpan=styled.span`
    display : inline-block;
    font-size : 8px;
    color : grey;
    cursor : pointer;
    padding : 0px 7px 0px 7px;
    &:hover{
        color : black;
        
    }

    input[type=checkBox]{
        display : none;
        border : 1px solid black;
    }
`
const CheckBoxIcon = styled.img`
    width : 15px;
    height : 15px;
    
    &:hover{
        content : url(${process.env.PUBLIC_URL + '/icon/loginFormCss/no_checked_color.png'})
    }
`

export default LoginForm;