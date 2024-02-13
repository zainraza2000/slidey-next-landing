"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "@/assets/images/clientsection/client2/image1.png";
import image2 from "@/assets/images/clientsection/client2/image2.png";
import image3 from "@/assets/images/clientsection/client2/image3.png";
import image4 from "@/assets/images/clientsection/client2/image4.png";
import image5 from "@/assets/images/clientsection/client2/image5.png";
import image6 from "@/assets/images/clientsection/client2/image6.png";
import image7 from "@/assets/images/clientsection/client2/image7.png";
import image8 from "@/assets/images/clientsection/client2/image8.png";
import image9 from "@/assets/images/clientsection/client2/image9.png";
import Image from "next/image";

const ClientSiderRTL = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 2000,
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
    <Slider {...settings}>
      <div className="slide">
        <Image src={image1} alt="logo" className=" mx-auto w-8 h-8 md:w-16 md:h-16 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image2} alt="logo" className=" mx-auto w-12 h-5 md:w-24 md:h-12 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image3} alt="logo" className=" mx-auto w-12 h-4 md:w-28 md:h-10 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image4} alt="logo" className=" mx-auto w-8 h-8 md:w-16 md:h-20 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image5} alt="logo" className=" mx-auto w-10 h-5 md:w-20 md:h-12 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image6} alt="logo" className=" mx-auto w-10 h-8 md:w-20 md:h-16 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image7} alt="logo" className=" mx-auto w-8 h-8 md:w-20 md:h-16 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image8} alt="logo" className=" mx-auto w-10 h-5 md:w-24 md:h-12 xl:w-auto xl:h-auto" />
      </div>
      <div className="slide">
        <Image src={image9} alt="logo" className=" mx-auto w-10 h-5 md:w-20 md:h-10 xl:w-auto xl:h-auto" />
      </div>
    </Slider>
  );
};

export default ClientSiderRTL;
