"use client";
import React, { useState } from "react";

import proven1 from "@/assets/images/proven/proven-1.png";
import proven2 from "@/assets/images/proven/proven-2.png";
import upwageLogo from "@/assets/images/proven/upwage-logo.png";
import smartrydeLogo from "@/assets/images/proven/smartryde-logo.png";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProvenSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };
  return (
    <Slider {...settings} className="  w-full">
      <div className=" slide px-8">
        <div className=" w-full flex gap-2 justify-between items-center">
          <div className=" flex flex-col justify-center 2xl:gap-7 xl:gap-4 md:gap-2">
            <p className="fontGivonic text-[#000000] 2xl:text-[40px] xl:text-[28px] md:text-xl font-semibold md:leading-10">
              Real Startups,
              <br />
              Real Success!
            </p>
            <p className="fontGivonic text-[#4D4D4D] xl:text-xl md:text-[15px] font-normal">
              Secured Seed funding
            </p>
            <p className="fontInter xl:text-[70px] md:text-[55px] font-extrabold">
              $7.2 Million
            </p>
            <p className="fontGivonic text-[#4D4D4D] xl:text-xl md:text-[15px] font-normal">
              after a{" "}
              <spen className="text-[#000000] text-semibold"> Slidey</spen>{" "}
              makeover.
            </p>
            <Image
              src={upwageLogo}
              alt="upwage-logo"
              className=" xl:w-60 md:w-52"
            />
          </div>
          <div className=" w-[55%]">
            <Image src={proven1} alt="proven1" />
          </div>
        </div>
      </div>
      <div className=" slide px-8">
        <div className=" w-full flex gap-2 justify-between items-center">
          <div className=" w-[40%] flex flex-col justify-center 2xl:gap-7 xl:gap-4 md:gap-2">
            <p className="fontGivonic text-[#000000] 2xl:text-[40px] xl:text-[28px] md:text-xl font-semibold md:leading-10">
              Real Startups,
              <br />
              Real Success!
            </p>
            <p className="fontGivonic text-[#4D4D4D] xl:text-xl md:text-[15px] font-normal">
              Secured Seed funding
            </p>
            <p className="fontInter xl:text-[70px] md:text-[55px] font-extrabold">
              $3.4 Million
            </p>
            <p className="fontGivonic text-[#4D4D4D] xl:text-xl md:text-[15px] font-normal">
              after a{" "}
              <spen className="text-[#000000] text-semibold"> Slidey</spen>{" "}
              makeover.
            </p>
            <Image
              src={smartrydeLogo}
              alt="smartrydeLogo"
              className=" xl:w-60 md:w-52"
            />
          </div>
          <div className=" w-[55%]">
            <Image src={proven2} alt="proven2" />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ProvenSlider;
