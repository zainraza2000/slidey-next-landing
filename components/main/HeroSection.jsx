"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// COMPONENTS
import Navbar from "@/components/shared/Navbar";
import ImageSecion from "@/components/shared/ImageHerosection";

// IMAGES
import heroSectionCardImg1 from "@/assets/images/herosection/herosection-card-1.png";
import heroSectionModalImg1 from "@/assets/images/herosection/herosection-modal-1.png";
import heroSectionCardImg2 from "@/assets/images/herosection/herosection-card-2.png";
import heroSectionModalImg2 from "@/assets/images/herosection/herosection-modal-2.png";
import heroSectionCardImg3 from "@/assets/images/herosection/herosection-card-3.png";
import heroSectionModalImg3 from "@/assets/images/herosection/herosection-modal-3.png";
import heroSectionCardImg4 from "@/assets/images/herosection/herosection-card-4.png";
import heroSectionCardImg5 from "@/assets/images/herosection/herosection-card-5.png";
import heroSectionCardImg6 from "@/assets/images/herosection/herosection-card-6.png";
import slideyLogo from "@/assets/images/logo-white.png";
import exploreImg from "@/assets/images/explore-img.png";
import bdDownImg from "@/assets/images/bg-down-4.png";
import mainBg from "@/assets/images/Vector.png";
import ImageModal from "../shared/ImageModal";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [currentCards, setCurrentCards] = useState(1);
  const scrollToAbout = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const [currentImg, setCurrentImg] = useState();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="relative flex justify-center 2xl:h-[950px] xl:h-[650px] md:h-[630px] h-[720px] w-full 2xl:pt-11 xl:pt-8 md:pt-6 pt-4 2xl:px-20 xl:px-16 md:px-8 px-6">
        <Image
          src={mainBg}
          alt="main bg"
          className=" absolute 2xl:w-[90%]  md:w-[93%] w-[90%] md:h-[96%] h-[40%]  mx-auto "
        />
        <Image
          src={exploreImg}
          className=" spinning-div absolute 2xl:w-[140px] xl:w-[130px] md:w-[110px] 2xl:-bottom-0 xl:-bottom-8 md:bottom-0 bottom-[59%] w-[40px] z-[2000000]"
          alt="explore Img"
          onClick={() => setCurrentCards((prev) => (prev === 1 ? 2 : 1))}
        />
        <div className=" text-white z-50 md:w-5/6 w-[90%] md:pt-8 pt-4">
          <Navbar logo={slideyLogo} scrollToAbout={scrollToAbout} />
          <div className=" fontGivonic flex justify-between 2xl:mt-20 xl:mt-14 md:mt-10 mt-4">
            <h1 className=" md:w-[40%] w-[50%] 2xl:text-6xl xl:text-[30px] md:text-[24px] text-sm font-semibold md:tracking-wider tracking-normal 2xl:leading-tight xl:leading-snug md:leading-tight">
              Designing Decks, Pitch Perfectly!
            </h1>
            <div className=" 2xl:w-[25%] xl:w-[27%] md:w-[35%] w-[48%] flex flex-col md:gap-3 gap-2">
              <p className=" xl:text-base md:text-[15px] text-[8px] font-normal text-[#959595] tracking-wider text-justify">
                Transforming Presentations into Powerful Narratives!
              </p>
              {pathname === "/pitchdeck" ? (
                <button
                  className=" 2xl:text-[22px] xl:text-[18px] md:text-[16px] text-[10px] md:font-semibold font-medium text-[#090909] bg-[#86e2ff] rounded-[50px] md:py-3 md:px-6 py-2 px-2 md:tracking-wider tracking-normal
              transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
                  onClick={scrollToAbout}
                >
                  Claim Your Free Slide
                </button>
              ) : (
                <Link
                  href={"/contactus"}
                  className=" 2xl:text-[22px] xl:text-[18px] md:text-[16px] text-[10px] md:font-semibold font-medium text-[#090909] bg-[#86e2ff] rounded-[50px] md:py-3 md:px-6 py-2 px-2 md:tracking-wider tracking-normal text-center
              transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
                >
                  Claim Your Free Slide
                </Link>
              )}
            </div>
          </div>
          <div className=" flex justify-between 2xl:mt-20 xl:mt-14 md:mt-6 mt-4">
            <div className=" flex flex-col 2xl:gap-3 md:gap-1 gap-0">
              <h3 className="  2xl:text-5xl md:text-[32px] text-[13px] font-semibold">
                5K+
              </h3>
              <p className=" fontGivonic 2xl:text-base md:text-sm text-[7px] text-[#959595]">
                Aesthetic Wonders Created
              </p>
            </div>
            <div className=" flex flex-col 2xl:gap-3 md:gap-1 gap-0">
              <h3 className="  2xl:text-5xl md:text-[32px] text-[13px] font-semibold">
                $200M
              </h3>
              <p className=" fontGivonic 2xl:text-base md:text-sm text-[7px] text-[#959595] text-end md:tracking-[10px] tracking-[3px] md:-mr-2 -mr-1">
                RAISED
              </p>
            </div>
          </div>
          {/* DESKTOP */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className=" relative md:flex hidden justify-center  xl:w-[860px] md:w-full mx-auto transition-transform transform"
          >
            {currentCards === 1 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  3xl:top-[120px] 3xl:hover:top-[110px] 3xl:left-20 3xl:hover:left-16 bg-lime-700 3xl:w-[270px] 3xl:h-[390px]
                  2xl:top-[40px] 2xl:hover:top-[50px] 2xl:left-20 2xl:hover:left-16 2xl:w-[270px] 2xl:h-[400px]
                  xl:-top-5 xl:left-[120px] xl:hover:left-28 xl:w-[235px] xl:h-[340px]
                  md:top-[30px] md:left-36 md:hover:left-32 md:w-[190px] md:h-[270px]
                  top-5 left-9 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg1}
                    modalSrc={heroSectionModalImg1}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  3xl:top-12 3xl:hover:top-[38px] bg-orange-400 3xl:w-[310px] 3xl:h-[470px] 3xl:hover:w-[320px] 3xl:hover:h-[480px]
                  2xl:-top-2 2xl:hover:-top-3 2xl:w-[300px] 2xl:h-[440px] 2xl:hover:w-[310px] 2xl:hover:h-[450px]
                  xl:-top-[60px] xl:hover:-top-[65px] xl:w-[270px] xl:h-[350px] xl:hover:w-[280px] xl:hover:h-[360px]
                  md:-top-1 md:hover:-top-2 md:w-[220px] md:h-[300px] md:hover:w-[230px] md:hover:h-[310px]
                  top-1  w-[90px] h-[130px] 
                   md:rounded-[30px] rounded-[12px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg2}
                    modalSrc={heroSectionModalImg2}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  3xl:top-[120px] 3xl:hover:top-[105px] 3xl:right-12 3xl:hover:right-10 bg-stone-600 3xl:w-[280px] 3xl:h-[420px]  3xl:hover:h-[435px]
                  2xl:top-[40px] 2xl:hover:top-[50px] 2xl:right-14 2xl:hover:right-12 2xl:w-[280px] 2xl:h-[420px]  2xl:hover:h-[430px]
                  xl:-top-5 xl:hover:-top-6 xl:right-24 xl:hover:right-[90px] xl:w-[240px] xl:h-[350px] xl:hover:h-[360px]
                  md:top-[30px] md:hover:top-7 md:right-36 md:hover:right-32  md:w-[190px] md:h-[270px] 
                  top-5 right-9 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg3}
                    modalSrc={heroSectionModalImg3}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </motion.li>
              </>
            )}
            {currentCards === 2 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  3xl:top-[120px] 3xl:hover:top-[110px] 3xl:left-20 3xl:hover:left-16 bg-lime-700 3xl:w-[270px] 3xl:h-[390px]
                  2xl:top-[40px] 2xl:hover:top-[50px] 2xl:left-20 2xl:hover:left-16 2xl:w-[270px] 2xl:h-[400px]
                  xl:-top-5 xl:left-[120px] xl:hover:left-28 xl:w-[235px] xl:h-[340px]
                  md:top-[30px] md:left-36 md:hover:left-32 md:w-[190px] md:h-[270px]
                  top-5 left-9 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg4}
                    modalSrc={heroSectionCardImg4}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  3xl:top-12 3xl:hover:top-[38px] bg-orange-400 3xl:w-[310px] 3xl:h-[470px] 3xl:hover:w-[320px] 3xl:hover:h-[480px]
                  2xl:-top-2 2xl:hover:-top-3 2xl:w-[300px] 2xl:h-[440px] 2xl:hover:w-[310px] 2xl:hover:h-[450px]
                  xl:-top-[60px] xl:hover:-top-[65px] xl:w-[270px] xl:h-[350px] xl:hover:w-[280px] xl:hover:h-[360px]
                  md:-top-1 md:hover:-top-2 md:w-[220px] md:h-[300px] md:hover:w-[230px] md:hover:h-[310px]
                  top-1  w-[90px] h-[130px] 
                   md:rounded-[30px] rounded-[12px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg5}
                    modalSrc={heroSectionCardImg5}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute 
                  3xl:top-[120px] 3xl:hover:top-[105px] 3xl:right-12 3xl:hover:right-10 bg-stone-600 3xl:w-[280px] 3xl:h-[420px]  3xl:hover:h-[435px]
                  2xl:top-[40px] 2xl:hover:top-[50px] 2xl:right-14 2xl:hover:right-12 2xl:w-[280px] 2xl:h-[420px]  2xl:hover:h-[430px]
                  xl:-top-5 xl:hover:-top-6 xl:right-24 xl:hover:right-[90px] xl:w-[240px] xl:h-[350px] xl:hover:h-[360px]
                  md:top-[30px] md:hover:top-7 md:right-36 md:hover:right-32  md:w-[190px] md:h-[270px] 
                  top-5 right-9 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg6}
                    modalSrc={heroSectionCardImg6}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </motion.li>
              </>
            )}
          </motion.ul>
          {/* MOBILE */}
          <ul className=" relative md:hidden flex justify-center  xl:w-[860px] md:w-full mx-auto transition-transform transform">
            {currentCards === 1 && (
              <>
                <li
                  className="absolute 
                  ml:top-5 ml:left-16 ml:w-[80px] ml:h-[110px]
                  top-5 left-10 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-2deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg1}
                    modalSrc={heroSectionModalImg1}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </li>
                <li
                  className="absolute 
                  top-1  w-[90px] h-[130px] 
                   md:rounded-[30px] rounded-[12px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg2}
                    modalSrc={heroSectionModalImg2}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </li>
                <li
                  className="absolute 
                  ml:top-5 ml:right-16 ml:w-[80px] ml:h-[110px]
                  top-5 right-10 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg3}
                    modalSrc={heroSectionModalImg3}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </li>
              </>
            )}
            {currentCards === 2 && (
              <>
                <li
                  className="absolute 
                  ml:top-5 ml:left-16 ml:w-[80px] ml:h-[110px]
                  top-5 left-10 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-2deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg4}
                    modalSrc={heroSectionCardImg4}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </li>
                <li
                  className="absolute 
                  top-1  w-[90px] h-[130px] 
                   md:rounded-[30px] rounded-[12px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg5}
                    modalSrc={heroSectionCardImg5}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </li>
                <li
                  className="absolute 
                  ml:top-5 ml:right-16 ml:w-[80px] ml:h-[110px]
                  top-5 right-10 w-[80px] h-[110px]
                  md:rounded-[30px] rounded-[12px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion
                    imgSrc={heroSectionCardImg6}
                    modalSrc={heroSectionCardImg6}
                    setCurrentImg={setCurrentImg}
                    setOpen={setOpen}
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Image
        src={bdDownImg}
        className=" relative md:block w-full z-[2000] 3xl:-mt-[160px] 2xl:-mt-[152px] xl:-mt-[112px] md:-mt-[102px] -mt-[462px] 3xl:px-[0px] 2xl:px-[0px] xl:px-[44px] md:px-0"
        alt="bdDownImg"
      />
      <ImageModal
        img={currentImg}
        setOpen={setOpen}
        open={open}
        cancelButtonRef={cancelButtonRef}
        customClass={"2xl:w-[40vw] xl:w-[60vw] md:w-[70vw] rounded-lg"}
      />
    </>
  );
};

export default HeroSection;
