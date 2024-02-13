import React from "react";

const RankingSection = () => {
  return (
    <section className="xl:w-4/5 md:w-[85%] w-[90%] md:flex md:justify-between md:items-center grid grid-cols-3 gap-3 md:gap-5 xl:gap-8 mx-auto md:mt-28 mt-8">
      <div
        className="bg-ranking-1 md:w-[385px] w-full h-[130px] xl:h-[458px] md:h-[310px] flex flex-col justify-end md:pt-10 md:pb-10 pt-10 pb-2 xl:px-9 md:px-6 px-[10px] xl:gap-4 md:gap-2
       md:rounded-none rounded-lg transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
      >
        <p className="fontGivonic text-white xl:text-2xl md:text-base text-[6px] md:font-semibold font-thin">
          Maximize Saving
        </p>
        <h2 className="fontGivonic text-white xl:text-7xl md:text-4xl text-sm font-bold">
          40%
        </h2>
        <p className="fontGivonic text-white 2xl:text-2xl xl:text-xl md:text-sm text-[6px] xl:tracking-normal md:tracking-wider md:leading-snug leading-[9px] md:font-semibold font-thin">
          Reduced costs compared to standard rates{" "}
        </p>
      </div>
      <div
        className="bg-ranking-2 md:w-[385px] w-full h-[130px] xl:h-[458px] md:h-[310px] flex flex-col justify-end md:pt-10 md:pb-10 pt-10 pb-2 xl:px-9 md:px-6 px-[10px] xl:gap-4 md:gap-2
        md:rounded-none rounded-lg transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
      >
        <p className="fontGivonic text-white xl:text-2xl md:text-base text-[6px] md:font-semibold font-thin">
          Enhance Sales Potential
        </p>
        <h2 className="fontGivonic text-white xl:text-7xl md:text-4xl text-sm font-bold">
          3X
        </h2>
        <p className="fontGivonic text-white 2xl:text-2xl xl:text-xl md:text-sm text-[6px] xl:tracking-normal md:tracking-wider md:leading-snug leading-[9px] md:font-semibold font-thin">
          Increased likelihood of securing deals
        </p>
      </div>
      <div
        className="bg-ranking-3 md:w-[385px] w-full h-[130px] xl:h-[458px] md:h-[310px] flex flex-col justify-end md:pt-10 md:pb-10 pt-10 pb-2 xl:px-9 md:px-6 px-[10px] xl:gap-4 md:gap-2
        md:rounded-none rounded-lg transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
      >
        <p className="fontGivonic text-white xl:text-2xl md:text-base text-[6px] md:font-semibold font-thin">
          Customer Satisfaction
        </p>
        <h2 className="fontGivonic text-white xl:text-7xl md:text-4xl text-sm font-bold">
          4.9/5
        </h2>
        <p className="fontGivonic text-white 2xl:text-2xl xl:text-xl md:text-sm text-[6px] xl:tracking-normal md:tracking-wider md:leading-snug leading-[9px] md:font-semibold font-thin">
          Average rating from our clients
        </p>
      </div>
    </section>
  );
};

export default RankingSection;
