/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import forwardArrow from "../../../public/assets/icons/forward-arrow.svg";
import AlreadyAccount from "@/app/components/Auth/AlreadyAccount";
import SocialLogin from "@/app/components/Auth/SocialLogin";
import Button from "@/app/components/Auth/Button";
import whatsapp from "../../../public/assets/socials/whatsapp.svg";
import Image from "next/image";

const page = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 ? (
        <div className='w-full px-5 space-y-5'>
          <div className='w-full h-12 flex justify-between items-center px-2 bg-lightbackground rounded-md border-2 border-primary'>
            <Image
              className='h-7 w-7'
              src={whatsapp}
              alt=''
              height={100}
              width={100}
            ></Image>
            <p className='text-primary text-xs'>
              Get your ready-made ID from whatsapp
            </p>
            <Image
              className='h-6 w-6'
              src={forwardArrow}
              alt=''
              height={100}
              width={100}
            ></Image>
          </div>
          <div className='space-y-1'>
            <p className='text-white'>Mobile Number</p>
            <div className='w-full border-b-2 border-b-primary flex space-x-1 items-center'>
              <p className='text-white'>+91</p>
              <input
                className='w-full bg-background p-2 focus:outline-none'
                placeholder='10 digit mobile number'
              />
            </div>
          </div>
          <div
            className='w-full'
            onClick={() => {
              setStep(1);
            }}
          >
            <Button name='Get OTP' />
          </div>
          <p className='flex justify-center text-primary px-5'>
            or continue with
          </p>
          <SocialLogin />
          <AlreadyAccount />
        </div>
      ) : step === 1 ? (
        <div className='w-full space-y-5 px-5'>
          <div className='space-y-1'>
            <p className='text-white'>OTP Verification</p>
            <div className='w-full border-b-2 border-b-primary text-white flex space-x-1 items-center'>
              <input
                className='w-full bg-background p-2 focus:outline-none'
                placeholder='Enter 4 digit OTP'
              />
            </div>
          </div>
          <div className='flex text-primary justify-between'>
            <p>00.00</p>
            <p>Resend OTP</p>
          </div>
          <div
            className='w-full'
            onClick={() => {
              setStep(2);
            }}
          >
            <Button name='Confirm OTP' />
          </div>
          <AlreadyAccount />
        </div>
      ) : step === 2 ? (
        <div className='w-full space-y-5 px-5'>
          <div className='space-y-3'>
            <p className='text-white'>Create Password</p>
            <div className='w-full border-b-2 border-b-primary text-white flex space-x-1 items-center'>
              <input
                className='w-full bg-background p-2 focus:outline-none'
                placeholder='Password'
              />
            </div>
            <div className='w-full border-b-2 border-b-primary text-white flex space-x-1 items-center'>
              <input
                className='w-full bg-background p-2 focus:outline-none'
                placeholder='Confirm Password'
              />
            </div>
          </div>
          <Button name='Sign Up' />
          <AlreadyAccount />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default page;
