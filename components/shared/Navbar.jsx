import React from "react";
import Image from "next/image";
import Link from "next/link";
import trustPilotImage from "@/assets/images/shared/trustpilot.png";

const Navbar = ({ logo, scrollToAbout }) => {
  return (
    <nav className=" flex justify-between items-center">
      <Image src={logo} alt="logo" className=" md:w-auto md:h-auto w-16 h-5" />
      <ul className=" flex md:items-end items-center md:gap-10 gap-3 fontAntapani text-base font-normal">
        <Link href={"https://www.trustpilot.com/review/slideyllc.com"}>
          <Image src={trustPilotImage} width={120} className=" md:w-[120px] w-14" />
        </Link>
        <button
          className=" bg-[#191922] md:text-base text-xs rounded-lg  text-white md:rounded-[20px] md:pt-2 md:pb-3 md:px-6 px-2 py-2 "
          onClick={scrollToAbout}
        >
          Contact Us
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
