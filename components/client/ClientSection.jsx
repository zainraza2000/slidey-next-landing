"use client";
import React from "react";
import ClientSliderLTR from "./ClientSliderLTR";
import ClientSliderRTL from "./ClientSliderRTL";
import { usePathname } from "next/navigation";

const ClientSection = () => {
  const pathname = usePathname();
  return (
    <section className=" xl:w-4/5 md:w-[85%] w-[90%] flex flex-col justify-between items-center md:gap-5 xl:gap-8 mx-auto md:pt-20 pt-12">
      <h3
        className={`fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold w-full ${
          pathname === "/contact" ? "hidden" : " block"
        } `}
      >
        Our
        <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black rounded-lg md:mx-3 mx-1">
          Clients
        </span>
      </h3>
      <div className=" w-full flex flex-col gap-6  bg-[#fff] md:rounded-[20px] rounded-xl clientCard-boxShadow md:pt-8 pt-5 md:pb-10 pb-4">
        <p className="fontGivonic text-center 2xl:text-[24px] xl:text-xl md:text-lg text-[10px] font-medium">
          <span className=" font-semibold  "> 15000+</span> slides delivered to{" "}
          <span className=" font-semibold  ">500+</span> clients across the
          globe
        </p>
        <ClientSliderLTR />
        <ClientSliderRTL />
      </div>
    </section>
  );
};

export default ClientSection;
