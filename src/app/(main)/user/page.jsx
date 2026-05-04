'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import Image from 'next/image';
import Avatar from '../../../assets/user.png'
import Link from 'next/link';
const UserProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    //console.log(user, "user details page!");
    if (isPending) {
        return <span className="flex mx-auto my-4 justify-center items-center loading loading-ring loading-xl"></span>
    }
    if (!session?.user) {
        return <p>Please log in to view this page.</p>
    }
    return (
        <div className='my-2 px-2 py-2'>
            
            <div className="card bg-base-100 w-full md:w-96 mx-auto shadow-sm border-1 border-purple-200">
                
                <div className="card-body">
                    <Image className='mx-auto' src={user.photo || Avatar} alt={user.name} width={48} height={48} />
                    <h2 className='text-xl md:text-3xl text-center'>{user.name}</h2>
                    <p className='text-center text-[#647489]'>{user.email}</p>
                    <Link className='btn btn-secondary mx-auto w-full' href='/update-userInfo'>Update Profile</Link>
                   <Link className='btn btn-primary mx-auto w-full' href="/">Go to DashBoard</Link>
                </div>
            </div>  
        </div>
    );
};

export default UserProfile;