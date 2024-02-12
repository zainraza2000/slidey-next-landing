'use client'
import Image from "next/image";
import React from "react";
import footerImg from "@/assets/images/footer-img.png";
import { RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { BiBasketball } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import topDesignImg from "@/assets/images/shared/topdesign.png";
import clutchImg from "@/assets/images/shared/clutch.png";
import trustPilotImg from "@/assets/images/shared/trustpilot.png";
import Link from "next/link";

const Footer = () => {
  const scrollToAbout = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className=" bg-[#0F0F16] mt-20">
      <div className="xl:w-4/5 md:w-[85%] flex flex-col justify-center items-center gap-16 mx-auto py-24">
        <div className=" grid grid-cols-3 gap-8">
          <div className="2xl:w-4/5 xl:w-[90%] flex flex-col gap-8">
            <p className=" xl:text-[40px] md:text-3xl xl:leading-snug md:leading-10 font-semibold text-[#fff] tracking-wider mb-0">
              Create Your Story With Us!
            </p>
            <button
              className=" xl:text-[22px] md:text-[18px] font-semibold text-[#090909] bg-[#86E2FF] rounded-[15px] py-3 xl:px-6 md:px-4 tracking-wider
            transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
            onClick={scrollToAbout}
            >
              Claim Your Free Slide
            </button>
            
          </div>
          <div className=" flex col-span-2">
            <div className=" flex-1 flex flex-col gap-6 capitalize">
              <h3 className=" text-lg text-[#fff] mb-0">Home</h3>
              <p className=" text-sm text-[#9F9F9F]">Services</p>
              <p className=" text-sm text-[#9F9F9F]">Our Vison</p>
              <p className=" text-sm text-[#9F9F9F]">Privicy Policy</p>
            </div>
            <div className=" flex-1 flex flex-col gap-6 capitalize">
              <h3 className=" text-lg text-[#fff] mb-0">Find Jobs</h3>
              <p className=" text-sm text-[#9F9F9F]">Careers</p>
            </div>
            <div className=" flex-1 flex flex-col justify-start gap-6 capitalize">
              <h3 className=" text-lg text-[#fff] mb-0">About Slidey</h3>
              <div className=" flex justify-start items-center gap-2">
                <TbMail className=" text-[28px] text-[#9F9F9F]" />
                <p className=" text-sm text-[#9F9F9F]">info@slideyllc.com</p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <HiOutlinePhone className=" text-[28px] text-[#9F9F9F]" />
                <p className=" text-sm text-[#9F9F9F]">+1(786)785-2112</p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <SlLocationPin className=" text-[36px] text-[#9F9F9F]" />
                <p className=" text-sm text-[#9F9F9F]">
                  1036 US Highway 1 #324 North Palm Beach, FL 33408
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-3 gap-8">
          <div className="flex flex-col justify-center gap-8">
            <h3 className=" text-lg text-[#fff] mb-0">Find Us On</h3>
            <div className=" flex items-center gap-5">
              <Link
                href={"/"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
              >
                <RiInstagramLine className=" text-[26px]" />
              </Link>
              <Link
                href={"/"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
              >
                <FaPinterestP className=" text-[26px]" />
              </Link>
              <Link
                href={"/"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
              >
                <RiLinkedinFill className=" text-[26px]" />
              </Link>
              <Link
                href={"/"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
              >
                <BiBasketball className=" text-[26px]" />
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex  items-center gap-8">
            <Image src={topDesignImg} width={105} height={99} className=" xl:w-[105px] xl:h-[99px] md:w-[80px] md:h-[70px] " />
            <Image src={clutchImg} width={135} height={39} className=" xl:w-[135px] xl:h-[39px] md:w-[90px] md:h-[20px]" />
            <Image src={trustPilotImg}  width={172} height={82} className=" xl:w-[172px] xl:h-[82px] md:w-[120px] md:h-[50px]"/>
          </div>
        </div>
        <Image src={footerImg} alt="footerImg" className="2xl:h-[300px] md:h-[250px]" />
      </div>
    </section>
  );
};

export default Footer;
