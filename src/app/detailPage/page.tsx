"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Cards from "@/components/Cards";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex  min-h-screen mr-10 ml-10">
      {/* Sidebar Section */}
      <div className="first hidden sm:flex w-[25%]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-4">
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Left Side - Main Card */}
            <div className="lg:w-1/2">
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold mb-2">
                  Sports car with the best design and acceleration
                </h1>
                <p className="mb-4">
                  Safety and comfort while driving a futuristic and elegant sports car
                </p>
                <Image
                  src="/image 8 (2).png"
                  alt="card car img"
                  width={400}
                  height={100}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Car Views */}
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <Image
                    src="/View 1.png"
                    alt="car view"
                    width={120}
                    height={120}
                    className="w-full rounded-lg border-2 border-gray-200"
                  />
                </div>
                <div className="w-1/3">
                  <Image
                    src="/View 2.png"
                    alt="car view"
                    width={120}
                    height={120}
                    className="w-full rounded-lg border-2 border-gray-200"
                  />
                </div>
                <div className="w-1/3">
                  <Image
                    src="/View 3.png"
                    alt="car view"
                    width={120}
                    height={120}
                    className="w-full rounded-lg border-2 border-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Car Details */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Nissan GT-R</h2>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                      <span className="text-gray-400 ml-2 ">440+ Reviewer</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex gap-8 ">
                    <p className="text-gray-500">Type Car</p>
                    <p className="font-semibold">Sport</p>
                  </div>
                  <div className="flex gap-8">
                    <p className="text-gray-500">Capacity</p>
                    <p className="font-semibold">2 Person</p>
                  </div>
                  <div className="flex gap-8 mb-6">
                    <p className="text-gray-500">Steering</p>
                    <p className="font-semibold">Manual</p>
                  </div>
                  <div className="flex gap-8 ">
                    <p className="text-gray-500">Gasoline</p>
                    <p className="font-semibold">70L</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold">$80.00/</span>
                    <span className="text-gray-500">days</span>
                    <p className="text-gray-500 line-through">$100.00</p>
                  </div>
                  <Link href={"/paymentPage"}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                    Rent Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-bold">Reviews</h3>
              <span className="ml-2 bg-[#3563E9] text-white px-4 py-1 rounded-[10px] text-sm">
                13
              </span>
            </div>

            {/* Review Cards */}
            <div className="space-y-4">
              {/* First Review */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Image
                      src="/Profill.png"
                      alt="profile img"
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Alex Stanton</p>
                      <p className="text-gray-500 text-sm">CEO at Bukalapak</p>
                    </div>
                  </div>
                  <div className="items-center">
                    <p className="text-gray-500 mr-4">21 July 2022</p>
                    <Image
                      src="/Reviews.png"
                      alt="review image"
                      width={100}
                      height={50}
                    />
                  </div>
                </div>
                <p className="text-gray-600">
                  We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                </p>
              </div>
              {/* Second Review */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Image
                      src="/Profill (1).png"
                      alt="profile img"
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Skylar Dias</p>
                      <p className="text-gray-500 text-sm">CEO at Amazon</p>
                    </div>
                  </div>
                  <div className=" items-center">
                    <p className="text-gray-500 mr-4">20 July 2022</p>
                    <Image
                      src="/Reviews.png"
                      alt="review image"
                      width={100}
                      height={50}
                    />
                  </div>
                </div>
                <p className="text-gray-600">
                  We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>
          <section className="popular w-full flex flex-col gap-5 mt-10 mb-10">
          <div className="first w-full flex items-center justify-between px-10 xl:px-14">
            <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                View All
              </h1>
            </Link>
          </div>
          </section>
          <Cards/>
        </div>
      </div>
      
    </div>
  );
};

export default Page;
