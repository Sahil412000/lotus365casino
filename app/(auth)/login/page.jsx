/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import phonegreen from "../../../public/assets/icons/phonegreen.svg";
import phone from "../../../public/assets/icons/phone.svg";
import accountgreen from "../../../public/assets/icons/accountgreen.svg";
import account from "../../../public/assets/icons/account.svg";
import SocialLogin from "@/app/components/Auth/SocialLogin";

const page = () => {
  const [preferredLogin, setPreferredLogin] = useState(0);

  return (
    <div className='w-full space-y-5 h-max pb-20'>
      <div className='flex w-full'>
        <div
          onClick={() => {
            setPreferredLogin(0);
          }}
          className={`${
            preferredLogin === 0 ? "" : "bg-lightbackground text-white"
          } flex space-x-1 w-1/2 justify-center items-center h-14`}
        >
          <Image
            className='h-5 w-5'
            src={preferredLogin === 0 ? phonegreen : phone}
            alt=''
            height={100}
            width={100}
          ></Image>
          <p
            className={`${
              preferredLogin === 0 ? "text-primary" : "text-white"
            }`}
          >
            Mobile Number
          </p>
        </div>
        <div
          onClick={() => {
            setPreferredLogin(1);
          }}
          className={`${
            preferredLogin === 1 ? "" : "bg-lightbackground text-white"
          } flex space-x-1 w-1/2 justify-center items-center h-14`}
        >
          <Image
            className='h-5 w-5'
            src={preferredLogin === 1 ? accountgreen : account}
            alt=''
            height={100}
            width={100}
          ></Image>
          <p
            className={`${
              preferredLogin === 1 ? "text-primary" : "text-white"
            }`}
          >
            User ID
          </p>
        </div>
      </div>
      <div className='w-full px-5 space-y-3 text-white'>
        {preferredLogin === 0 ? (
          <div className='w-full border-b-2 border-b-primary flex space-x-1 items-center'>
            <p className='text-white'>+91</p>
            <input
              className='w-full bg-background p-2 focus:outline-none'
              placeholder='10 digit mobile number'
            />
          </div>
        ) : (
          <input
            className='w-full bg-background p-2 focus:outline-none border-b-2 border-b-primary'
            placeholder='User ID'
          />
        )}
        <input
          className='w-full bg-background p-2 border-b-2 border-b-primary focus:outline-none'
          placeholder='Password'
        />
      </div>
      <p className='flex justify-end text-primary px-5'>Forgot Password ?</p>
      <div className='px-5'>
        <div className='w-full h-12 bg-primary text-background flex justify-center items-center rounded-md font-bold'>
          Log In
        </div>
      </div>
      <p className='flex justify-center text-primary px-5'>
        Create New Account
      </p>
      <div className='px-5 w-full'>
        <SocialLogin />
      </div>
    </div>
  );
};

export default page;
