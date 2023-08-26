import React from "react";

const Button = ({ name }) => {
  return (
    <div className='w-full h-12 bg-primary text-background flex justify-center items-center rounded-md font-bold'>
      {name}
    </div>
  );
};

export default Button;
