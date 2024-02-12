import React from "react";

const RankingSection = () => {
  return (
    <section className="xl:w-4/5 md:w-[85%] flex justify-between items-center md:gap-5 xl:gap-8 mx-auto mt-28">
      <div className="bg-ranking-1 w-[385px] xl:h-[458px] md:h-[310px] flex flex-col justify-end py-10 xl:px-9 md:px-6 xl:gap-4 md:gap-2
      transition-all duration-300 ease-in-out transform-gpu hover:scale-105">
        <p className="fontGivonic text-white xl:text-2xl md:text-base font-semibold">
          Maximize Saving
        </p>
        <h2 className="fontGivonic text-white xl:text-7xl md:text-4xl font-bold">
          40%
        </h2>
        <p className="fontGivonic text-white 2xl:text-2xl xl:text-xl md:text-sm xl:tracking-normal md:tracking-wider leading-snug font-semibold">
          Reduced costs compared to standard rates{" "}
        </p>
      </div>
      <div className="bg-ranking-2 w-[385px] xl:h-[458px] md:h-[310px] flex flex-col justify-end py-10 xl:px-9 md:px-6 xl:gap-4 md:gap-2
      transition-all duration-300 ease-in-out transform-gpu hover:scale-105">
        <p className="fontGivonic text-white xl:text-2xl md:text-base font-semibold">
          Enhance Sales Potential
        </p>
        <h2 className="fontGivonic text-white xl:text-7xl md:text-4xl font-bold">
          3X
        </h2>
        <p className="fontGivonic text-white 2xl:text-2xl xl:text-xl md:text-sm xl:tracking-normal md:tracking-wider leading-snug font-semibold">
          Increased likelihood of securing deals
        </p>
      </div>
      <div className="bg-ranking-3 w-[385px] xl:h-[458px] md:h-[310px] flex flex-col justify-end py-10 xl:px-9 md:px-6 xl:gap-4 md:gap-2
      transition-all duration-300 ease-in-out transform-gpu hover:scale-105">
        <p className="fontGivonic text-white xl:text-2xl md:text-base font-semibold">
          Customer Satisfaction
        </p>
        <h2 className="fontGivonic text-white xl:text-7xl md:text-4xl font-bold">
          4.9/5
        </h2>
        <p className="fontGivonic text-white 2xl:text-2xl xl:text-xl md:text-sm xl:tracking-normal md:tracking-wider leading-snug font-semibold">
          Average rating from our clients
        </p>
      </div>
    </section>
  );
};

export default RankingSection;
