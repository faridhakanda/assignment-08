import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#001F3D] text-[#FFFFFF]'>
            
            
            <div className='container grid grid-cols-1 md:grid-cols-3 mx-auto my-4 px-2 pt-8 text-[#000000]'>
                
                <div className='mx-auto px-4 py-2 w-full text-center'>
                    <h2 className="font-bold text-[#FFFFFF] text-lg text-center md:text-start" >
                        <span className="text-2xl text-orange-400">Q</span>urabani
                        <span className="text-2xl text-pink-400">A</span>nimals
                    </h2>
                    <p className='text-[#647489] py-2 text-justify text-[14px]'>Qurbani Hat is one of the leading animals hat upcoming eid-ul-azha. We are providing home delivery services for our valuable customer who are not want to facing over crowding in animal hat.</p>
                </div>
                <div className='mx-auto px-4 py-2 text-center w-full '>
                    {/* <h2 className='text-center font-semibold text-xl text-[#FFFFFF] pb-2'>Contact</h2> */}
                    <h2 className="font-semibold text-[#FFFFFF] text-xl text-center pb-2" >
                        <span className="text-2xl text-green-400">C</span>ontact
                        <span className="text-2xl text-purple-400"> U</span>s
                    </h2>
                    <div className='text-[#647489]'>
                        <p>Phone: +880132839193xxx</p>
                        <p>Email: qurbani@hat.com</p>
                        <p>Address: Mymensingh, Bangladesh</p>
                    </div>
                    
                </div>
                <div className='mx-auto px-4 py-2 w-full text-center '>
                    {/* <h2 className='text-center font-semibold text-xl pb-2 text-[#FFFFFF]'>Social Media</h2> */}
                    <h2 className="font-semibold text-[#FFFFFF] text-xl text-center pb-2" >
                        <span className="text-2xl text-blue-400">S</span>ocial
                        <span className="text-2xl text-red-400"> M</span>edia
                    </h2>
                    <div className='flex mx-auto justify-center space-x-4 text-[#FFFFFF]'>
                        <FaYoutube />
                        
                        <FaFacebook />
                        <FaInstagram />
                        
                    </div>
                </div>

            </div>
            <p className='text-center text-[#647489] py-4'>&copy; QurbaniHat 2026. All Right Reserved.</p>
        </div>
    );
};

export default Footer;