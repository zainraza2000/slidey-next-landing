"use client";
import React from "react";
import ProvenSlider from "./ProvenSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProvenSection = () => {
  return (
    <section className=" xl:w-4/5 md:w-[90%] w-[85%] flex flex-col justify-between items-center md:gap-5 xl:gap-8 gap-3 mx-auto md:mb-28 mb-[90px]">
      <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] w-full md:px-8 px-0">
        The
        <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black rounded-lg mx-3">
          Proven{" "}
        </span>{" "}
        Impact
      </h3>
      <ProvenSlider />
    </section>
  );
};

export default ProvenSection;
