import { getAnimalDetails } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const generateMetadata = async({ params }) => {
    const { id } = await params;
    const animalDetails = await getAnimalDetails(id);
    return {
        title: animalDetails.name,
        description: animalDetails.description
    };
}

const DetailsPage = async ({params}) => {
    const { id } = await params;

    const animal = await getAnimalDetails(id);
    console.log(animal, "details for animal");
    return (
        <div className='px-2 my-3'>
           
            


            <div className="card bg-base-100 w-fit mx-auto shadow-sm">
                <figure>
                    {/* <Image src="/" alt="image" width={20} height={400} /> */}
                </figure>
                <div className="card-body">
                    
                    <Image className='mx-auto justify-center' src={animal.image} alt={animal.name} width={400} height={200} />
                    <h2 className="card-title font-bold text-xl md:text-2xl">{animal.name}</h2>
                    <p className='text-[#647489]'>Category: <span className='font-bold text-yellow-400'>{animal.category}</span></p>
                    <p className='text-[#647489]'>Type of Animal: {animal.type}</p>
                    <p className='text-[#647489]'>Breed: {animal.breed}</p>
                    <p className='text-[#647489]'>Price: {animal.price}</p>
                    <p className='text-[#647489]'>Weight: {animal.weight}</p>
                    <p className='text-[#647489]'>Age: {animal.age}</p>
                    <p className='font-medium text-lg'>Location: {animal.location}</p>
                    <p className='text-[#647489]'>{animal.description}</p>
                    <div className="card-actions justify-between my-2">
                        
                        <button className='btn btn-info'>
                            <Link href='/booking'>Booking Now</Link>
                        </button>
                        <button className="btn btn-primary">
                            <Link href="/">DashBoard</Link>
                        </button>
                        
                    
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default DetailsPage;