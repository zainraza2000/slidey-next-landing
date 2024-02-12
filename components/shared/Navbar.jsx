import React from "react";
import Image from "next/image";
import Link from "next/link";
import trustPilotImage from "@/assets/images/shared/trustpilot.png";

const Navbar = ({ logo }) => {
  return (
    <nav className=" flex justify-between items-center">
      <Image src={logo} alt="logo" className="" />
      <ul className=" flex items-end gap-10 fontAntapani text-base font-normal">
        <Link href={"https://www.trustpilot.com/review/slideyllc.com"}>
          <Image src={trustPilotImage} width={120} className="" />
        </Link>
        <Link
          href={"/contactus"}
          className=" bg-[#191922] text-white rounded-[20px] pt-2 pb-3 px-6 "
        >
          Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
