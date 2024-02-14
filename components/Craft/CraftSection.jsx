"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";

// ICONS
import icon1 from "@/assets/svgs/craft-icon-1.svg";
import icon2 from "@/assets/svgs/craft-icon-2.svg";

// COMPONENTS
import ImageModal from "../shared/ImageModal";
import CraftCards from "../shared/craft/CraftCards";
import OurWorkCards from "../shared/ourwork/OurWorkCards";

// DATA
import { craftData, ourWorksData } from "@/data";

const workTypes = [
  "all",
  "Pitch Decks",
  "Presentation",
  "Sponsorship Proposals",
  "Branding",
  "Web Designs",
];

const CraftSection = () => {
  const pathname = usePathname();

  // CRAFT LANDING PAGE FUNTIONAILITY
  const [currentImg, setCurrentImg] = useState();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

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
          {pathname === "/pitchdeck" ? (
            <CraftCards
              craftData={craftData}
              setCurrentImg={setCurrentImg}
              setOpen={setOpen}
            />
          ) : (
            <OurWorkCards
              workTypes={workTypes}
              selectedWorkType={selectedWorkType}
              currentWorkType={currentWorkType}
              handleWorkType={handleWorkType}
            />
          )}
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
