"use client";
import Image from "next/image";
import React from "react";
import footerImg from "@/assets/images/footer-img.webp";
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
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const scrollToAbout = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="w-full bg-[#0F0F16] mt-20">
      <div className="xl:w-4/5 md:w-[85%] flex flex-col justify-center items-center md:gap-16 gap-12 mx-auto md:py-24 py-20 md:px-0 px-6">
        <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-10">
          <div className="2xl:w-4/5 xl:w-[90%] flex flex-col md:gap-8 gap-4">
            <p className=" xl:text-[40px] md:text-3xl text-lg xl:leading-snug md:leading-10 font-semibold text-[#fff] tracking-wider mb-0">
              Create Your Story With Us!
            </p>
            {pathname === "/pitchdeck" ? (
              <button
                className=" xl:text-[22px] md:text-[18px] text-sm md:font-semibold font-medium text-[#090909] bg-[#86E2FF] md:rounded-[15px] rounded-lg py-3 xl:px-6 md:px-4 md:tracking-wider tracking-normal
            transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
                onClick={scrollToAbout}
              >
                Claim Your Free Slide
              </button>
            ) : (
              <Link
                href={"/contactus"}
                className=" xl:text-[22px] md:text-[18px] text-sm md:font-semibold font-medium text-[#090909] bg-[#86E2FF] md:rounded-[15px] rounded-lg py-3 xl:px-6 md:px-4 md:tracking-wider tracking-normal text-center
            transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
              >
                Claim Your Free Slide
              </Link>
            )}
          </div>
          <div className=" flex md:col-span-2">
            <div className=" flex-1 flex flex-col md:gap-6 gap-2 capitalize">
              <h3 className=" md:text-lg text-base text-[#fff] mb-0">Home</h3>
              <p className=" md:text-sm text-xs text-[#9F9F9F]">Services</p>
              <p className="md:text-sm text-xs text-[#9F9F9F]">Our Vison</p>
              <p className="md:text-sm text-xs text-[#9F9F9F]">
                Privicy Policy
              </p>
            </div>
            <div className=" flex-1 flex flex-col md:gap-6 gap-2 capitalize">
              <h3 className=" md:text-lg text-base text-[#fff] mb-0">
                Find Jobs
              </h3>
              <p className="md:text-sm text-xs text-[#9F9F9F]">Careers</p>
            </div>
            <div className=" flex-1 flex flex-col justify-start md:gap-6 gap-2 capitalize">
              <h3 className=" md:text-lg text-base text-[#fff] mb-0">
                About Slidey
              </h3>
              <div className=" flex justify-start items-center gap-2">
                <TbMail className=" md:text-[28px] text-base text-[#9F9F9F]" />
                <p className="md:text-sm text-xs text-[#9F9F9F] lowercase">
                  info@slidey.io
                </p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <HiOutlinePhone className=" md:text-[28px] text-base text-[#9F9F9F]" />
                <p className="md:text-sm text-xs text-[#9F9F9F]">
                  +1(786)785-2112
                </p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <SlLocationPin className=" md:text-[36px] text-4xl text-[#9F9F9F]" />
                <p className="md:text-sm text-xs text-[#9F9F9F]">
                  1036 US Highway 1 #324 North Palm Beach, FL 33408
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col justify-center md:gap-8 gap-4">
            <h3 className=" text-lg text-[#fff] mb-0">Find Us On</h3>
            <div className=" flex items-center gap-5">
              <Link
                href={"https://www.instagram.com/slideyllc/"}
                target="_blank"
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
                aria-label="instagram"
              >
                <RiInstagramLine className=" text-[26px]" />
              </Link>
              <Link
                href={"https://www.pinterest.com/slideyllc/"}
                target="_blank"
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
                aria-label="pinterest"
              >
                <FaPinterestP className=" text-[26px]" />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/slideyllc/"}
                target="_blank"
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3 transition-all duration-300 ease-in-out transform-gpu hover:scale-110"
                aria-label="linkedin"
              >
                <RiLinkedinFill className=" text-[26px]" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 flex  items-center gap-8">
            <Image
              src={topDesignImg}
              width={105}
              height={99}
              alt="topDesignImg"
              className=" xl:w-[105px] xl:h-[99px] md:w-[80px] md:h-[70px] w-16"
            />
            <Image
              src={clutchImg}
              width={135}
              height={39}
              alt="clutchImg"
              className=" xl:w-[135px] xl:h-[39px] md:w-[90px] md:h-[20px] w-16"
            />
            <Image
              src={trustPilotImg}
              width={172}
              height={82}
              alt="trustPilotImg"
              className=" xl:w-[172px] xl:h-[82px] md:w-[120px] md:h-[50px] w-20"
            />
          </div>
        </div>
        <Image
          src={footerImg}
          alt="footerImg"
          className="2xl:h-[300px] md:h-[250px]"
        />
      </div>
    </section>
  );
};

export default Footer;
