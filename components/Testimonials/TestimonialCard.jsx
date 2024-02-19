import Image from "next/image";
import React from "react";

import arrow from "@/assets/images/testinomials/testinomial-arrow.svg";
import lineUp from "@/assets/images/testinomials/line-up.webp";
import lineDown from "@/assets/images/testinomials/line-down.webp";

const TestimonialCard = ({ item, isBlur,style }) => {
  return (
    <div
      key={item.id}
      className={`2xl:w-[486px] 2xl:h-[550px] xl:w-[420px] xl:h-[500px]  md:w-[30%] w-[33%] md:h-[350px] mx-auto  2xl:gap-8 flex flex-col justify-between  bg-[#fff] testinomial-boxShadow md:rounded-3xl rounded-md
       2xl:px-10 xl:px-10 md:px-6 px-2 xl:pt-10 md:pt-6 pt-2 2xl:pb-8 xl:pb-6 md:pb-4 pb-2 xl:gap-0 md:gap-0 gap-[6px] ${
        isBlur && "blur-sm"
      }
      transition-all duration-500 ease-in-out
      `}
      style={style}
    >
      <Image
        src={lineUp}
        alt="lineUp"
        width={100}
        height={100}
        className=" w-full"
      />
      <div className=" flex xl:gap-6 md:gap-5 gap-1 items-center">
        <Image
          src={item.profileImg}
          alt="clientProfile1s"
          width={126}
          height={126}
          className=" w-8 h-8 md:w-[80px] md:h-[80px] xl:w-[126px] xl:h-[126px]"
        />
        <div className=" flex flex-col justify-center xl:gap-2 md:gap-[6px]">
          <h3 className=" fontGivonic 2xl:text-3xl xl:text-2xl md:text-base text-[8px] font-semibold xl:leading-tight md:leading-tight">
            {item.firstname} <br /> {item.lastname}
          </h3>
          <p className="  fontGivonic 2xl:text-lg xl:text-base md:text-xs text-[6px] text-[#4C4C4C] font-semibold">
            {item.designation}
          </p>
        </div>
      </div>
      <p className="fontGivonic 2xl:text-base xl:text-sm md:text-[10px] text-[5px] font-normal">{item.message}</p>
      <div className=" flex justify-between items-center">
        <div className=" flex md:gap-3 gap-1 items-center">
          <p className=" text-[#4D4D4D] xl:text-base md:text-xs text-[6px]">Read More</p>
          <Image src={arrow} alt="arrow" width={10} height={10} className=" md:w-auto md:h-auto w-[5px] h-[5px]" />
        </div>
        <Image
          src={item.companyLogo}
          alt="client1Company"
          className={`${
            item.id === 2 || item.id === 4 ? " xl:w-[120px] md:w-[100px] w-8" : " xl:w-[70px] md:w-[50px] w-5"
          }`}
        />
      </div>
      <Image src={lineDown} alt="lineDown" />
    </div>
  );
};

export default TestimonialCard;
