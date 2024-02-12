"use client";
import React from "react";

// import CountUp from "react-countup";
import { CountUp } from 'use-count-up'

const Counting = () => {
  return (
    <div className=" w-[80%] flex justify-around items-center rounded-xl py-14 px-10 bg-[#F8F8F8] mx-auto mt-24">
      <div className=" flex flex-col gap-3">
        <h3 className="fontGivonic text-[62px] font-bold leading-[60px] uppercase">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={15000}
            duration={5}
          />{" "}
          <span>+</span>
        </h3>
        <p className=" fontGivonic text-2xl font-medium capitalize">
          Project Delivered
        </p>
      </div>
      <div className=" flex flex-col gap-3">
        <h3 className="fontGivonic text-[62px] font-bold leading-[60px] uppercase">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={500}
            duration={5}
          />{" "}
          <span>+</span>
        </h3>
        <p className=" fontGivonic text-2xl font-medium capitalize">Clients</p>
      </div>
      <div className=" flex flex-col gap-3">
        <h3 className="fontGivonic text-[62px] font-bold leading-[60px] uppercase">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={64}
            duration={5}
          />{" "}
          <span>%</span>
        </h3>
        <p className=" fontGivonic text-2xl font-medium capitalize">
          Retention Rate
        </p>
      </div>
      <div className=" flex flex-col gap-3">
        <h3 className="fontGivonic text-[62px] font-bold leading-[60px] capitalize">
          <CountUp
            isCounting
            easing="easeOutCubic"
            start={1}
            end={4}
            duration={5}
          />{" "}
          <span>+ Years</span>
        </h3>
        <p className=" fontGivonic text-2xl font-medium capitalize">Served</p>
      </div>
    </div>
  );
};

export default Counting;
