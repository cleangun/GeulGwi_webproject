import React from 'react';
import '../../../css/LoginForm.css'

const LoginForm = () => {
    return (
        <div className="LoginForm">
                <div className="LeftContainer">
                    <div className="TitleContainer">
                        <h1>글 귀</h1>
                        <h5>당신의 따뜻한 말을 담다</h5>
                    </div>
                </div>
                <div className="RightContainer">
                    {/* Test */}
                    <form className="FormContentManage">
                        <input className='loginFormInput' type='text' placeholder='당신의 아이디 입력'></input>
                        <input className='loginFormInput' type='password' placeholder='비밀번호 입력'></input><br/>
                        <input className='loginFormButton' type='submit' value="LOGIN"/>
                    </form>
                    
                </div>
            </div>
    );
};

export default LoginForm;