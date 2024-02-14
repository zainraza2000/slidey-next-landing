"use client";
import { pricingData } from "@/data";
import { usePathname } from "next/navigation";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const PricingSection = () => {
  const pathname = usePathname();
  const scrollToAbout = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className={`${
        pathname === "/pitchdeck"
          ? "bg-pricing xl:w-4/5 md:w-[90%] w-full md:px-0 px-5 flex flex-col justify-between md:gap-5 xl:gap-8 mx-auto md:py-14 py-7"
          : "hidden"
      } `}
    >
      <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] xl:ml-0 md:ml-8 capitalize w-fit">
        pricing
        <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black capitalize rounded-lg mx-3">
          plans
        </span>
      </h3>
      <div className=" w-full flex items-end md:gap-4 gap-2 md:-mt-4 mt-4">
        {pricingData.map((item, i) => (
          <div
            key={i}
            className={` bg-white flex-1 md:rounded-[40px] rounded-xl ${
              item.id === 2
                ? "2xl:h-[858px] xl:h-[750px] md:h-[640px] h-[280px]"
                : "2xl:h-[770px] xl:h-[690px] md:h-[580px] h-[250px]"
            } flex flex-col justify-between md:px-3 px-[6px] md:pt-3 pt-[6px] md:pb-14 pb-[6px]`}
          >
            <div
              className={` pricingCard-${
                item.id
              } flex flex-col xl:gap-3 md:gap-1 ${
                item.id === 2
                  ? "justify-end md:py-4 pt-7 pb-1"
                  : " justify-start md:py-8 pt-7 pb-1"
              } w-full md:rounded-[30px] rounded-lg xl:h-64 md:h-[200px] md:px-6 px-2`}
            >
              <span className=" fontGivonic 2xl:text-4xl xl:text-4xl md:text-3xl text-xs text-white font-semibold tracking-wider">
                #0{item.id}
              </span>
              <h3 className=" fontGivonic 2xl:text-5xl xl:text-4xl md:text-3xl text-xs text-white font-semibold xl:tracking-wide md:tracking-wider">
                {item.heading}
              </h3>
            </div>
            <h3
              className={`fontGivonic text-center tracking-wider ${
                item.id === 2 ? " md:text-5xl text-lg" : "md:text-4xl text-base"
              }  font-semibold`}
            >
              {item.price}
            </h3>
            <div className=" flex flex-col md:gap-2 gap-1">
              {item.features.map((feature, i) => (
                <div
                  key={i}
                  className=" flex md:justify-center justify-start mx-auto items-center md:gap-3 gap-1"
                >
                  <FiCheckCircle className=" md:text-lg text-[10px]" />
                  <p className=" md:text-base text-[7px] font-semibold ">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className=" flex flex-col md:w-[80%] w-full justify-center items-center gap-4 mx-auto">
              <button
                className=" w-full bg-[#ECECEC] xl:text-2xl md:text-lg text-[9px] font-medium md:rounded-[15px] rounded-lg md:py-3 py-2 capitalize transition-all duration-300 ease-in-out transform-gpu hover:bg-[#86e2ff] hover:scale-105"
                onClick={scrollToAbout}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
