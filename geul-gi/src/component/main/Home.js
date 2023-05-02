import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
    const [isLogged, setIsLogged] = useState(false)
    return (
        <div>
            Here is the Home
            { isLogged?
            '로그인페이지' : <h1><Navigate to="/user" replace={true}/></h1>
                
            }
            
        </div>
    );
};

export default Home;