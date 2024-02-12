"use client";
import React, { useState } from "react";
import mainBg from "../assets/images/Vector.png";
import exploreImg from "../assets/images/explore-img.png";
import bdDownImg from "../assets/images/bg-down-4.png";
import Navbar from "./shared/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import heroSectionCardImg1 from "@/assets/images/herosection/herosection-card-1.png";
import heroSectionCardImg2 from "@/assets/images/herosection/herosection-card-2.png";
import heroSectionCardImg3 from "@/assets/images/herosection/herosection-card-3.png";
import heroSectionCardImg4 from "@/assets/images/herosection/herosection-card-4.png";
import heroSectionCardImg5 from "@/assets/images/herosection/herosection-card-5.png";
import heroSectionCardImg6 from "@/assets/images/herosection/herosection-card-6.png";
import slideyLogo from "@/assets/images/logo-white.png";
import ImageSecion from "./ImageHerosection";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const cardsVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const HeroSection = () => {
  const [currentCards, setCurrentCards] = useState(1);

  return (
    <>
      <div className="relative flex justify-center h-screen w-full xl:pt-11 md:pt-6 xl:px-20 md:px-8">
        <Image
          src={mainBg}
          alt="main bg"
          className=" absolute h-full 2xl:w-[90%]  md:w-[93%] mx-auto "
        />
        <Image
          src={exploreImg}
          className=" spinning-div absolute 2xl:w-[170px] xl:w-[150px] md:w-[120px] xl:-bottom-12 md:bottom-0 z-[2000000]"
          alt="explore Img"
          onClick={() => setCurrentCards((prev) => (prev === 1 ? 2 : 1))}
        />
        <div className=" text-white z-50 w-5/6 pt-8">
          <Navbar logo={slideyLogo} />
          <div className=" fontGivonic flex justify-between mt-20">
            <h1 className=" w-[40%] 2xl:text-6xl xl:text-5xl md:text-4xl font-semibold tracking-wider 2xl:leading-tight xl:leading-snug md:leading-normal">
              Designing Decks, Pitch Perfectly!
            </h1>
            <div className=" 2xl:w-[25%] xl:w-[35%] md:w-[40%] flex flex-col gap-3">
              <p className=" xl:text-xl md:text-lg font-normal text-[#959595] tracking-wider text-justify">
                Transforming Presentations into Powerful Narratives!
              </p>
              <button
                className=" xl:text-[22px] md:text-[20px] font-semibold text-[#090909] bg-[#86e2ff] rounded-[50px] py-3 px-6 tracking-wider
              transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
              >
                Claim Your Free Slide
              </button>
            </div>
          </div>
          <div className=" flex justify-between mt-20">
            <div className=" flex flex-col gap-3">
              <h3 className=" fontAntapani text-5xl font-semibold">5K+</h3>
              <p className=" fontGivonic text-[#959595]">
                Aesthetic Wonders Created
              </p>
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className=" fontAntapani text-5xl font-semibold">$70M</h3>
              <p className=" fontGivonic text-[#959595] text-end tracking-[10px] -mr-2">
                RAISED
              </p>
            </div>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className=" relative flex justify-center  xl:w-[860px] md:w-full mx-auto transition-transform transform"
          >
            {currentCards === 1 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  2xl:top-[120px] 2xl:hover:top-[110px] 2xl:left-20 2xl:hover:left-16 bg-lime-700 2xl:w-[270px] 2xl:h-[390px]
                  xl:top-12 xl:left-28 xl:hover:left-24 xl:w-[240px] xl:h-[350px]
                  md:top-12 md:left-28 md:hover:left-24 md:w-[240px] md:h-[350px]
                   rounded-[30px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                >
                  <ImageSecion imgSrc={heroSectionCardImg1} />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  2xl:top-12 2xl:hover:top-[38px] bg-orange-400 2xl:w-[310px] 2xl:h-[470px] 2xl:hover:w-[320px] 2xl:hover:h-[480px]
                  xl:-top-1 xl:hover:-top-2 xl:w-[280px] xl:h-[400px] xl:hover:w-[290px] xl:hover:h-[410px]
                  md:-top-1 md:hover:-top-2 md:w-[270px] md:h-[390px] md:hover:w-[280px] md:hover:h-[400px]
                   rounded-[30px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion imgSrc={heroSectionCardImg2} />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  2xl:top-[120px] 2xl:hover:top-[105px] 2xl:right-12 2xl:hover:right-10 bg-stone-600 2xl:w-[280px] 2xl:h-[420px]  2xl:hover:h-[435px]
                  xl:top-10 xl:hover:top-8 xl:right-24 xl:hover:right-20 xl:w-[250px] xl:h-[380px] xl:hover:h-[395px]
                  md:top-10 md:hover:top-8 md:right-20 md:hover:right-16  md:w-[250px] md:h-[380px] 
                    rounded-[30px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion imgSrc={heroSectionCardImg3} />
                </motion.li>
              </>
            )}
            {currentCards === 2 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  2xl:top-[120px] 2xl:hover:top-[110px] 2xl:left-20 2xl:hover:left-16 bg-lime-700 2xl:w-[270px] 2xl:h-[390px]
                  xl:top-12 xl:left-28 xl:hover:left-24 xl:w-[240px] xl:h-[350px]
                  md:top-12 md:left-28 md:hover:left-24 md:w-[240px] md:h-[350px]
                   rounded-[30px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                >
                  <ImageSecion imgSrc={heroSectionCardImg4} />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  2xl:top-12 2xl:hover:top-[38px] bg-orange-400 2xl:w-[310px] 2xl:h-[470px] 2xl:hover:w-[320px] 2xl:hover:h-[480px]
                  xl:-top-1 xl:hover:-top-2 xl:w-[280px] xl:h-[400px] xl:hover:w-[290px] xl:hover:h-[410px]
                  md:-top-1 md:hover:-top-2 md:w-[270px] md:h-[390px] md:hover:w-[280px] md:hover:h-[400px]
                   rounded-[30px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion imgSrc={heroSectionCardImg5} />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  2xl:top-[120px] 2xl:hover:top-[105px] 2xl:right-12 2xl:hover:right-10 bg-stone-600 2xl:w-[280px] 2xl:h-[420px]  2xl:hover:h-[435px]
                  xl:top-10 xl:hover:top-8 xl:right-24 xl:hover:right-20 xl:w-[250px] xl:h-[380px] xl:hover:h-[395px]
                  md:top-10 md:hover:top-8 md:right-20 md:hover:right-16  md:w-[250px] md:h-[380px] 
                    rounded-[30px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion imgSrc={heroSectionCardImg6} />
                </motion.li>
              </>
            )}
          </motion.ul>
        </div>
      </div>
      <Image
        src={bdDownImg}
        className=" relative w-full z-[2000] 2xl:-mt-[118px] xl:-mt-[92px] md:-mt-[102px] 2xl:px-[94px] xl:px-12"
        alt="bdDownImg"
      />
    </>
  );
};

export default HeroSection;
