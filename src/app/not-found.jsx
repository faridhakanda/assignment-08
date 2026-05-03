import Link from 'next/link';
import React from 'react';

import Mistake404 from '../assets/404.png';
import Image from 'next/image';

const NotFound404 = () => {
    return (
        <div className='flex flex-col mx-auto justify-center items-center my-auto'>
            <h2 className='text-xl md:text-3xl text-red-500'>The Page is not found!</h2>
            <Image src={Mistake404} alt="404 image" width={100} height={100} />
            <Link className='btn btn-primary my-2' href="/">Go to DashBoard</Link>
        </div>
    );
};

export default NotFound404;