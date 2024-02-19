"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import trustPilotImage from "@/assets/images/shared/trustpilot.png";
import { usePathname } from "next/navigation";

const Navbar = ({ logo, scrollToAbout }) => {
  const pathname = usePathname();
  return (
    <nav className=" flex justify-between items-center">
      <Link href={pathname === "/pitchdeck" ? "/pitchdeck" : "/"}>
        <Image
          src={logo}
          alt="logo"
          className=" md:w-[124px] md:h-[40%] w-16 h-5"
        />
      </Link>
      <div
        className={` flex ${
          pathname === "/pitchdeck"
            ? "md:items-end items-center "
            : "items-center"
        } md:gap-10 gap-3 text-base font-normal`}
      >
        {pathname === "/pitchdeck" ? (
          <Link
            href={"https://www.trustpilot.com/review/slideyllc.com"}
            target="_blank"
          >
            <Image
              src={trustPilotImage}
              alt="trustPilotImage"
              width={120}
              className=" md:w-[120px] w-14"
            />
          </Link>
        ) : (
          <>
            <Link href={"/"} className="md:text-base text-[10px]">
              Home
            </Link>
            <Link href={"/ourwork"} className="md:text-base text-[10px]">
              Our Work
            </Link>
          </>
        )}
        {pathname === "/pitchdeck" ? (
          <button
            className=" bg-[#191922] md:text-base text-[10px] rounded-lg  text-white md:rounded-[20px] md:pt-2 md:pb-3 md:px-6 px-2 py-1 "
            onClick={scrollToAbout}
          >
            Contact Us
          </button>
        ) : (
          <Link
            href={"/contactus"}
            className=" bg-[#191922] md:text-base text-[10px] rounded-lg  text-white md:rounded-[20px] md:pt-2 md:pb-3 md:px-6 px-2 py-1 "
          >
            Contact Us
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
