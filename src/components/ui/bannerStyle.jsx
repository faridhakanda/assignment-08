'use client'
import React from 'react';
import 'animate.css';
import Goat from '../../assets/goat.png'
import GoatBg from '../../assets/goatbg.png'
import Cow from '../../assets/cow.png'
import Camel from '../../assets/camel.png'
import Image from 'next/image';
const BannerStyle = () => {
    return (
        <div 
            style={{
                overflow: 'hidden',
            }}
            className=' h-48  md:h-64 lg:h-96 mx-auto my-2 px-2 rounded-md'
        >
            <div className=' bg-yellow-400 rounded-md container px-2 w-full  h-48 md:h-64 lg:h-96 mx-auto text-center justify-center '>
                <h2 className='animate__animated animate__heartBeat animate__infinite qurbaniTitle font-bold  mx-auto justify-center items-center text-xl md:text-3xl lg:text-5xl text-[#FFFFFF] text-center py-8 '>Welcome to Upcoming QurbaniHat</h2>
                
                <div>
                    <h2 className='z-10 relative animate__animated animate__backInLeft qurbaniTitle animate__infinite text-center text-[#647489] text-xl md:text-2xl'>Healthy and Anit-Biotic free animal</h2>
                    <h2 className='z-10 relative animate__animated animate__backInRight qurbaniTitle animate__infinite text-center text-xl md:text-2xl text-[#647489]'>Choose your desire animal easily</h2>
                    <h2 className='z-10 relative animate__animated animate__backInUp qurbaniTitle animate__infinite text-center text-xl md:text-2xl text-[#647489]'>Purchase your choosen animal reasonable budget</h2>
                    <div className=' justfiy-between mx-auto items-center  grid grid-cols-3 '>
                        <Image className='z-1  -mt-32 md:-mt-14 lg:-mt-3 mx-auto animate__animated animate__backInLeft qurbaniTitle' src={GoatBg} alt="goat" width={150} height={150} />
                        <Image className='z-1  -mt-26 md:-mt-12 lg:mt-18 mx-auto animate__animated animate__backInRight qurbaniTitle' src={Camel} alt="goat" width={200} height={200} />
                        <Image className='z-1 -mt-26 md:-mt-12 lg:mt-18 mx-auto animate__animated animate__backInRight qurbaniTitle' src={Cow} alt="goat" width={200} height={200} />
                    
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default BannerStyle;





