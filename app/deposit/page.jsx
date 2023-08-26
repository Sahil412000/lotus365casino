/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import MyDisclosure from "../components/Disclosure/Disclosure";
import Button from "../components/Auth/Button";
import Image from "next/image";
import depositUpi from "../../public/assets/icons/deposit-upi.svg";
import bank from "../../public/assets/icons/bank.svg";
import flash from "../../public/assets/icons/flash.svg";

const page = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 ? (
        <div className='text-white h-screen w-full p-3 space-y-5'>
          <div className='w-full border-b-2 border-b-primary flex justify-between space-x-1 items-center'>
            <div className='flex items-center space-x-2'>
              <p className='text-white'>+91</p>
              <input
                className=' bg-background p-2 focus:outline-none w-2/3'
                placeholder='Enter amount'
              />
            </div>
            <p className='text-lightgray text-sm'>
              Min <span>500</span>
            </p>
          </div>
          <div className='flex justify-between w-full'>
            <div className='bg-lightbackground h-7 w-20 flex justify-center items-center rounded text-sm'>
              + 500
            </div>
            <div className='bg-lightbackground h-7 w-20 flex justify-center items-center rounded text-sm'>
              + 1000
            </div>
            <div className='bg-lightbackground h-7 w-20 flex justify-center items-center rounded text-sm'>
              + 5000
            </div>
            <div className='bg-lightbackground h-7 w-20 flex justify-center items-center rounded text-sm'>
              + 10000
            </div>
          </div>
          <div className='w-full'>
            <MyDisclosure />
          </div>
          <div
            className='w-full'
            onClick={() => {
              setStep(1);
            }}
          >
            <Button name='Next' />
          </div>
        </div>
      ) : (
        <div className='text-white h-screen w-full p-3 space-y-5'>
          <div className='w-full grid grid-cols-2 gap-5 justify-items-center'>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
            <div className='space-y-1 h-32 w-full bg-lightbackground flex flex-col justify-between'>
              <div className='text-green text-xs flex items-center space-x-1 p-2'>
                <Image
                  className='h-2 w-2'
                  src={flash}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p>Quick</p>
              </div>
              <Image
                className='h-max w-full'
                src={depositUpi}
                alt=''
                height={200}
                width={200}
              ></Image>
              <div className='w-full bg-darkgray flex justify-center items-center h-7 space-x-1'>
                <Image
                  className='h-3 w-3'
                  src={bank}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white text-sm'>Janak Transfer</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
