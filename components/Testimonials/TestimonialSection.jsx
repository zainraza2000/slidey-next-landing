"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import nextArrow from "@/assets/images/testinomials/testinomial-arrow.png";
import TestimonialCard from "./TestimonialCard";
import { clientData } from "@/data";

const TestimonialSection = () => {
  const [substate, setSubstate] = useState([0, 1, 2]);
  const [transitioning, setTransitioning] = useState(false);
  const [newSub, setNewSub] = useState(3);
  const handleSlider = () => {
    setTransitioning(true);
    setNewSub(substate[2] < clientData.length - 1 ? substate[2] + 1 : 0);
    setTimeout(() => {
      const updatedSubstate = substate.map((sub) =>
        sub < clientData.length - 1 ? sub + 1 : 0
      );
      setSubstate(updatedSubstate);
      setTransitioning(false);
    }, 300); // Change the timing according to your transition duration
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitioning(false);
    };
    window.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      window.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <section className=" relative bg-testinomial xl:w-4/5 md:w-[85%] w-[90%] flex flex-col justify-between items-center md:gap-8 xl:gap-8 gap-4 mx-auto md:pt-24 md:pb-14 pt-12 pb-7">
      <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] xl:ml-0 md:ml-5 w-full">
        Client
        <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black rounded-lg md:mx-3 mx-1">
          Testimonials{" "}
        </span>
      </h3>
      {/* Cards */}
      <div className=" flex md:gap-6 gap-2">
        {/* Card */}
        {substate.map((sub, i) => (
          <TestimonialCard
            key={i}
            item={clientData[sub]}
            isBlur={i == 2}
            style={{
              transform: `translateX(${
                transitioning && i === 0
                  ? "-200%"
                  : transitioning && i >= 1
                  ? "-100%"
                  : "0"
              })`,
              transition: "transform 0.4s ease",
            }}
          />
        ))}
      </div>
      <button
        className=" absolute xl:bottom-[36%] md:bottom-[35%] bottom-[32%] 2xl:right-48 xl:right-16 md:right-24 right-8"
        onClick={handleSlider}
        disabled={transitioning}
      >
        <Image
          src={nextArrow}
          alt="nextArrow"
          className=" xl:w-[90px] md:w-[60px] w-8"
        />
      </button>
    </section>
  );
};

export default TestimonialSection;
