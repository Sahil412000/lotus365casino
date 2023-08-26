import React from "react";
import google from "../../../public/assets/socials/google.svg";
import whatsapp from "../../../public/assets/socials/whatsapp.svg";
import Image from "next/image";

const SocialLogin = () => {
  return (
    <div className='flex w-full space-x-1'>
      <div className='bg-lightbackground w-1/2 h-10 flex justify-center items-center rounded-md'>
        <div className='flex space-x-1 items-center h-full text-white'>
          <Image
            className='h-5 w-5'
            src={google}
            alt=''
            height={100}
            width={100}
          ></Image>
          <p>Google</p>
        </div>
      </div>
      <div className='bg-lightbackground w-1/2 h-10 flex justify-center items-center rounded-md'>
        <div className='flex space-x-1 items-center h-full text-white'>
          <Image
            className='h-5 w-5'
            src={whatsapp}
            alt=''
            height={100}
            width={100}
          ></Image>
          <p>Whatsapp</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
