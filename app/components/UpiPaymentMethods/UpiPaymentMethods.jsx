import React from "react";
import { data } from "./data";
import Image from "next/image";

const UpiPaymentMethods = () => {
  return (
    <div className='flex justify-center items-center space-x-2'>
      {data.map((value, key) => {
        return (
          <Image
            key={key}
            className='h-16 w-16'
            src={value.image}
            alt={value.name}
            height={200}
            width={200}
          ></Image>
        );
      })}
    </div>
  );
};

export default UpiPaymentMethods;
