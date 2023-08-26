import logo from "../../public/assets/logo/navbar-logo.svg";
import search from "../../public/assets/icons/search.svg";
import menu from "../../public/assets/icons/menu.svg";
import Image from "next/image";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <main className='w-full'>
      <div className='w-full h-14 bg-background border-b-2 border-b-secondary'>
        <div className='flex justify-between p-3'>
          <Link href='/deposit'>
            <div className='bg-primary h-8 w-16 flex justify-center items-center font-bold rounded-sm text-sm'>
              Deposit
            </div>
          </Link>
          <Image
            className='h-8 w-20'
            src={logo}
            alt=''
            height={100}
            width={100}
          ></Image>
          <div className='flex space-x-3 items-center'>
            <Link href='/search'>
              <Image
                className='h-8 w-8'
                src={search}
                alt=''
                height={100}
                width={100}
              ></Image>
            </Link>
            <Image
              className='h-7 w-7'
              src={menu}
              alt=''
              height={100}
              width={100}
            ></Image>
          </div>
        </div>
      </div>
      <MobileNavigation />
      <div className='w-full h-full'>{children}</div>
    </main>
  );
}
