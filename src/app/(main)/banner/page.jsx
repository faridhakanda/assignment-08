// 'use client'
import Image from 'next/image';
import React from 'react';
import Goat from '../../../assets/goat.png'
import BannerStyle from '@/components/ui/bannerStyle';
// import 'animate.css'

const BannerPage = () => {
    return (
        // <div className=' w-full  h-96 mx-auto my-2 px-2 py-2 rounded-md'>
            
        //     <div className=' bg-yellow-500 rounded-md container px-2 h-48 md:h-64 lg:h-96 mx-auto  justify-center '>
        //         <h2 className='mx-auto justify-center -mt-1 text-xl md:text-3xl text-orange-500 text-center py-8'>কুরবানির হাটে আপনাকে স্বাগতম। </h2>
               
                
        //         <BannerStyle />
            
        //     </div>
            

            
        // </div>
        <div className=''>
            <BannerStyle />
        </div>
    );
};

export default BannerPage;