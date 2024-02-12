import { pricingData } from "@/data";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const PricingSection = () => {
  return (
    <section className=" bg-pricing xl:w-4/5 md:w-[90%] flex flex-col justify-between md:gap-5 xl:gap-8 mx-auto py-28">
      <h3 className="fontGivonic xl:text-[52px] md:text-[36px] font-semibold xl:leading-[60px] md:leading-[50px] xl:ml-0 md:ml-8 capitalize w-fit">
        pricing
        <span className=" pt-2 px-[10px] pb-0 bg-[#86e2ff] text-black capitalize rounded-lg mx-3">
          plans
        </span>
      </h3>
      <div className=" w-full flex items-end gap-4 -mt-10">
        {pricingData.map((item, i) => (
          <div
            key={i}
            className={` bg-white flex-1 rounded-[40px] ${
              item.id === 2
                ? "2xl:h-[858px] xl:h-[750px] md:h-[640px]"
                : "2xl:h-[770px] xl:h-[690px] md:h-[580px]"
            } flex flex-col justify-between px-3 pt-3 pb-14`}
          >
            <div
              className={` pricingCard-${item.id} flex flex-col xl:gap-3 md:gap-1 ${
                item.id === 2 ? "justify-end py-4" : " justify-start py-8"
              } w-full rounded-[30px] xl:h-64 px-6`}
            >
              <span className=" fontGivonic 2xl:text-4xl xl:text-4xl md:text-[32px] text-white font-semibold tracking-wider">
                #0{item.id}
              </span>
              <h3 className=" fontGivonic 2xl:text-5xl xl:text-4xl md:text-[32px] text-white font-semibold xl:tracking-wide md:tracking-wider">
                {item.heading}
              </h3>
            </div>
            <h3
              className={`fontGivonic text-center tracking-wider ${
                item.id === 2 ? " text-5xl" : "text-4xl"
              }  font-semibold`}
            >
              {item.price}
            </h3>
            <div className=" flex flex-col gap-2">
              {item.features.map((feature, i) => (
                <div
                  key={i}
                  className=" flex justify-center items-center gap-3"
                >
                  <FiCheckCircle className=" text-lg" />
                  <p className="  font-semibold ">{feature}</p>
                </div>
              ))}
            </div>
            <div className=" flex flex-col w-[80%] justify-center items-center gap-4 mx-auto">
              <button className=" w-full bg-[#ECECEC] xl:text-2xl md:text-lg font-medium rounded-[15px] py-3 capitalize transition-all duration-300 ease-in-out transform-gpu hover:bg-[#86e2ff] hover:scale-105">
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
