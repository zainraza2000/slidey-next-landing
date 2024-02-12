import Image from "next/image";
import React from "react";

import contactTabletImg from "@/assets/images/contactus/contactus-img.png";

const ContactUsSection = () => {
  return (
    <div
      className="w-[80%] flex justify-between gap-10 pb-20 pt-10 bgContactUs mx-auto"
      id="contact"
    >
      <div className=" xl:w-[60%] md:w-[50%] flex flex-col gap-10 ">
        <h3 className="fontGivonic xl:text-[52px] md:text-[36px] font-semibold xl:leading-[60px] md:leading-[50px] capitalize">
          Claim Your{" "}
          <span className=" pt-2 px-[10px] pb-0 bg-[#86E2FF] rounded-lg">
            Free
          </span>
          <br /> Slide
        </h3>
        <p className=" xl:w-[65%] md:w-[90%] fontGivonic xl:text-xl md:text-[15px] font-medium">
          Get A Free Sample Slide Within 24 Hrs and Witness the Subtle Art Of
          Presenting!
        </p>
        <Image src={contactTabletImg} alt="contactTabletImg" className="" />
      </div>
      <form className="xl:w-[40%] md:w-[50%] flex flex-col justify-start items-end xl:gap-7 md:gap-4">
        <div className=" flex flex-col gap-3 w-full">
          <label
            htmlFor="fullname"
            className="fontGivonic xl:text-xl md:text-lg font-semibold tracking-[1.5px]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            className=" contactInputShadow text-lg font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 px-4 rounded-lg focus:outline-none"
          />
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <label
            htmlFor="email"
            className="fontGivonic xl:text-xl md:text-lg font-semibold tracking-[1.5px]"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className=" contactInputShadow xl:text-lg md:text-base font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 px-4 rounded-lg focus:outline-none"
          />
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <label
            htmlFor="phone"
            className="fontGivonic xl:text-xl md:text-lg font-semibold tracking-[1.5px]"
          >
            Phone Number (Optional)
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            // required
            className=" contactInputShadow xl:text-lg md:text-base font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 px-4 rounded-lg focus:outline-none"
          />
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <label
            htmlFor="message"
            className="fontGivonic xl:text-xl md:text-lg font-semibold tracking-[1.5px]"
          >
            What's on your mind
          </label>
          <input
            type="text"
            id="message"
            name="message"
            required
            className=" contactInputShadow xl:text-lg md:text-base font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 px-4 rounded-lg focus:outline-none"
          />
        </div>
        <input
          name="file"
          type="file"
          className=" w-full xl:text-lg md:text-base font-medium text-[#7A7A7A] cursor-pointer focus:outline-none"
        />
        <div className="flex flex-col xl:gap-8 md:gap-5 w-full xl:mt-4 md:mt-2">
          <p className="fontGivonic xl:text-xl md:text-[15px] font-medium capitalize">
            get An instant quote from our customer support or submit the form
            for more details!
          </p>
          <button className=" contactInputShadow xl:text-xl md:text-lg font-medium tracking-[1.5px] bg-[#86E2FF] py-[14px] px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsSection;
