import { getAnimals } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

// const getAnimals = async () => {
//     const res = await fetch('https://assignment-08-dataset.onrender.com/animals');
//     const data = await res.json();
//     return data;
// }
export default async function Home() {
    

    const animals = await getAnimals();
    console.log('animals data: ', animals);
  return (
    <div>
        <h2>All Animals in the Upcoming Qurbani Hat.</h2>
        <div className="bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {animals.map(animal => 
                <div
                    className="bg-lime-200 m-1 p-2 w-48"
                    key={animal.id}>
                    <h2>{animal.name}</h2>
                    <p>{animal.price} { animal.category}</p>
                    <button className="btn btn-primary">
                        <Link href={`/details/${animal.id}`}>See details...</Link>
                    </button>
                </div>
            )}
        </div>
        
    </div>
  );
}
