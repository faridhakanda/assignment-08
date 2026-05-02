import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';

const Header = () => {
    return (
        <div className='bg-slate-50 p-2 md:p-3 items-center shadow-sm space-x-2'>
            
            <Navbar />
        </div>
    );
};

export default Header;