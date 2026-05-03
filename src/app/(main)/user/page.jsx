'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import Image from 'next/image';
import Avatar from '../../../assets/user.png'
const UserProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    //console.log(user, "user details page!");
    if (isPending) {
        return <span className="loading loading-ring loading-xl"></span>
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
                    {/* <Image className='mx-auto justify-center' src={animal.image} alt={animal.name} width={400} height={200} /> */}
                    {/* <h2 className="card-title font-bold text-xl md:text-2xl">{animal.name}</h2>
                    <p className='text-[#647489]'>Category: <span className='font-bold text-yellow-400'>{animal.category}</span></p>
                    <p className='text-[#647489]'>Type of Animal: {animal.type}</p>
                    <p className='text-[#647489]'>Breed: {animal.breed}</p>
                    <p className='text-[#647489]'>Price: {animal.price}</p>
                    <p className='text-[#647489]'>Weight: {animal.weight}</p>
                    <p className='text-[#647489]'>Age: {animal.age}</p>
                    <p className='font-medium text-lg'>Location: {animal.location}</p>
                    <p className='text-[#647489]'>{animal.description}</p> */}
                    {/* <div className="card-actions justify-between my-2">
                        
                        <button 
                            className='btn btn-info'
                            
                        >
                            <Link href="/booking">Booking Now</Link>
                        </button>
                        <button className="btn btn-primary">
                            <Link href="/">DashBoard</Link>
                        </button>
                        
                    
                    </div> */}
                </div>
            </div>  
        </div>
    );
};

export default UserProfile;