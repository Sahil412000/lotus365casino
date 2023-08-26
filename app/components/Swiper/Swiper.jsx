// "use client";
// import React, { useRef } from "react";
// import backArrow from "../../../public/assets/icons/back-arrow.svg";
// import Image from "next/image";

// const Swipper = () => {
//   const ref = useRef(null);

//   const handleScrollLeft = () => {
//     if (window) {
//       ref.current.scrollBy({
//         left: -(window.innerWidth * 60) / 100,
//         behaviour: "smooth",
//       });
//     }
//   };
//   const handleScrollRight = () => {
//     if (window) {
//       ref.current.scrollBy({
//         left: (window.innerWidth * 60) / 100,
//         behaviour: "smooth",
//       });
//     }
//   };

//   return (
//     <div className='w-full flex items-center justify-between space-x-2 px-4'>
//       <button className='hover:text-primary mt-1.5' onClick={handleScrollLeft}>
//         <Image
//           className='h-8 w-8'
//           src={backArrow}
//           alt=''
//           height={100}
//           width={100}
//         ></Image>
//       </button>
//       <div ref={ref} className='w-full overflow-scroll flex'>
//         <div className='h-40 w-40 bg-primary'></div>
//         <div className='h-40 w-40 bg-primary'></div>
//         <div className='h-40 w-40 bg-primary'></div>
//         <div className='h-40 w-40 bg-primary'></div>
//         <div className='h-40 w-40 bg-primary'></div>
//         <div className='h-40 w-40 bg-primary'></div>
//       </div>
//       <button
//         className='hover:text-primary md:mt-2.5 mt-1.5'
//         onClick={handleScrollRight}
//       >
//         <Image
//           className='h-8 w-8'
//           src={backArrow}
//           alt=''
//           height={100}
//           width={100}
//         ></Image>
//       </button>
//     </div>
//   );
// };

// export default Swipper;

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../../node_modules/@splidejs/react-splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";

export default function Swipper({ data }) {
  return (
    <div className='w-full block'>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 2,
          focus: "center",
        }}
        // aria-label="My Favorite Images"
      >
        {data.map((value, key) => {
          return (
            <SplideSlide key={key}>
              <Image
                className='h-auto w-56 '
                src={value.image}
                alt=''
                height={400}
                width={400}
              ></Image>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
