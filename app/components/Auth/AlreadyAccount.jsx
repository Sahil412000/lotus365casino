import Link from "next/link";
import React from "react";

const AlreadyAccount = () => {
  return (
    <div className='flex justify-center items-center text-primary px-5 space-x-1'>
      <p>Already have an account? </p>
      <Link href='/login'>
        {" "}
        <span className='text-white'>Login</span>
      </Link>
    </div>
  );
};

export default AlreadyAccount;
