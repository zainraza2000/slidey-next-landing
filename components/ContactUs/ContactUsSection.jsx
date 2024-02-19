"use client";
import Image from "next/image";
import React, { useState } from "react";

import contactTabletImg from "@/assets/images/contactus/contactus-img.png";
import { usePathname } from "next/navigation";
import axios from "axios";

const callContactUsApi = async (backendFormData) => {
  const res = await axios.post(
    `http://localhost:3000/api/send-email`,
    backendFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
};

const ContactUsSection = () => {
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendFormData = new FormData();
    backendFormData.append("name", formData.name);
    backendFormData.append("email", formData.email);
    backendFormData.append("tel", formData.tel);
    backendFormData.append("message", formData.message);
    // Append file only if it's not null
    if (formData.file !== null) {
      backendFormData.append("file", formData.file);
    }

    try {
      const res = await callContactUsApi(backendFormData);
      console.log(res);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div
      className={`${
        pathname === "/pitchdeck" || pathname === "/contactus"
          ? "md:w-[80%] w-[90%] flex justify-between md:gap-10 gap-2 md:pt-10 md:mt-20 mt-10 pt-4 bgContactUs mx-auto"
          : "hidden"
      } `}
      id="contact"
    >
      <div className=" xl:w-[60%] md:w-[50%] w-[55%] flex flex-col md:gap-10 gap-6">
        <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] capitalize">
          Claim Your{" "}
          <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86E2FF] rounded-lg">
            Free
          </span>
          <br /> Slide
        </h3>
        <p className=" xl:w-[65%] md:w-[90%] w-[90%] fontGivonic xl:text-xl md:text-[15px] text-[10px] font-medium">
          Get A Free Sample Slide Within 24 Hrs and Witness the Subtle Art Of
          Presenting!
        </p>
        <Image src={contactTabletImg} alt="contactTabletImg" className="" />
      </div>
      <form
        className="xl:w-[40%] md:w-[50%] w-[45%] flex flex-col justify-start items-end xl:gap-7 md:gap-4 gap-2"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col md:gap-3  gap-0 w-full">
          <label
            htmlFor="name"
            className="fontGivonic xl:text-xl md:text-lg text-[8px] md:font-semibold font-normal md:tracking-[1.5px] tracking-normal"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className=" contactInputShadow md:text-lg text-[9px]  font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 py-[5px] px-4 md:rounded-lg rounded focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col md:gap-3 gap-0 w-full">
          <label
            htmlFor="email"
            className="fontGivonic xl:text-xl md:text-lg text-[8px] md:font-semibold font-normal md:tracking-[1.5px] tracking-normal"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className=" contactInputShadow md:text-lg text-[9px]  font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 py-[5px] px-4 md:rounded-lg rounded focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col md:gap-3 gap-0 w-full">
          <label
            htmlFor="tel"
            className="fontGivonic xl:text-xl md:text-lg text-[8px] md:font-semibold font-normal md:tracking-[1.5px] tracking-normal"
          >
            Phone Number (Optional)
          </label>
          <input
            type="text"
            id="tel"
            name="tel"
            // required
            className=" contactInputShadow md:text-lg text-[9px]  font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 py-[5px] px-4 md:rounded-lg rounded focus:outline-none"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col md:gap-3 gap-0 w-full">
          <label
            htmlFor="message"
            className="fontGivonic xl:text-xl md:text-lg text-[8px] md:font-semibold font-normal md:tracking-[1.5px] tracking-normal"
          >
            What's on your mind
          </label>
          <input
            type="text"
            id="message"
            name="message"
            required
            className=" contactInputShadow md:text-lg text-[9px]  font-medium tracking-[1.5px] bg-white xl:py-4 md:py-3 py-[5px] px-4 md:rounded-lg rounded focus:outline-none"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <input
          name="file"
          id="file"
          type="file"
          className=" w-full xl:text-lg md:text-base text-[8px] font-medium text-[#7A7A7A] cursor-pointer focus:outline-none"
          onChange={handleFileChange}
        />
        <div className="flex flex-col xl:gap-8 md:gap-5 gap-2 w-full xl:mt-4 md:mt-2">
          <p className="fontGivonic xl:text-xl md:text-[15px] text-[6px] font-medium capitalize">
            get An instant quote from our customer support or submit the form
            for more details!
          </p>
          <button className=" contactInputShadow xl:text-xl md:text-lg text-[9px] md:font-medium font-medium md:tracking-[1.5px] tracking-normal bg-[#86E2FF] md:py-[14px] py-[6px] px-4 md:rounded-lg rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsSection;
