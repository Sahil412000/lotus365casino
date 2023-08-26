import GameCard from "@/app/components/Card/GameCard/GameCard";
import CasinoStack from "@/app/components/CasinoStack/CasinoStack";
import MobileFooter from "@/app/components/Footer/MobileFooter";
import React from "react";
import { data } from "@/app/components/CasinoStack/casinoData";

const page = () => {
  return (
    <div className='w-full space-y-3'>
      <CasinoStack data={data} />
      <div className='w-full grid grid-cols-3 gap-1.5 px-3'>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
      <MobileFooter />
    </div>
  );
};

export default page;
