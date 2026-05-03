'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AnimalSort = ({ allAnimals }) => {
    const animals = allAnimals;
    //console.log(animals, "animlas");

    const allAnimalSort = [...animals].sort((a, b) => a.price - b.price);
    const [isSort, setIsSort] = useState(true);
    return (
        <div>
            <h2 className="font-bold text-xl md:text-3xl my-2 text-center">All Animals in the Upcoming Qurbani Hat.</h2>
            
            <div className='mx-auto flex'>
                <button onClick={() => setIsSort(!isSort)} className='btn btn-primary mx-auto'>Sort by Price</button>
            </div>
            


            <div className=" -mt-48 py-2 md:mt-0 lg:mt-0 mx-auto justify-center items-center">
            
            
            {/* Card for animals   */}
                {isSort ? 
                    <div className=" px-2 py-2 mx-auto justify-center space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {animals.map(animal => 
                            <div key={animal.id} className="card w-full md:w-84 lg:w-90 bg-slate-50 border-1 border-purple-200 shadow-sm px-1 py-1  mx-auto my-2 space-y-4">
                                <figure className="">
                                    <Image src={animal.image} alt="image" width={400} height={200} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-xl">{animal.name}</h2>
                                    <p>Category: {animal.category}</p>
                                    <p>Type: {animal.type}</p>
                                    <p>Price: {animal.price}</p>
                                    <p className="text-[#647489] text-[14px]">{animal.description}</p>
                                    <div className="card-actions justify-end">
                                    
                                    <button className="btn btn-primary">
                                        <Link href={`/details/${animal.id}`}>See details...</Link>
                                    </button>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>
                    : 
                    <div className=" px-2 py-2 mx-auto justify-center space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {allAnimalSort.map(animal => 
                            <div key={animal.id} className="card w-full md:w-84 lg:w-90 bg-slate-50 border-1 border-purple-200 shadow-sm px-1 py-1  mx-auto my-2 space-y-4">
                                <figure className="">
                                    <Image src={animal.image} alt="image" width={400} height={200} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-xl">{animal.name}</h2>
                                    <p>Category: {animal.category}</p>
                                    <p>Type: {animal.type}</p>
                                    <p>Price: {animal.price}</p>
                                    <p className="text-[#647489] text-[14px]">{animal.description}</p>
                                    <div className="card-actions justify-end">
                                    
                                    <button className="btn btn-primary">
                                        <Link href={`/details/${animal.id}`}>See details...</Link>
                                    </button>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>
                }
                
            </div>
        </div>
    );
};

export default AnimalSort;