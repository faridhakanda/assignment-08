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
        <div>
            <h2>Details Page for the ID! ${id}!</h2>
            <div>
                <h2>{animal.name}</h2>
                <h3>{animal.price}</h3>
                <p>{animal.description}</p>
                <button className='btn btn-primary'>
                    <Link href="/">Go to all...</Link>
                </button>
            </div>
        </div>
    );
};

export default DetailsPage;