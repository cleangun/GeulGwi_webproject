import { React, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// Axios Address Context
import { AxiosAddrContext } from 'contextStore/AxiosAddress';
// css import
import 'css/user/Register.css'

// React-icons import
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom/';
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
    // navigate
    const navigate = useNavigate();
    
    // Axios Address
    const [AxiosAddress,SetAxiosAddress] = useState(useContext(AxiosAddrContext).axiosAddr);
    // RequestMappings
    const JoinRequest = 'users/join';
    
    // State값들
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [NickName, setNickName] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Age, setAge] = useState("");
    const [Gender, setGender] = useState("Male");
    
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
    const onGenderHandler = () => {
        let genderSelect = document.getElementById('gender_input');
        setGender(genderSelect.options[genderSelect.selectedIndex].value);
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    // 회원가입 Submit
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("axios addr : "+ AxiosAddress + JoinRequest);
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
        axios.post(AxiosAddress+JoinRequest, data)
            .then((response) => {
                console.log(response.data);
                navigate('/user/login');
            })
            .catch(function(error){
                console.log(error);
                alert("예기치 못한 오류가 발생하였습니다.");        // 나중에 오류 처리 해줄 것
                navigate('/user/register');
            });
    }
    
    // 감성, 위로, 동기부여, 시, 소설, 깨달음, 현실직시, 자연, 명언, 사랑, 
    const [Emotion, setEmotion] = useState(false);     // 감성
    const [Consolation, setConsolation] = useState(false);  // 위로
    const [Motivate, setMotivate] = useState(false);

    
    // 다음버튼 Click
    // const [ShowBox, setShowBox] = useState(true) // true => leftbox , false => rightbox
    const [Box1_showHide, setBox1Show] = useState("box1Show");
    const [Box2_showHide, setBox2Show] = useState("box2Hide");
    const ToggleMove = () => {
        // console.log("ShowBox : " + ShowBox);
        // setShowBox(!ShowBox);

        console.log('Box1 : '+ Box1_showHide);
        console.log('Box2 : '+ Box2_showHide);
        if (Box1_showHide == 'box1Show'){
            console.log('Box2 show turn')
            setBox1Show('box1Hide');
            setBox2Show('box2Show');
        }
        else{
            console.log('Box1 show turn')
            setBox1Show('box1Show');
            setBox2Show('box2Hide');
        }
    }

    // 아이디 유효성 검사
    const CheckIdExist = () => {
        let result = false;

        // Axios 연결

        // axios.post(AxiosAddress,{userid : Id})
        // .then((response) => {
        //     console.log("CheckId Axios Success");
        //     result = response
        // })
        // .catch((error) => {
        //     console.log(error);
        //     alert("IdCheck Axios Error");
        // })
        let CheckText = document.getElementById("idCheck");
        if (result == true){
            CheckText.innerHTML = "사용 가능합니다";
            CheckText.style.color = "green";
        }
        else{
            CheckText.innerHTML = "이미 존재합니다";
            CheckText.style.color = "red";
        }
    }

    // 비밀번호 패턴 체크
    const CheckPwdRule = () => {
        // let result = true;
        // let CheckText = document.getElementById("pwdCheck");
        // let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
        // if (Password.search(/\s/) != -1){
        //     CheckText.innerHTML = "공백이 포함되어있습니다."
        //     CheckText.style.color  = "red";
        // }
        // else if(){

        // }

        // if (result == true){
        //     CheckText.innerHTML = "사용 가능합니다";
        //     CheckText.style.color = "green";
        // }
        // else{
        //     CheckText.innerHTML = "이미 존재합니다";
        //     CheckText.style.color = "red";
        // }
    }
    // 비밀번호 Confirm 확인
    const CheckPwdConfirm = () => {
        let pwdConfirm = document.getElementById("pwdConfirm");
        if (Password == ConfirmPassword){
            pwdConfirm.innerHTML = "비밀번호가 일치합니다";
            pwdConfirm.style.color = "green";
        }
        else{
            pwdConfirm.innerHTML = "비밀번호가 일치하지 않습니다";
            pwdConfirm.style.color = "red";
        }
    }




    return (
        <RegiContainer>
            <PrivacyContainer className={Box1_showHide}>
                <form style={{display: 'flex' , flexDirection : 'column', width  : '400px', height : '100%', margin : '0 auto'}} onSubmit={onSubmitHandler}>
                    <h3 className='title'>회원가입</h3>
                    <h5 className='sub_title'>회원정보를 입력해주세요</h5>
                    <label>아이디</label>
                    <input type='text' value={Id} onChange={onIdHandler} onMouseOut={CheckIdExist} placeholder='아이디를 입력'/>
                    <ShowText id='idCheck'></ShowText>

                    <label>비밀번호</label>
                    <input type='password' value={Password} onChange={onPasswordHandler} placeholder='대문자 1개, 특수문자 1개이상 포함해주세요'/>
                    <ShowText id='pwdCheck'></ShowText>
                    
                    <label>비밀번호 확인</label>
                    <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder='비밀번호 확인'
                    onMouseOut={CheckPwdConfirm}
                    />
                    <ShowText id='pwdConfirm'></ShowText>

                    <label>닉네임</label>
                    <input type='text' value={NickName} onChange={onNickNameHandler} placeholder='닉네임 입력'/>
                    <ShowText id='nicknameCheck'></ShowText>

                    <label>이름</label>
                    <input type='text' value={Name} onChange={onNameHandler} placeholder='이름 입력'/>
                    <ShowText></ShowText>

                    <label>나이</label>
                    <input type='number' value={Age} onChange={onAgeHandler} placeholder='나이 입력'/>
                    <ShowText></ShowText>

                    <label>성별</label>
                    <select id='gender_input' onChange={onGenderHandler}>
                        <option value={'Male'}>남성</option>
                        <option value={'FeMale'}>여성</option>
                    </select>
                    <ShowText></ShowText>

                    <label>이메일</label>
                    <input type='email' value={Email} onChange={onEmailHandler} placeholder='이메일 입력'/>
                    <ShowText></ShowText>

                    <NextButton onClick={ToggleMove}>
                        다음
                    </NextButton>

                </form>
            </PrivacyContainer>
            <TagSelectContainer className={Box2_showHide}>
                <BackButton onClick={ToggleMove}><MdOutlineArrowBackIosNew size={'20px'}/></BackButton>
                <form style={{display: 'flex' , flexDirection : 
                'column', width  : '400px', height : '100%', margin : '0 auto'}} onSubmit={onSubmitHandler}>
                    <h3 className='title'>태그 선택</h3>
                    <h5 className='sub_title'>선호하시는 태그를 선택하시면 됩니다.</h5>
                    


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
    height : 80%;
    justify-content: center;
    /* overflow: scroll; */
    overflow : scroll;
    overflow-x : hidden;
    margin : 0 auto;
    margin-top : calc((100vh - 870px)/2);

    border : 1px solid grey;
    border-radius : 8px;
    background-color : white;

    &::-webkit-scrollbar{
        border-radius : 10px;
        background-color : white;
    }
    &::-webkit-scrollbar-thumb{
        border-radius : 10px;
        background-color: pink;
    }
    &::-webkit-scrollbar-track{
        border-radius : 10px;
        background-color : grey;
    }
`
const PrivacyContainer = styled.div`
    position : absolute;
    top : 5%;
    /* left : ${ShowBox => ShowBox ? '0%' : '-100%'}; */
    /* left : 0%; */
    width : 100%;
    height : auto;
    min-height : 70%;
    
`
const TagSelectContainer = styled(PrivacyContainer)`
    /* left : ${ShowBox => ShowBox ? '100%' : '0%'}; */
    /* left : 100%; */
`
const NextButton = styled.button`
    width : 250px;
    height : 40px;
    background-color : #ffc2b3;
    border-radius : 12px;
    border : none;
    margin : 0 auto;
    margin-top : 15px;
    margin-bottom : 15px;
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
    top : 0px;
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

// 유효성 검사 결과 표시를 위한 Container
const ShowText = styled.div`
    display : inline-block;
    width : 100%;
    height : 30px;
    padding-left : 6px;
    padding-top : 2px;
    /* align-items: center; */
    text-align : right;
    font-size : 12px;
`





export default Register;