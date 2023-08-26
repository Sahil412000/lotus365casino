import React from "react";
import Image from "next/image";

const CasinoStack = ({ data }) => {
  return (
    <div className='flex justify-center space-x-4 w-full items-center p-3 px-6 border-b-2 border-b-secondary'>
      {data.map((value, key) => {
        return (
          <div
            key={key}
            className='space-y-1 flex flex-col justify-center items-center '
          >
            <Image
              className='h-6 w-6'
              src={value.icon}
              alt=''
              height={100}
              width={100}
            ></Image>
            <p className='text-white text-xs'>{value.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CasinoStack;
