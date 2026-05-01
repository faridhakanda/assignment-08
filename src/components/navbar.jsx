'use client'
import React, { useState } from 'react';
import NavLink from './navlink';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from 'react-icons/rx';
const Navbar = () => {
    const mobile = false;
    const [isShow, setIsShow] = useState(true);
    return (
        <div>
            
            <div className='hidden md:flex md:visible space-x-4 mx-auto justify-center'>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/notfound">NotFound</NavLink>
                {mobile ? <NavLink href="/myprofile">MyProfile</NavLink> : <NavLink href="/logout">Logout</NavLink>}
            </div>
            <div className='visible md:hidden'>
                <div className='bg-slate-50 flex justify-between items-center p-2 m-1 shadow-sm'>
                    <h2>Mobile Navbar</h2>
                    <div
                        onClick={() => setIsShow(!isShow)}
                    >
                        {isShow ? <IoIosMenu /> : <RxCross1 />}
                        
                    </div>
                </div>
                {!isShow && 
                    <div className='w-64 opacity-100 z-100 px-4 py-4 m-1 bg-slate-50 justify-start'>
                        <div onClick={() => setIsShow(true)}>
                            <NavLink  className="py-1"  href="/">Home</NavLink>
                        </div>
                        <div onClick={() => setIsShow(true)}>
                            <NavLink  className="py-1" href="/login">Login</NavLink>
                        </div>
                        <div onClick={() => setIsShow(true)}>
                            <NavLink  className="py-1" href="/register">Register</NavLink>
                        </div>
                        <div onClick={() => setIsShow(true)}>
                            <NavLink  className="py-1" href="/notfound">NotFound</NavLink>
                        </div>
                       
                        <div onClick={() => setIsShow(true)}>
                            {mobile ? <NavLink  href="/myprofile">MyProfile</NavLink> : <NavLink href="/logout">Logout</NavLink>}
                        </div>
                        
                       
                    </div>
                }
            </div>
            
            
        </div>
        
    );
};

export default Navbar;
