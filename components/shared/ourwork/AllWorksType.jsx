import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import workCardIcon1 from "@/assets/svgs/workCard-icon-1.svg";
import workCardIcon2 from "@/assets/svgs/workCard-icon-2.svg";

import { ourWorksData } from "@/data";

const AllWorksType = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      {/*  Pitch Deck Design */}
      <h3 className=" text-[28px] text-white font-semibold capitalize">
        Pitch Deck Design
      </h3>
      <Slider {...settings}>
        {ourWorksData.map(
          (item, i) =>
            item.type === 1 && (
              <div key={i} className="slide ourWorkTypeCard relative mx-auto cursor-pointer">
                <Image
                  src={item.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                />
                <div class="allwork-hover-div">
                  <p className=" text-[22px] font-semibold">{item.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            )
        )}
      </Slider>
      {/*  Presentation Design */}
      <h3 className=" text-[28px] text-white font-semibold">
        Presentation Design
      </h3>
      <Slider {...settings}>
        {ourWorksData.map(
          (item, i) =>
            item.type === 2 && (
              <div key={i} className="slide ourWorkTypeCard relative mx-auto cursor-pointer">
                <Image
                  src={item.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                />
                <div class="allwork-hover-div">
                  <p className=" text-[22px] font-semibold">{item.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            )
        )}
      </Slider>
      {/*  Sponsorship Design */}
      <h3 className=" text-[28px] text-white font-semibold">
        Sponsorship Design
      </h3>
      <Slider {...settings}>
        {ourWorksData.map(
          (item, i) =>
            item.type === 3 && (
              <div key={i} className="slide ourWorkTypeCard relative mx-auto cursor-pointer">
                <Image
                  src={item.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                />
                <div class="allwork-hover-div">
                  <p className=" text-[20px] font-normal">{item.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            )
        )}
      </Slider>
      {/*  Branding Design */}
      <h3 className=" text-[28px] text-white font-semibold">Branding Design</h3>
      <Slider {...settings}>
        {ourWorksData.map(
          (item, i) =>
            item.type === 4 && (
              <div key={i} className="slide ourWorkTypeCard relative mx-auto cursor-pointer">
                <Image
                  src={item.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                />
                <div class="allwork-hover-div">
                  <p className=" text-[22px] font-semibold">{item.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            )
        )}
      </Slider>
      {/*  Website Design */}
      <h3 className=" text-[28px] text-white font-semibold">Website Design</h3>
      <Slider {...settings}>
        {ourWorksData.map(
          (item, i) =>
            item.type === 5 && (
              <div key={i} className="slide ourWorkTypeCard relative mx-auto cursor-pointer">
                <Image
                  src={item.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                />
                <div class="allwork-hover-div">
                  <p className=" text-[22px] font-semibold">{item.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            )
        )}
      </Slider>
    </>
  );
};

export default AllWorksType;
