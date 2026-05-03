import React from 'react';

const Loading = () => {
    return (
        <div className='flex flex-col mx-auto justify-center items-center my-auto'>
            <span className="loading loading-spinner loading-xl"></span>
            <h2 className='btn btn-primary my-2'>Processing...</h2>
        </div>
    );
};

export default Loading;