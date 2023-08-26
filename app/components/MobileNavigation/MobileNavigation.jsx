import React from "react";
import Image from "next/image";
import { data } from "./data";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className='flex justify-between w-full items-center p-3 '>
      {data.map((value, key) => {
        return (
          <Link href={value.link} key={key} className='w-1/5'>
            <div className='space-y-1 flex flex-col justify-center items-center w-full'>
              <Image
                className='h-6 w-6'
                src={value.icon}
                alt=''
                height={100}
                width={100}
              ></Image>
              <p className='text-white text-xs'>{value.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavigation;
