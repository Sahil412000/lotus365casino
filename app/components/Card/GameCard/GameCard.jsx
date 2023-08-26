import React from "react";
import Image from "next/image";
import placeholder from "../../../../public/assets/banner/game-card.svg";

const GameCard = () => {
  return (
    <div className='h-32 w-28 rounded-lg'>
      <Image
        alt=''
        src={placeholder}
        height={200}
        width={200}
        className='h-full w-full object-cover rounded-lg'
      />
    </div>
  );
};

export default GameCard;
