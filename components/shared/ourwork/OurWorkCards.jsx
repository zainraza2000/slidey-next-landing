import Image from "next/image";
import downIcon from "@/assets/svgs/recent-down.svg";
import filterIcon from "@/assets/svgs/filter-icon.svg";
import craftArrowIcon from "@/assets/svgs/craft-arrow.svg";
import workCardIcon1 from "@/assets/svgs/workCard-icon-1.svg";
import workCardIcon2 from "@/assets/svgs/workCard-icon-2.svg";
import AllWorksType from "@/components/shared/ourwork/AllWorksType";
import Link from "next/link";

const OurWorkCards = ({
  workTypes,
  handleWorkType,
  selectedWorkType,
  currentWorkType,
}) => {
  return (
    <>
      {/* Recent */}
      <div className=" flex justify-between items-center xl:gap-8 md:gap-4 gap-[6px]">
        <button className=" flex items-center justify-center md:gap-3 gap-1 w-fit text-white border border-[#fff] rounded-3xl md:px-5 px-3 md:py-2 py-1">
          <span className=" xl:text-base md:text-xs text-[6px]">Recent</span>
          <Image src={downIcon} alt="downIcon" className=" md:w-auto w-[6px]" />
        </button>
        <div className=" w-4/5 flex justify-evenly md:rounded-xl rounded bg-[#ffffff0d] text-white text-lg font-normal md:p-2 py-0 px-1">
          {workTypes.map((item, i) => (
            <p
              className={` md:py-2 xl:px-2 px-[2px] mb-0 xl:text-base md:text-xs text-[4px]  cursor-pointer tracking-wider hover:text-[#86e2ff] blur-bg capitalize transition-all duration-300 ease-in-out transform-gpu ${
                selectedWorkType === i && "text-[#86e2ff] blur-bg-active"
              }`}
              style={{ marginBottom: "0px" }}
              onClick={() => handleWorkType(i)}
            >
              {item}
            </p>
          ))}
        </div>
        <button className="flex items-center justify-center md:gap-3 gap-1 w-fit text-white border border-[#fff] rounded-3xl md:px-5 px-3 md:py-2 py-1">
          <Image src={filterIcon} alt="filterIcon" className=" xl:w-auto md:w-3 w-[6px]" />
          <span className=" xl:text-base md:text-xs text-[6px]">filter</span>
        </button>
      </div>
      {/* WORKS SECTION*/}
      <div className=" flex flex-col gap-10">
        {selectedWorkType === 0 ? (
          <AllWorksType />
        ) : (
          <div className=" grid grid-cols-3 md:gap-5 xl:gap-8 gap-3 md:px-0 px-2">
            {currentWorkType?.map((item, i) => (
              <div
                key={i}
                className="ourWorkTypeCard relative mx-auto cursor-pointer"
              >
                <Image
                  src={item?.thumbnailSrc}
                  width={350}
                  height={350}
                  alt="craftImg1"
                />
                <div class="hover-div">
                  <p className=" text-[20px] font-normal">{item?.title}</p>
                  <div className=" flex gap-2">
                    <Image src={workCardIcon1} alt="workCardIcon1" />
                    <Image src={workCardIcon2} alt="workCardIcon2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* View All */}
      <Link
        href={"/ourwork"}
        className=" flex items-center justify-center md:gap-3 gap-2 w-fit bg-[#86e2ff] rounded-3xl px-5 py-2 mx-auto"
      >
        <span className=" xl:text-base md:text-sm text-[10px]">View All</span>
        <Image src={craftArrowIcon} alt="downIcon" className=" xl:w-[10px] md:w-2 w-[6px]"/>
      </Link>
    </>
  );
};

export default OurWorkCards;
