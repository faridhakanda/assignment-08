'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

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
        <div>
            <h2>User profile</h2>
            <div>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            
            </div>
        </div>
    );
};

export default UserProfile;