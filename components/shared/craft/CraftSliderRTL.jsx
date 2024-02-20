"use client";
import React, { useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { craftData } from "@/data";
import CraftCards from "./CraftCards";

const CraftSliderRTL = ({ setCurrentImg, setOpen, open }) => {
  let sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    // speed: 5000,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    className: "center",
    cssEase: "linear",
    rtl: true,
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
  useEffect(() => {
    console.log(open);
    open ? sliderRef.slickPause() : sliderRef.slickPlay();
    console.log(settings);
  }, [open]);

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings} className="">
      {craftData?.map(
        (item, i) =>
          item.type === 2 && (
            <CraftCards
              key={i}
              item={item}
              setCurrentImg={setCurrentImg}
              setOpen={setOpen}
            />
          )
      )}
    </Slider>
  );
};

export default CraftSliderRTL;
