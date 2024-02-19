"use client";
import React from "react";

// import CountUp from "react-countup";
import { CountUp } from 'use-count-up'

const Counting = () => {
  return (
    <div className=" md:w-[80%] w-[90%] flex justify-around items-center rounded-xl md:py-14 py-6 md:px-10 px-2 bg-[#F8F8F8] mx-auto md:mt-24 mt-12">
      <div className=" flex flex-col md:gap-3 gap-[6px]">
        <h3 className="fontGivonic md:text-[62px] text-sm font-bold md:leading-[60px] leading-none uppercase">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={15000}
            duration={5}
          />{" "}
          <span>+</span>
        </h3>
        <p className=" fontGivonic md:text-2xl text-[10px] font-medium capitalize">
          Project Delivered
        </p>
      </div>
      <div className=" flex flex-col md:gap-3 gap-[6px]">
        <h3 className="fontGivonic md:text-[62px] text-sm  font-bold md:leading-[60px] leading-none uppercase">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={500}
            duration={5}
          />{" "}
          <span>+</span>
        </h3>
        <p className=" fontGivonic md:text-2xl text-[10px] font-medium capitalize">Clients</p>
      </div>
      <div className=" flex flex-col md:gap-3 gap-[6px]">
        <h3 className="fontGivonic md:text-[62px] text-sm  font-bold md:leading-[60px] leading-none uppercase">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={64}
            duration={5}
          />{" "}
          <span>%</span>
        </h3>
        <p className=" fontGivonic md:text-2xl text-[10px] font-medium capitalize">
          Retention Rate
        </p>
      </div>
      <div className=" flex flex-col md:gap-3 gap-[6px]">
        <h3 className="fontGivonic md:text-[62px] text-sm  font-bold md:leading-[60px] leading-none capitalize">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={4}
            duration={5}
          />{" "}
          <span>+ Years</span>
        </h3>
        <p className=" fontGivonic md:text-2xl text-[10px] font-medium capitalize">Served</p>
      </div>
    </div>
  );
};

export default Counting;
