import Image from "next/image";
import React from "react";

import workCardIcon1 from "@/assets/svgs/workCard-icon-1.svg";
import workCardIcon2 from "@/assets/svgs/workCard-icon-2.svg";

const CraftCards = ({ item, setCurrentImg, setOpen }) => {
  return (
    <div className=" flex justify-center ">
    <div
      className="slide ourWorkTypeCard relative mx-auto cursor-pointer"
      onClick={() => {
        setCurrentImg(item?.modalSrc), setOpen(true);
      }}
    >
      <Image
        src={item?.thumbnailSrc}
        width={350}
        height={350}
        alt="craftImg1"
        className=" xl:w-[350px] xl:h-[350px] md:w-[320px] md:h-[240px]"
      />
      <div className="allwork-hover-div">
        <p className="text-[22px] font-semibold">{item.title}</p>
        <div className=" flex gap-2">
          <Image src={workCardIcon1} alt="workCardIcon1" />
          <Image src={workCardIcon2} alt="workCardIcon2" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default CraftCards;
