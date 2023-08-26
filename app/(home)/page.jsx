"use client";
import React from "react";
import Image from "next/image";
import home from "../../public/assets/banner/home-banner.svg";
import MobileFooter from "../components/Footer/MobileFooter";
import Swipper from "../components/Swiper/Swiper";
import { trending, liveDealer } from "../components/Swiper/data";

function page() {
  return (
    <div className='w-full -mt-20 '>
      <Image
        className='h-96 w-full '
        src={home}
        alt=''
        height={400}
        width={400}
      ></Image>
      <div className='flex flex-col justify-center items-center space-y-3 -mt-16'>
        <p className='text-2xl text-primary'>Get ₹1000 on Signup</p>
        <p className='text-white'>New Player Bonus</p>
        <div className='text-background bg-primary rounded-full h-11 w-56 flex justify-center items-center font-bold text-lg'>
          Play Now
        </div>
      </div>
      <div className='space-y-2 p-3 mt-5'>
        <p className='text-primary text-xl font-bold'>Trending</p>
        <Swipper data={trending} />
      </div>
      <div className='space-y-2 p-3'>
        <p className='text-primary text-xl font-bold'>Live Dealer</p>
        <Swipper data={liveDealer} />
      </div>
      <div className='space-y-2 p-3'>
        <p className='text-primary text-xl font-bold'>Most Played</p>
        <Swipper data={trending} />
      </div>
      <div className='space-y-2 p-3'>
        <p className='text-primary text-xl font-bold'>Indian Card Games</p>
        <Swipper data={trending} />
        <Swipper data={trending} />
      </div>
      <div className='space-y-2 p-3'>
        <p className='text-primary text-xl font-bold'>Slots</p>
        <Swipper data={trending} />
        <Swipper data={trending} />
      </div>
      <MobileFooter />
    </div>
  );
}

export default page;
