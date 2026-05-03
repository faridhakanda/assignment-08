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
                    <h2 className="card-title">{animal.name}</h2>
                    <Image className='mx-auto justify-center' src={animal.image} alt={animal.name} width={400} height={200} />
                    
                    <p>{animal.price}</p>
                    <p>{animal.description}</p>
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