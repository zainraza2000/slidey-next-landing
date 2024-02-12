"use client";
import React from "react";
import ClientSliderLTR from "./ClientSliderLTR";
import ClientSliderRTL from "./ClientSliderRTL";
import { usePathname } from "next/navigation";

const ClientSection = () => {
  const pathname = usePathname();
  return (
    <section className=" xl:w-4/5 md:w-[85%] flex flex-col justify-between items-center md:gap-5 xl:gap-8 mx-auto">
      <h3
        className={`fontGivonic xl:text-[52px] md:text-[36px] font-semibold w-full ${
          pathname === "/" ? "block" : " hidden"
        } `}
      >
        Our
        <span className=" pt-2 px-[10px] pb-0 bg-[#86e2ff] text-black rounded-lg mx-3">
          Clients
        </span>
      </h3>
      <div className=" w-full flex flex-col gap-6  bg-[#fff] rounded-[20px] clientCard-boxShadow pt-8 pb-10">
        <p className="fontGivonic text-center 2xl:text-[24px] xl:text-xl md:text-lg font-medium">
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
