
import { getAnimals } from "@/lib/data";

import BannerPage from "./banner/page";
import AnimalSort from "@/components/animalsort";

export default async function Home() {
    
    const allAnimals = await getAnimals();
   
  return (
    <div className="container mx-auto justify-center items-center">
        <BannerPage />
        <div className="mt-48 md:mt-0 lg:mt-0">
            <AnimalSort allAnimals={allAnimals}/>
        </div>
       
        
        
    </div>
  );
}
