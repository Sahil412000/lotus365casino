import React from "react";
import Image from "next/image";
import book from "../../../public/assets/icons/book.svg";

const Instructions = () => {
  return (
    <div className='w-full flex justify-center items-center bg-lightbackground space-x-2 h-12 text-lightgray font-semibold rounded'>
      <Image
        className='h-4 w-4'
        src={book}
        alt=''
        height={100}
        width={100}
      ></Image>
      <p>How to pay</p>
    </div>
  );
};

export default Instructions;
