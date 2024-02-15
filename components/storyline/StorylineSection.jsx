import Image from "next/image";
import React from "react";
import presentationImg from "@/assets/images/storyline/presentation.png";
import pitchdeckImg from "@/assets/images/storyline/pitchdeck.png";
import brandingImg from "@/assets/images/storyline/branding.png";
import websitedesignImg from "@/assets/images/storyline/websitedesign.png";

const StorylineSection = () => {
  return (
    <section className=" bg-storyline xl:w-4/5 md:w-[90%] w-[100%] flex flex-col justify-between items-center md:gap-4 gap-2 mx-auto md:py-28 md:px-0 px-4 py-12">
      <div className="grid grid-cols-2 md:gap-4 gap-[6px] w-full">
        <div className=" flex flex-col md:gap-10 gap-[14px] justify-between ">
          <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] md:ml-12 xl:ml-0">
            Visual{" "}
            <span className=" pt-2 px-[10px] md:pb-0 pb-1 bg-[#86e2ff] rounded-lg">
              Storytelling
            </span>
            <br /> Redefined
          </h3>
          <div className="flex xl:gap-6 md:gap-3 gap-1 bg-white md:rounded-[30px] rounded-lg 2xl:p-8 md:p-5 py-2 px-2">
            <div className=" flex flex-col 2xl:gap-6 xl:gap-4 md:gap-2">
              <h3 className="fontGivonic xl:text-[28px] md:text-[20px] text-xs text-[#B1DC00]  font-semibold">
                Presentation Design
              </h3>
              <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[4px] text-[#4D4D4D] text-justify">
                Whether it's a corporate meeting or a keynote address, our
                presentation designs are engineered to engage. We combine
                aesthetic elegance with clarity, ensuring your message not only
                reaches but also resonates with your audience.
              </p>
            </div>
            <Image
              src={presentationImg}
              alt="presentationImg"
              className=" md:rounded-[20px] rounded-md xl:w-full md:w-[160px] w-[50px] xl:h-full md:h-[170px] h-[70px]"
            />
          </div>
        </div>
        <div className="  flex flex-col 2xl:gap-6 md:gap-4 gap-1 bg-white md:rounded-[30px] rounded-lg 2xl:p-8 md:py-3 py-2 md:px-5 px-2">
          <Image
            src={pitchdeckImg}
            alt="pitchdeckImg"
            className=" md:rounded-[20px] rounded-md w-full xl:h-[243px] md:h-[220px]"
          />
          <h3 className="fontGivonic xl:text-[28px] md:text-[20px] text-xs text-[#B25DFF] font-semibold">
            Pitch Deck Design
          </h3>
          <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[5px] text-[#4D4D4D] text-justify">
            Transform your big ideas into compelling pitch decks. Our expertly
            crafted designs are tailored to captivate investors, weaving your
            vision into a persuasive narrative that resonates and convinces.
          </p>
        </div>
      </div>
      {/* BOTTOM */}
      <div class="grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-4 md:gap-4 gap-[6px] w-full xl:h-[310px] md:h-[230px]">
        <div className="2xl:col-span-2 flex flex-col 2xl:gap-6 xl:gap-4 md:gap-2 bg-white  md:rounded-[30px] rounded-lg 2xl:p-8 md:p-5 py-2 px-2 xl:h-full md:h-[230px]">
          <h3 className="fontGivonic xl:text-[28px] md:text-[20px] text-xs text-[#F659DF] font-semibold">
            Branding Design
          </h3>
          <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[4px] text-[#4D4D4D] text-justify">
            Whether it's a corporate meeting or a keynote address, our
            presentation designs are engineered to engage. We combine aesthetic
            elegance with clarity, ensuring your message not only reaches but
            also resonates with your audience.
          </p>
        </div>
        <Image
          src={brandingImg}
          alt="brandingImg"
          className=" md:rounded-[20px] rounded-md xl:h-[310px] h-[96px] md:h-[230px] w-full"
        />
        <div className="2xl:col-span-3 md:col-span-2 col-span-2 flex xl:gap-6 md:gap-3 gap-1 bg-white md:rounded-[30px] rounded-lg 2xl:p-8 md:p-5 py-2 px-2 xl:h-full md:h-[230px]">
          <div className=" flex flex-col 2xl:gap-6 xl:gap-4 md:gap-2">
            <h3 className="fontGivonic xl:text-[28px] md:text-[20px] text-xs text-[#5D3FFF] font-semibold">
              Website Design
            </h3>
            <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[4px] text-[#4D4D4D] text-justify">
              Whether it's a corporate meeting or a keynote address, our
              presentation designs are engineered to engage. We combine
              aesthetic elegance with clarity, ensuring your message not only
              reaches but also resonates with your audience.
            </p>
          </div>
          <Image
            src={websitedesignImg}
            alt="websitedesignImg"
            className=" md:rounded-[20px] rounded-md  xl:w-full md:w-[160px] w-[50px] xl:h-full md:h-full h-[70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default StorylineSection;
