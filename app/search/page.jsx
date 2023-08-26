"use client";
import React from "react";
import Image from "next/image";
import search from "../../public/assets/icons/searchgreen.svg";
import cross from "../../public/assets/icons/crossgreen.svg";

const page = () => {
  const handleInputChange = (event) => {
    // handle search
  };

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-16 bg-secondary flex justify-between items-center px-6'>
        <div className='flex space-x-2 items-center'>
          <Image
            className='h-5 w-5'
            src={search}
            alt=''
            height={100}
            width={100}
          ></Image>
          <input
            className='bg-secondary border-none p-3 text-white focus:outline-none'
            placeholder='Search here'
            name='search'
            id='search'
            onChange={handleInputChange}
          />
        </div>
        <Image
          className='h-4 w-4'
          src={cross}
          alt=''
          height={100}
          width={100}
        ></Image>
      </div>
    </div>
  );
};

export default page;
