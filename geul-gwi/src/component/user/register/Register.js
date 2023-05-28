import { React , useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// css import
import 'css/user/Register.css'

// React-icons import

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Register = () => {
    // State값들
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [NickName, setNickName] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Age, setAge] = useState("");
    const [Gender, setGender] = useState("");

    // 감성, 위로, 동기부여, 시, 소설, 깨달음, 현실직시, 자연, 명언, 사랑, 
    const [Emotion, setEmotion] = useState(false);     // 감성
    const [Consolation, setConsolation] = useState(false);  // 위로
    const [Motivate, setMotivate] = useState(false);

    
    // onChangeHandler
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }
    const onNickNameHandler = (event) => {
        setNickName(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onAgeHandler = (event) => {
        setAge(event.currentTarget.value);
    }
    const onGenderHandler = (event) => {
        setGender(event.currentTarget.value);
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    // 회원가입 Submit
    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log("axios shoot");

        const data = {
            userId : Id,
            userPassword : Password,
            userNickname : NickName,
            userName : Name,
            userAge : Age,
            userGender : Gender,
            userEmail : Email
        }
        console.log("data : "+data.userId);
        axios.post("http://172.16.113.198:8080/users/join",data)
            .then((response) => {
                console.log("response => ");
                console.log(response);
                console.log(response.data);
                
            })
            .catch(function(error){
                console.log(error)
            });
    }
    
    // Next Button Click
    const [ShowBox, setShowBox] = useState(true) // true => leftbox , false => rightbox
    const ToggleMove = () => {
        console.log("ShowBox : " + ShowBox);
        setShowBox(!ShowBox);
    }


    return (
        <RegiContainer>
            <BackButton onClick={ToggleMove}><MdOutlineArrowBackIosNew size={'20px'}/></BackButton>
            <PrivacyContainer>
                <form style={{display: 'flex' , flexDirection : 'column', width  : '400px', height : '100%', margin : '0 auto'}} onSubmit={onSubmitHandler}>
                    <h3 className='title'>회원가입</h3>
                    <h5 className='sub_title'>회원정보를 입력해주세요</h5>
                    <label>아이디</label>
                    <input type='text' value={Id} onChange={onIdHandler}/>
                    <label>비밀번호</label>
                    <input type='password' value={Password} onChange={onPasswordHandler}/>
                    <label>비밀번호 확인</label>
                    <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    <label>닉네임</label>
                    <input type='text' value={NickName} onChange={onNickNameHandler}/>
                    <label>이름</label>
                    <input type='text' value={Name} onChange={onNameHandler}/>
                    <label>이메일</label>
                    <input type='email' value={Email} onChange={onEmailHandler}/>
                    <label>나이</label>
                    <input type='number' value={Age} onChange={onAgeHandler}/>
                    <label>성별</label>
                    <input type='select' value={Gender} onChange={onGenderHandler}/>

                    <label>태그</label>
                    <NextButton onClick={ToggleMove}>
                        다음
                    </NextButton>

                </form>
            </PrivacyContainer>
            <TagSelectContainer>
                <form style={{display: 'flex' , flexDirection : 
                'column', width  : '400px', height : '100%', margin : '0 auto'}} onSubmit={onSubmitHandler}>
                    <h3 className='title'>태그 선택</h3>
                    <h5 className='sub_title'>선호하시는 태그를 선택하시면 됩니다.</h5>
                    <label>아이디</label>
                    <input type='text' value={Id} onChange={onIdHandler}/>
                    <label>비밀번호</label>
                    <input type='password' value={Password} onChange={onPasswordHandler}/>
                    <label>비밀번호 확인</label>
                    <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    <label>닉네임</label>
                    <input type='text' value={NickName} onChange={onNickNameHandler}/>
                    <label>이름</label>
                    <input type='text' value={Name} onChange={onNameHandler}/>
                    <label>이메일</label>
                    <input type='email' value={Email} onChange={onEmailHandler}/>
                    <label>나이</label>
                    <input type='number' value={Age} onChange={onAgeHandler}/>
                    <label>성별</label>
                    <input type='select' value={Gender} onChange={onGenderHandler}/>


                    <SubmitButton onClick={onSubmitHandler}>
                        회원가입
                    </SubmitButton>
                </form>
            </TagSelectContainer>
        </RegiContainer>
    );
};

const RegiContainer = styled.div`
    position : relative;
    display : flex;
    width : 600px;
    height : auto;
    min-height : 870px;
    justify-content: center;
    /* overflow : hidden; */
    margin : 0 auto;
    margin-top : calc((100vh - 870px)/2);

    border : 1px solid grey;
    border-radius : 8px;
`
const PrivacyContainer = styled.div`
    position : absolute;
    top : 5%;
    left : ${ShowBox => ShowBox ? '100%' : '-100%'};
    width : 100%;
    height : auto;
    min-height : 70%;
    
`
const TagSelectContainer = styled(PrivacyContainer)`
    background-color : pink;
    left : ${ShowBox => ShowBox ? '100%' : '0%'};
`
const NextButton = styled.button`
    width : 250px;
    height : 40px;
    background-color : #ffc2b3;
    border-radius : 12px;
    border : none;
    margin : 0 auto;
    cursor : pointer;
    &:hover{
        border : 2px solid black;
        background-color : white;
    }
`
const SubmitButton = styled(NextButton)`
    
`
const BackButton = styled.button`
    position : absolute;
    top : 20px;
    left : 20px;
    display : flex;
    width : 50px;
    height : 50px;
    justify-content : center;
    align-items: center;
    border : none;
    background-color : white;
    cursor : pointer;
`



export default Register;