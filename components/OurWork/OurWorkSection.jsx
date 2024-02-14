"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import icon1 from "@/assets/svgs/craft-icon-1.svg";
import icon2 from "@/assets/svgs/craft-icon-2.svg";
import downIcon from "@/assets/svgs/recent-down.svg";
import filterIcon from "@/assets/svgs/filter-icon.svg";
import craftArrowIcon from "@/assets/svgs/craft-arrow.svg";
import workCardIcon1 from "@/assets/svgs/workCard-icon-1.svg";
import workCardIcon2 from "@/assets/svgs/workCard-icon-2.svg";
import AllWorksType from "./AllWorksType";
import { ourWorksData } from "@/data";

const workTypes = [
  "all",
  "Pitch Decks",
  "Presentation",
  "Sponsorship Proposals",
  "Branding",
  "Web Designs",
];

const OurWorkSection = () => {
  const [selectedWorkType, setSelectedWorkType] = useState(0);
  const [currentWorkType, setCurrentWorkType] = useState(null);

  const handleWorkType = (id) => {
    setSelectedWorkType(id);
    const filterWorkType = ourWorksData.filter((item) => item.type === id);
    console.log(filterWorkType);
    setCurrentWorkType(filterWorkType);
  };
  
  return (
    <>
      <section className="fontGivonic bg-[#0F0F16]">
        <div className="w-4/5 flex flex-col justify-between gap-16 mx-auto py-28">
          {/* Heading */}
          <div className="flex items-center justify-center gap-4">
            <Image src={icon1} alt="icon1" className="mb-2" />
            <h3 className="fontGivonic text-[52px] font-semibold text-white">
              The
              <span className=" pt-2 px-[10px] pb-0 bg-[#86e2ff] text-black rounded-lg mx-3">
                Slidey{" "}
              </span>{" "}
              Craft
            </h3>
            <Image src={icon2} alt="icon2" className="mb-2" />
          </div>
          {/* Recent */}
          <div className=" flex justify-between items-center gap-8">
            <button className=" flex items-center justify-center gap-3 w-fit text-white border border-[#fff] rounded-3xl px-5 py-2">
              <span>Recent</span>
              <Image src={downIcon} alt="downIcon" />
            </button>
            <div className=" w-4/5 flex justify-evenly rounded-xl bg-[#ffffff0d] text-white text-lg font-semibold p-2">
              {workTypes.map((item, i) => (
                <p
                  className={` py-2 px-2 mb-0  cursor-pointer tracking-wider hover:text-[#86e2ff] blur-bg capitalize transition-all duration-300 ease-in-out transform-gpu ${
                    selectedWorkType === i && "text-[#86e2ff] blur-bg-active"
                  }`}
                  style={{ marginBottom: "0px" }}
                  onClick={() => handleWorkType(i)}
                >
                  {item}
                </p>
              ))}
            </div>
            <button className=" flex items-center justify-center gap-3 w-fit text-white border border-[#fff] rounded-3xl px-5 py-2">
              <Image src={filterIcon} alt="filterIcon" />
              <span>filter</span>
            </button>
          </div>
          {/* WORKS SECTION*/}
          <div className=" flex flex-col gap-10">
            {selectedWorkType === 0 ? (
              <AllWorksType />
            ) : (
              <div className=" grid grid-cols-3 md:gap-5 xl:gap-8">
                {currentWorkType.map((item, i) => (
                  <div
                    key={i}
                    className="ourWorkTypeCard relative mx-auto cursor-pointer"
                  >
                    <Image
                      src={item?.thumbnailSrc}
                      width={350}
                      height={350}
                      alt="craftImg1"
                    />
                    <div class="hover-div">
                      <p className=" text-[22px] font-semibold">
                        {item?.title}
                      </p>
                      <div className=" flex gap-2">
                        <Image src={workCardIcon1} alt="workCardIcon1" />
                        <Image src={workCardIcon2} alt="workCardIcon2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* View All */}
          <button className=" flex items-center justify-center gap-3 w-fit bg-[#86e2ff] rounded-3xl px-5 py-2 mx-auto">
            <span>View All</span>
            <Image src={craftArrowIcon} alt="downIcon" />
          </button>
        </div>
      </section>
    </>
  );
};

export default OurWorkSection;
