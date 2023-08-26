import Image from "next/image";
import backArrow from "../../public/assets/icons/back-arrow.svg";
import info from "../../public/assets/icons/info.svg";

export default function Deposit({ children }) {
  return (
    <main className='w-full'>
      <div className='w-full h-14 bg-background flex justify-between items-center px-3'>
        <div className='flex space-x-1 items-center'>
          <Image
            className='h-4 w-4'
            src={backArrow}
            alt=''
            height={100}
            width={100}
          ></Image>
          <p className='text-primary'>Back</p>
        </div>
        <p className='text-white font-semibold'>Deposit</p>
        <div className='flex items-center space-x-1 text-darktext'>
          <p>Help</p>
          <Image
            className='h-4 w-4'
            src={info}
            alt=''
            height={100}
            width={100}
          ></Image>
        </div>
      </div>
      <div className='w-full h-full'>{children}</div>
    </main>
  );
}
