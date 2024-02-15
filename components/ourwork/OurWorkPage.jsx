"use client";
import { useState } from "react";
import Image from "next/image";
import downIcon from "@/assets/svgs/recent-down-black.svg";
import filterIcon from "@/assets/svgs/filter-icon-black.svg";
import workCardIcon1 from "@/assets/svgs/workCard-icon-1.svg";
import workCardIcon2 from "@/assets/svgs/workCard-icon-2.svg";
import { ourWorksData } from "@/data";

const workTypes = [
  "all",
  "Pitch Decks",
  "Presentation",
  "Sponsorship Proposals",
  "Branding",
  "Web Designs",
];
const OurWorkPage = () => {
  // OUR WORK FUNTIONAILITY
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
      {/* Recent */}
      <div className=" flex justify-between items-center xl:gap-8 md:gap-4 gap-[6px]">
      <button className=" flex items-center justify-center md:gap-3 gap-1 w-fit text-black border border-[#000] rounded-3xl md:px-5 px-3 md:py-2 py-1">
          <span className=" xl:text-base md:text-xs text-[6px]">Recent</span>
          <Image src={downIcon} alt="downIcon" className=" md:w-auto w-[6px]" />
        </button>
        <div className=" w-4/5 flex md:justify-evenly justify-center text-white text-lg font-normal md:p-2 py-0 px-0">
          {workTypes.map((item, i) => (
            <p
              //   py-2 px-2 mb-0  cursor-pointer tracking-wider hover:text-[#86e2ff] blur-bg capitalize transition-all duration-300 ease-in-out transform-gpu
              className={` cursor-pointer xl:text-base md:text-xs text-[5.2px] md:py-2 py-0 xl:px-2 px-[3px] mb-0 capitalize text-black ${
                selectedWorkType === i
                  ? "text-[#86e2ff] ourWorkTabHeadingActive "
                  : "ourWorkTabHeading"
              }`}
              style={{ marginBottom: "0px" }}
              onClick={() => handleWorkType(i)}
            >
              {item}
            </p>
          ))}
        </div>
        <button className="flex items-center justify-center md:gap-3 gap-1 w-fit text-black border border-[#000] rounded-3xl md:px-5 px-3 md:py-2 py-1">
          <Image src={filterIcon} alt="filterIcon" className=" xl:w-auto md:w-3 w-[6px]" />
          <span className=" xl:text-base md:text-xs text-[6px]">filter</span>
        </button>
      </div>
      {/* WORKS SECTION*/}
      <div className=" flex flex-col gap-10">
        {selectedWorkType === 0 ? (
          <div className=" grid grid-cols-3 md:gap-5 xl:gap-8 gap-3 md:px-0 px-2">
            {ourWorksData?.map((item, i) => (
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
                  <p className=" text-[20px] font-normal">{item?.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=" grid grid-cols-3 md:gap-5 xl:gap-8 gap-3 md:px-0 px-2">
            {currentWorkType?.map((item, i) => (
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
                  <p className=" text-[20px] font-normal">{item?.title}</p>
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
    </>
  );
};

export default OurWorkPage;
