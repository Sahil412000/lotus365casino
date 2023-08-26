import React from "react";
import processing from "../../../public/assets/banner/processing.svg";
import Image from "next/image";
import Button from "@/app/components/Auth/Button";

const page = () => {
  return (
    <div className='w-full space-y-5 p-5'>
      <div className='flex w-full justify-center items-center'>
        <Image
          className='h-max w-full'
          src={processing}
          alt=''
          height={200}
          width={200}
        ></Image>
      </div>
      <div className='space-y-1 '>
        <p className='text-white'>We have accepted your deposit request</p>
        <p className='text-darktext text-sm'>
          We will verify your payment details after we receive the payment from
          your bank.Then amount will be added to your wallet.
        </p>
      </div>
      <div className='w-full'>
        <Button name='Done' />
      </div>
    </div>
  );
};

export default page;
