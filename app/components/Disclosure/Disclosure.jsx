import { Disclosure, Transition } from "@headlessui/react";
import arrow from "../../../public/assets/icons/down-arrow-green.svg";
import coupon from "../../../public/assets/icons/coupon.svg";
import Image from "next/image";

export default function MyDisclosure() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between items-center bg-lightbackground p-3 rounded'>
            <div className='flex items-center space-x-1'>
              <Image
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                src={coupon}
                alt=''
                height={100}
                width={100}
              ></Image>
              <p>Coupons Available</p>
            </div>
            <Image
              className={`${open ? "rotate-180 transform" : ""} h-4 w-4`}
              src={arrow}
              alt=''
              height={100}
              width={100}
            ></Image>
          </Disclosure.Button>

          {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
          <Transition
            show={open}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
            <Disclosure.Panel static className='p-3 bg-lightbackground'>
              Yes! You can purchase a license that you can share with your
              entire team.
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
