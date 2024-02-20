import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { craftData } from "@/data";
import CraftCards from "./CraftCards";

const CraftSliderLTR = ({ setCurrentImg, setOpen }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    autoplay: true,
    // speed: 5000,
    autoplaySpeed: 2800,
    swipeToSlide: true,
    className: "center",
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
    <Slider {...settings} className="">
      {craftData?.map(
        (item, i) =>
          item.type === 1 && (
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

export default CraftSliderLTR;
