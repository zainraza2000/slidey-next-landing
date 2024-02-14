"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import icon1 from "@/assets/svgs/craft-icon-1.svg";
import icon2 from "@/assets/svgs/craft-icon-2.svg";
import downIcon from "@/assets/svgs/recent-down.svg";
import craftArrowIcon from "@/assets/svgs/craft-arrow.svg";
import workCardIcon1 from "@/assets/svgs/workCard-icon-1.svg";
import workCardIcon2 from "@/assets/svgs/workCard-icon-2.svg";

import { craftData } from "@/data";
import ImageModal from "../shared/ImageModal";

const CraftSection = () => {
  const [currentImg, setCurrentImg] = useState();
  
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <section className=" bg-[#0F0F16]">
        <div className="xl:w-4/5 md:w-[85%] flex flex-col justify-between xl:gap-16 md:gap-12 gap-5 mx-auto xl:py-28 md:py-20 py-10">
          {/* Heading */}
          <div className="flex items-center justify-center md:gap-4 gap-3">
            <Image src={icon1} alt="icon1" className="mb-2 md:w-auto w-10" />
            <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] md:tracking-wide xl:tracking-normal text-white">
              The
              <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black rounded-lg mx-3">
                Slidey{" "}
              </span>{" "}
              Craft
            </h3>
            <Image src={icon2} alt="icon2" className="mb-2 md:w-auto w-4" />
          </div>
          {/* Cards*/}
          <div className=" grid grid-cols-3 md:gap-5 xl:gap-8 gap-3 md:px-0 px-5">
            {craftData.map((item, i) => (
              <div
                key={i}
                className="ourWorkTypeCard relative mx-auto cursor-pointer"
                onClick={() => {
                  setCurrentImg(item?.modalSrc), setOpen(true);
                }}
              >
                <Image
                  src={item?.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                  className=" xl:w-[350px] xl:h-[350px] md:w-[320px] md:h-[240px]"
                />
                <div class="hover-div">
                  <p className=" text-[22px] font-semibold">{item.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All */}
          {/* <button className=" flex items-center justify-center gap-3 w-fit bg-[#86e2ff] rounded-3xl px-5 py-2 mx-auto">
            <span>View All</span>
            <Image src={craftArrowIcon} alt="downIcon" />
          </button> */}
        </div>
      </section>
      <ImageModal
        img={currentImg}
        setOpen={setOpen}
        open={open}
        cancelButtonRef={cancelButtonRef}
      />
    </>
  );
};

export default CraftSection;
