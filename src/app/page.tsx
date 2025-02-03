// src\app\page.tsx
import Hero from "@/components/Hero";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allcars } from "@/sanity/lib/queries";
import Image from "next/image";
import Heros from "@/components/Heros";

// type Cars={
//   _id:string ;
//   name:string ;
//   description:string;
//   price :number;
//   imageUrl:string
// }

export default  function Home() {
  // const car:Cars[]=await sanityFetch({query:allcars})
  return (
   <div> 
    {/* <Hero/> */}
    {/* <h1>Product</h1>
    <div  className="grid grid-cols-3 gap-4">{
      car.map((cars)=>(
        <div className="border p-4 rounded shadow-sm flex flex-col items-center" key={cars._id}>
          <Image src={cars.imageUrl} alt={cars.name} width={300} height={500} className="w-60"/>
          <h2 className="text-xl font-bold text-center">
            {cars.name}
          </h2>
          <p className="text-center">
            {cars.description}
          </p>
          <p>
            {cars.price}
          </p>

        </div>
      ))
    }

    </div> */}
    <Heros/>

    
   </div>
  );
}

