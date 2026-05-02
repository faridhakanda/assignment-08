import Header from '@/components/header';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <ToastContainer />
            
        </div>
    );
};

export default Layout;