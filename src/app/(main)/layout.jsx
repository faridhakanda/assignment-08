import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            
            {children}
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;