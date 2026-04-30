'use client'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const LoginPage = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <h2>Login Page</h2>
            <div className='flex bg-slate-200 p-1 m-1'>
                <input 
                    type="text"
                    className='flex'
                    placeholder='Enter your email'
                />
                <input 
                    className='flex'
                    type={isShow ? "text": "password"}
                    placeholder='Enter your password'
                />
                <span className='cursor-pointer' onClick={() => setIsShow(!isShow)}>{isShow ? <FaEye /> : <FaEyeSlash />}</span>
                
            </div>
        </div>
    );
};

export default LoginPage;