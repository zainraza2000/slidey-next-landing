import Image from "next/image";
import React from "react";

import arrow from "@/assets/images/testinomials/testinomial-arrow.svg";
import lineUp from "@/assets/images/testinomials/line-up.png";
import lineDown from "@/assets/images/testinomials/line-down.png";

const TestimonialCard = ({ item, isBlur,style }) => {
  return (
    <div
      key={item.id}
      className={`2xl:w-[486px] 2xl:h-[550px] xl:w-[420px] xl:h-[500px]  md:w-[33%] md:h-[350px] mx-auto  2xl:gap-8 flex flex-col justify-between  bg-[#fff] testinomial-boxShadow rounded-3xl
       2xl:px-10 xl:px-10 md:px-6 xl:pt-10 md:pt-6 2xl:pb-8 xl:pb-6 md:pb-4 xl:gap-0 ${
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
      <div className=" flex gap-5 items-center">
        <Image
          src={item.profileImg}
          alt="clientProfile1s"
          width={126}
          height={126}
          className=" md:w-[80px] md:h-[80px] xl:w-[126px] xl:h-[126px]"
        />
        <div className=" flex flex-col justify-center xl:gap-2 md:gap-[6px]">
          <h3 className=" fontGivonic xl:text-3xl md:text-xl font-semibold xl:leading-tight md:leading-tight">
            {item.firstname} <br /> {item.lastname}
          </h3>
          <p className="  fontGivonic xl:text-lg md:text-sm text-[#4C4C4C] font-semibold">
            {item.designation}
          </p>
        </div>
      </div>
      <p className="fontGivonic xl:text-xl md:text-sm font-semibold">{item.message}</p>
      <div className=" flex justify-between items-center">
        <div className=" flex gap-3 items-center">
          <p className=" text-[#4D4D4D] xl:text-base md:text-sm">Read More</p>
          <Image src={arrow} width={10} height={10} className="" />
        </div>
        <Image
          src={item.companyLogo}
          alt="client1Company"
          className={`${
            item.id === 2 || item.id === 4 ? " xl:w-[120px] md:w-[100px]" : " xl:w-[70px] md:w-[50px]"
          }`}
        />
      </div>
      <Image src={lineDown} alt="lineDown" />
    </div>
  );
};

export default TestimonialCard;
