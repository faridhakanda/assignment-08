import { getAnimalDetails } from '@/lib/data';
import Link from 'next/link';
import React from 'react';


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
        <div className='px-2'>
            <h2>Details Page for the ID! ${id}!</h2>
            {/* <div>
                <h2>{animal.name}</h2>
                <h3>{animal.price}</h3>
                <p>{animal.description}</p>
                <button className='btn btn-primary'>
                    <Link href="/">Go to all...</Link>
                </button>
            </div> */}


            <div className="card bg-base-100 w-fit mx-auto shadow-sm">
                <figure>
                    {/* <Image src="/" alt="image" width={20} height={400} /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{animal.name}</h2>
                    <p>{animal.price}</p>
                    <p>{animal.description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href="/">Go to all...</Link>
                    </button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default DetailsPage;