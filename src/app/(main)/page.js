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
        <div className=" -mt-48 py-2 md:mt-0 lg:mt-0 mx-auto justify-center items-center">
            <h2 className="font-bold text-xl md:text-3xl my-2 text-center">All Animals in the Upcoming Qurbani Hat.</h2>
            
            
            
            {/* Card for animals */}
            <div className=" px-2 py-2 mx-auto justify-center space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {animals.map(animal => 
                    <div key={animal.id} className="card w-full md:w-84 lg:w-90 bg-slate-50 border-1 border-purple-200 shadow-sm px-4 py-4  mx-auto my-2 space-y-4">
                        <figure className="">
                            <Image src={animal.image} alt="image" width={400} height={200} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl">{animal.name}</h2>
                            <p>Category: {animal.category}</p>
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
        </div>
        
        {/* <div className="container bg-pink-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
            <div className="card w-full md:w-84 lg:w-96 bg-purple-500 px-4 py-4 m-1 mx-auto gap-2">Hello, 1</div>
            <div className="card w-full md:w-84 lg:w-96 bg-purple-500 px-4 py-4 m-1 mx-auto gap-2">Hello, 1</div>
            <div className="card w-full md:w-84 lg:w-96 bg-purple-500 px-4 py-4 m-1 mx-auto gap-2">Hello, 1</div>
            <div className="card w-full md:w-84 lg:w-96 bg-purple-500 px-4 py-4 m-1 mx-auto gap-2">Hello, 1</div>
            <div className="card w-full md:w-84 lg:w-96 bg-purple-500 px-4 py-4 m-1 mx-auto gap-2">Hello, 1</div>
            
        </div> */}
        
        {/* className="space-x-4 card bg-base-200 w-full sm:w-full sm:m-2 md:w-84 lg:w-96 justify-between shadow-sm mx-auto my-2 px-2 py-2 " */}
        
    </div>
  );
}
