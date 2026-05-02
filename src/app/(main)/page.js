import { getAnimals, getCategories } from "@/lib/data";
import Image from "next/image";


// const getAnimals = async () => {
//     const res = await fetch('https://assignment-08-dataset.onrender.com/animals');
//     const data = await res.json();
//     return data;
// }
export default async function Home() {
    // const animals = await getAnimals();
    // console.log(animals, "animals");
    const datas = await getCategories();
    console.log(datas.data, "data");

    const animals = await getAnimals();
    console.log('animals data: ', animals);
  return (
    <div>
        <h2>Page!</h2>
        <div className="bg-slate-100 grid grid-cols-3 ">
            {animals.map(animal => 
                <div
                    className="bg-lime-200 m-1 p-2 w-48"
                    key={animal.id}>
                    <h2>{animal.name}</h2>
                    <p>{animal.price} { animal.category}</p>
                    <button className="">See Details...</button>
                </div>
            )}
        </div>
        
    </div>
  );
}
