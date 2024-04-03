import { CustomFilter, Hero, SearchBar ,CarCard } from "@/components";
import { fetchCars } from "@/utils";
import { constants } from "buffer";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Services</h1>
          <p>more than 20 services..</p>
        </div>

        
        
      </div>
    </main>
  );
}

