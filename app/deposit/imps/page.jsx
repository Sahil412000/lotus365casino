/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import bank from "../../../public/assets/icons/bank.svg";
import account from "../../../public/assets/icons/account.svg";
import userprofile from "../../../public/assets/icons/userprofile.svg";
import location from "../../../public/assets/icons/location.svg";
import checkgreen from "../../../public/assets/icons/checkgreen.svg";
import Instructions from "@/app/components/Deposit/Instructions";
import Button from "@/app/components/Auth/Button";

const page = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 0 ? (
        <div className='w-full h-max space-y-5 p-3'>
          <div className='space-y-1 '>
            <p className='text-white'>Select Payment Mthod</p>
            <p className='text-lighttext text-sm'>
              Please send a deposit to the specified bank transfer account
              number. If you transfer to any other account , your payment will
              not get deposited.
            </p>
          </div>
          <div className='space-y-2'>
            <div className='flex w-full space-x-2'>
              <div className='p-3 bg-lightbackground rounded space-y-2 w-1/2'>
                <div className='flex space-x-1 items-center'>
                  <Image
                    className='h-4 w-4'
                    src={bank}
                    alt=''
                    height={100}
                    width={100}
                  ></Image>
                  <p className='text-lightgray text-sm'>Bank Name</p>
                </div>
                <p className='text-white text-sm'>IFSC</p>
              </div>
              <div className='p-3 bg-lightbackground rounded space-y-2 w-1/2'>
                <div className='flex space-x-1 items-center'>
                  <Image
                    className='h-4 w-4'
                    src={account}
                    alt=''
                    height={100}
                    width={100}
                  ></Image>
                  <p className='text-lightgray text-sm'>Account Number</p>
                </div>
                <p className='text-white text-sm'>Lotus Casino</p>
              </div>
            </div>
            <div className='flex w-full space-x-2'>
              <div className='p-3 bg-lightbackground rounded space-y-2 w-1/2'>
                <div className='flex space-x-1 items-center'>
                  <Image
                    className='h-4 w-4'
                    src={userprofile}
                    alt=''
                    height={100}
                    width={100}
                  ></Image>
                  <p className='text-lightgray text-sm'>Bank Name</p>
                </div>
                <p className='text-white text-sm'>76000365251212121</p>
              </div>
              <div className='p-3 bg-lightbackground rounded space-y-2 w-1/2'>
                <div className='flex space-x-1 items-center'>
                  <Image
                    className='h-4 w-4'
                    src={location}
                    alt=''
                    height={100}
                    width={100}
                  ></Image>
                  <p className='text-lightgray text-sm'>IFSC Code</p>
                </div>
                <p className='text-white text-sm'>HDFC0002622</p>
              </div>
            </div>
          </div>
          <Instructions />
          <div className='w-full'>
            <Button name='I Paid' />
          </div>
        </div>
      ) : step === 1 ? (
        <div className='w-full h-max space-y-5 p-3'>
          <div className='w-full space-y-2'>
            <p className='text-white'>Transaction type</p>
            <div className='flex justify-between space-x-1'>
              <div className='h-9 w-28 bg-lightbackground flex justify-center items-center space-x-1 rounded'>
                <Image
                  className='h-4 w-4'
                  src={checkgreen}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white'>IMPS</p>
              </div>
              <div className='h-9 w-28 bg-lightbackground flex justify-center items-center space-x-1 rounded'>
                <Image
                  className='h-4 w-4'
                  src={checkgreen}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white'>NEFT</p>
              </div>
              <div className='h-9 w-28 bg-lightbackground flex justify-center items-center space-x-1 rounded'>
                <Image
                  className='h-4 w-4'
                  src={checkgreen}
                  alt=''
                  height={100}
                  width={100}
                ></Image>
                <p className='text-white'>RTGS</p>
              </div>
            </div>
          </div>
          <div className='space-y-1'>
            <p className='text-white'>
              Enter UTR/Transaction ID/Ref ID{" "}
              <span className='text-red'>*</span>
            </p>
            <div className='w-full border-b-2 border-b-primary text-white flex space-x-1 items-center'>
              <input
                className='w-full bg-background p-2 focus:outline-none'
                placeholder='UTR/Transaction ID/Ref ID'
              />
            </div>
          </div>
          <Instructions />
          <div className='w-full'>
            <Button name='Confirm' />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default page;
