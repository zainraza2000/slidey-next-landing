"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import clientProfile1 from "@/assets/images/testinomials/client-1.png";
import client1Company from "@/assets/images/testinomials/client-1-company.png";
import clientProfile2 from "@/assets/images/testinomials/client-2.png";
import client2Company from "@/assets/images/testinomials/client-2-company.png";
import clientProfile3 from "@/assets/images/testinomials/client-3.png";
import client3Company from "@/assets/images/testinomials/client-3-company.png";
import clientProfile4 from "@/assets/images/testinomials/client-4.png";
import nextArrow from "@/assets/images/testinomials/testinomial-arrow.png";
import TestimonialCard from "./TestimonialCard";

const clientData = [
  {
    id: 1,
    firstname: "Hamid",
    lastname: "Kabdovand",
    designation: "CEO, BallersApp",
    profileImg: clientProfile1,
    companyLogo: client1Company,
    message:
      "“Importance of making a great first impression and can accommodate any of your Presentation...",
  },
  {
    id: 2,
    firstname: "Ilan",
    lastname: "Danielli",
    designation: "CEO, BallersApp",
    profileImg: clientProfile2,
    companyLogo: client2Company,
    message:
      "“I have worked with several agencies in the past, PR firms and what not -at the same time I have worked with Slidey and…”",
  },
  {
    id: 3,
    firstname: "Jay",
    lastname: "Gandhi",
    designation: "CEO ESG Datapoint",
    profileImg: clientProfile3,
    companyLogo: client3Company,
    message:
      "“The Slidey team having been helping my startup team for over the last 18 months on various projects varying in difficulty and across the business departments. Their work is very important to us and is very professionally produced.",
  },
  {
    id: 4,
    firstname: "Diana",
    lastname: "Tsai",
    designation: "CoFounder Upwage",
    profileImg: clientProfile4,
    companyLogo: client2Company,
    message:
      "“The turnaround time for my project was unbelievable! I was initially worried about meeting the deadline, but Slidey exceeded my expectations and delivered the finished product on time and with rapid turnaround. I am beyond impressed with their efficiency and dedication.”",
  },
];

const TestimonialSection = () => {
  const [substate, setSubstate] = useState([0, 1, 2]);
  const [transitioning, setTransitioning] = useState(false);
  const [newSub, setNewSub] = useState(3);
  const handleSlider = () => {
    setTransitioning(true);
    setNewSub(substate[2] < clientData.length - 1 ? substate[2] + 1 : 0);
    setTimeout(() => {
      const updatedSubstate = substate.map((sub) =>
        sub < clientData.length - 1 ? sub + 1 : 0
      );
      setSubstate(updatedSubstate);
      setTransitioning(false);
    }, 300); // Change the timing according to your transition duration
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitioning(false);
    };
    window.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      window.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <section className=" relative bg-testinomial xl:w-4/5 md:w-[85%] w-[90%] flex flex-col justify-between items-center md:gap-8 xl:gap-8 gap-4 mx-auto md:pt-24 md:pb-14 pt-12 pb-7">
      <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] xl:ml-0 md:ml-5 w-full">
        Client
        <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black rounded-lg mx-3">
          Testimonials{" "}
        </span>
      </h3>
      {/* Cards */}
      <div className=" flex md:gap-6 gap-2">
        {/* Card */}
        {substate.map((sub, i) => (
          <TestimonialCard
            key={i}
            item={clientData[sub]}
            isBlur={i == 2}
            style={{
              transform: `translateX(${
                transitioning && i === 0
                  ? "-200%"
                  : transitioning && i >= 1
                  ? "-100%"
                  : "0"
              })`,
              transition: "transform 0.4s ease",
            }}
          />
        ))}
      </div>
      <button
        className=" absolute xl:bottom-[36%] md:bottom-[35%] bottom-[32%] 2xl:right-48 xl:right-16 md:right-24 right-8"
        onClick={handleSlider}
        disabled={transitioning}
      >
        <Image
          src={nextArrow}
          alt="nextArrow"
          className=" xl:w-[90px] md:w-[60px] w-8"
        />
      </button>
    </section>
  );
};

export default TestimonialSection;
