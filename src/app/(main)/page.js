import { getAnimals } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Avatar from '../../assets/user.png'
import BannerPage from "./banner/page";
// const getAnimals = async () => {
//     const res = await fetch('https://assignment-08-dataset.onrender.com/animals');
//     const data = await res.json();
//     return data;
// }
export default async function Home() {
    

    const animals = await getAnimals();
    console.log('animals data: ', animals);
  return (
    <div className="container mx-auto justify-center items-center">
        <BannerPage />
        <div className="-mt-48 py-2 md:mt-0 lg:mt-0 mx-auto justify-center items-center">
            <h2>All Animals in the Upcoming Qurbani Hat.</h2>
            
            
            
            {/* Card for animals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto justify-center md:grid-cols-2 lg:grid-cols-3 px-2 ">
                {animals.map(animal => 
                    <div key={animal.id} className="card bg-base-100 w-full sm:w-full sm:m-2 md:w-84 lg:w-96 justify-center shadow-sm mx-auto my-2 px-2 py-2 gap-2 ">
                        <figure className="">
                            <Image src={animal.image} alt="image" width={400} height={200} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{animal.name}</h2>
                            <p>{animal.price}</p>
                            <p>{animal.description}</p>
                            <div className="card-actions justify-end">
                            
                            <button className="btn btn-primary">
                                <Link href={`/details/${animal.id}`}>See details...</Link>
                            </button>
                            </div>
                        </div>
                    </div>    
                )}
            </div>
        </div>
        
        
        
    </div>
  );
}
