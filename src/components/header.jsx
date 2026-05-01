import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';

const Header = () => {
    return (
        <div className='bg-slate-200 p-2 items-center shadow-sm space-x-2'>
            
            <Navbar />
        </div>
    );
};

export default Header;