'use client'
import React, { useState } from 'react';
import NavLink from './navlink';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from 'react-icons/rx';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
const Navbar = () => {
    
    const [isShow, setIsShow] = useState(true);
    const { data: session, isPending} = authClient.useSession();
    console.log(session, "session");
    const user = session?.user;
    console.log(user, "Farid at qurabanihat!");
    return (
        <div>
            {/* Desktop Navbar */}
            <div className='hidden md:flex md:visible space-x-4 mx-auto items-center justify-center'>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/details/1">Details</NavLink>
                
                {isPending ? <h2>Loading...</h2> : user ? 
                    <div className='flex items-center space-x-2'>
                        <NavLink href="/userProfile">{user.name}</NavLink> 
                        <button onClick={async() => await authClient.signOut()} className='btn btn-primary'>
                            <Link href="/login">Logout</Link>
                        </button>
                        
                    </div> :
                    <div className='flex space-x-2'>
                        <NavLink href="/login">Login</NavLink>
                        <NavLink href="/register">Register</NavLink>
                    </div>
                }
            </div>

            {/* Mobile Navbar */}
            <div className='visible md:hidden'>
                <div className='flex justify-between items-center  '>
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
                            <NavLink  className="py-1" href="/details/1">Details</NavLink>
                        </div>
                       
                        {isPending ? <h2>Loading...</h2> : user ? 
                            <div>
                                <NavLink href="/userProfile">{user.name}</NavLink> 
                                <button onClick={async() => await authClient.signOut()} className='btn btn-primary'>
                                    <Link href="/login">Logout</Link>
                                </button>
                                
                            </div> :
                            <div>
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </div>
                        }
                        
                       
                    </div>
                }
            </div>
            
            
        </div>
        
    );
};

export default Navbar;
