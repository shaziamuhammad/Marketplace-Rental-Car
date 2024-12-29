'use client'
import React from 'react'
import Sidebar from "../../components/Sidebar";
import PickDrop from '@/components/PickDrop';
import Cards from '@/components/Cards';
import  { useState } from "react";



const Page = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  return (
    <div className='w-full min-h-screen flex'>
        {/* Sidebar */}
        <div className="first hidden sm:flex w-[20%]">
        <Sidebar />
      </div>
      <div className="mb-10 mr-5 ml-3 flex-1">
              <PickDrop />
            
              
              <Cards />
              <section className="button w-full text-center  flex justify-center items-center">
              <button className="bg-[#3563E9] text-white text-[16px] px-4 py-2 mb-10 mt-10 rounded-[4px] hover:bg-blue-600 transition-colors flex justify-center items-center">
          Show more car
          
        </button>
        </section>
            </div>
          
        

    </div>
  )
}

export default Page 