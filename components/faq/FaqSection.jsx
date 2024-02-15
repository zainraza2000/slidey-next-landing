"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const FaqData = [
  {
    question: "How fast can you provide a first draft?",
    answer:
      "Typically, the creation of a preliminary pitch deck design requires approximately 3 days. Furthermore, we have the capability to provide multiple variations of the initial slides, allowing you to select the option that aligns most effectively with your stylistic preferences.",
  },
  {
    question: "Will I be able to edit the final deck myself?",
    answer:
      "The ultimate rendition of the presentation will be provided in the PPT file format that is fully customizable, allowing you to make changes as and when required.",
  },
  {
    question: "Will my pitch deck be kept confidential?",
    answer:
      "Yes we normally sign an NDA provided by the client before we proceed",
  },
  {
    question: "How can I give feedback on the project?",
    answer:
      "There are various means through which you can offer your feedback, including Whatsapp messages, email and phone.",
  },
  {
    question: "Can you assist with research and content creation?",
    answer:
      "Yes, Apart from our team's design specialists, we also have proficient copywriters at our disposal. They are capable of conducting research, supplementing material, polishing language, condensing, and structuring it appropriately.",
  },
  {
    question: "What's the average pitch deck design cost?",
    answer:
      "The charges vary and are customized based on several factors such as the number of slides, timeline, intricacy of the assignment, and the requirement to incorporate additional materials. We will require your project requirements before providing a quote.",
  },
  {
    question: "If I want you to change something, will I pay for revisions?",
    answer:
      "No, There are no charges for any modifications made to pitch decks.",
  },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleAccordionClick = (index) => {
    let newOpenIndexes;

    newOpenIndexes = openIndexes.map((item, i) => {
      return i === index ? !openIndexes[i] : false;
    });

    setOpenIndexes(newOpenIndexes);
  };
  return (
    <>
      <div className="fontGivonic mx-auto md:mb-28 mb-14 md:mt-14 mt-7  w-4/5 flex flex-col md:gap-10 gap-8">
        {/* FAQ */}
        <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] w-full">
          Frequently Asked
          <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] text-black rounded-lg md:mx-3 mx-1">
            Questions
          </span>
        </h3>
        {/* ACCORDIANCE */}
        <div className="w-full flex flex-col gap-3 space-y-1 ">
          {FaqData.map((item, i) => (
            <div className=" xl:py-7 md:py-4 py-[10px] md:px-10 px-4 bg-[#E0F7FF]  md:rounded-[20px] rounded-lg cursor-pointer"
            onClick={() => handleAccordionClick(i)}>
              <button
                className={`flex w-full md:items-start items-center justify-between text-left transition-all duration-300 ease-in-out ${
                  openIndexes[i] && "text-[#1F8090]"
                }`}
                data-track="faq-button-how-do-i-sign-up?"
                type="button"
                
              >
                <span className={` xl:text-[22px] md:text-lg text-sm font-semibold md:leading-7 leading-5 `}>
                  {item.question}
                </span>
                <span className="md:ml-6 ml-1  flex md:h-7 h-full items-center transition-all duration-300 ">
                  {openIndexes[i] ? (
                    <IoClose className=" text-2xl text-[#6497A8] transition-all duration-300 " />
                  ) : (
                    <FaPlus className=" text-[22px] text-[#6497A8] transition-all duration-300 " />
                  )}
                </span>
              </button>
              {openIndexes[i] && (
                <p
                  className={`md:mt-5 mt-3 xl:text-lg md:text-[15px] text-[12px] font-normal text-justify md:leading-7 leading-4 transition-all duration-300 ease-in-out ${
                    openIndexes[i] ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
