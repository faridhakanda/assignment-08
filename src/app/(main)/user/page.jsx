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
        return <span className="flex mx-auto my-auto justify-center items-center loading loading-ring loading-xl"></span>
    }
    if (!session?.user) {
        return <p>Please log in to view this page.</p>
    }
    return (
        <div className='my-2 px-2 py-2'>
            {/* <h2>User profile</h2>
            <div>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            
            </div> */}
            <div className="card bg-base-100 w-full md:w-96 mx-auto shadow-sm border-1 border-purple-200">
                
                <div className="card-body">
                    <Image className='mx-auto' src={Avatar} alt={user.name} width={48} height={48} />
                    <h2 className='text-xl md:text-3xl text-center'>{user.name}</h2>
                    <p className='text-center text-[#647489]'>{user.email}</p>
                   <Link className='btn btn-primary mx-auto' href="/">Go to DashBoard</Link>
                </div>
            </div>  
        </div>
    );
};

export default UserProfile;