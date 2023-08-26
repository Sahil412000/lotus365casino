import logo from "../../public/assets/logo/navbar-logo.svg";
import Image from "next/image";
import backArrow from "../../public/assets/icons/back-arrow.svg";
import banner from "../../public/assets/banner/login-banner.svg";

export default function Auth({ children }) {
  return (
    <main className='w-full'>
      <div className='w-full h-14 bg-background flex justify-center items-center relative'>
        <Image
          className='h-8 w-20'
          src={logo}
          alt=''
          height={100}
          width={100}
        ></Image>
        <div className='absolute top-1/2 -translate-y-1/2 left-3 flex space-x-1 items-center'>
          <Image
            className='h-4 w-4'
            src={backArrow}
            alt=''
            height={100}
            width={100}
          ></Image>
          <p className='text-primary'>Back</p>
        </div>
      </div>
      <div className='w-full h-80 -mt-6'>
        <Image
          className='h-full w-full'
          src={banner}
          alt=''
          height={100}
          width={100}
        ></Image>
      </div>
      <div className='w-full h-full'>{children}</div>
    </main>
  );
}
