import React from "react";
import Image from "next/image";
import qr from "../../../public/assets/banner/qr.svg";
import UpiPaymentMethods from "@/app/components/UpiPaymentMethods/UpiPaymentMethods";
import bank from "../../../public/assets/icons/bank.svg";
import account from "../../../public/assets/icons/account.svg";
import Instructions from "@/app/components/Deposit/Instructions";
import Button from "@/app/components/Auth/Button";

const page = () => {
  return (
    <div className='w-full space-y-5 p-3 h-max'>
      <p className='text-white'>Option 1</p>
      <div className='w-full flex justify-center items-center space-x-3'>
        <Image
          className='h-32 w-32'
          src={qr}
          alt=''
          height={200}
          width={200}
        ></Image>
        <p className='text-lighttext text-sm w-32'>
          Scan this QR code from any UPI enabled payment app and pay using UPI.
        </p>
      </div>
      <div className='space-y-1 '>
        <p className='text-white'>Option 2</p>
        <p className='text-lighttext text-sm'>Pay directly in the app</p>
      </div>
      <div className='w-full'>
        <UpiPaymentMethods />
      </div>
      <div className='space-y-1 '>
        <p className='text-white'>Option 3</p>
        <p className='text-lighttext text-sm'>
          Pay to the following UPI from any app
        </p>
      </div>
      <div className='space-y-2'>
        <div className='w-full p-3 bg-lightbackground rounded space-y-2'>
          <div className='flex justify-between'>
            <p className='text-lightgray text-sm'>UPI ID</p>
            <p className='text-sm text-primary'>Copy</p>
          </div>
          <p className='text-white text-sm'>7600036525@upi</p>
        </div>
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
      </div>
      <Instructions />
      <div className='w-full'>
        <Button name='I Paid' />
      </div>
    </div>
  );
};

export default page;
