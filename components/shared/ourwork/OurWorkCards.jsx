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
      <div className=" flex justify-between items-center gap-8">
        <button className=" flex items-center justify-center gap-3 w-fit text-white border border-[#fff] rounded-3xl px-5 py-2">
          <span>Recent</span>
          <Image src={downIcon} alt="downIcon" />
        </button>
        <div className=" w-4/5 flex justify-evenly rounded-xl bg-[#ffffff0d] text-white text-lg font-semibold p-2">
          {workTypes.map((item, i) => (
            <p
              className={` py-2 px-2 mb-0  cursor-pointer tracking-wider hover:text-[#86e2ff] blur-bg capitalize transition-all duration-300 ease-in-out transform-gpu ${
                selectedWorkType === i && "text-[#86e2ff] blur-bg-active"
              }`}
              style={{ marginBottom: "0px" }}
              onClick={() => handleWorkType(i)}
            >
              {item}
            </p>
          ))}
        </div>
        <button className=" flex items-center justify-center gap-3 w-fit text-white border border-[#fff] rounded-3xl px-5 py-2">
          <Image src={filterIcon} alt="filterIcon" />
          <span>filter</span>
        </button>
      </div>
      {/* WORKS SECTION*/}
      <div className=" flex flex-col gap-10">
        {selectedWorkType === 0 ? (
          <AllWorksType />
        ) : (
          <div className=" grid grid-cols-3 md:gap-5 xl:gap-8">
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
        className=" flex items-center justify-center gap-3 w-fit bg-[#86e2ff] rounded-3xl px-5 py-2 mx-auto"
      >
        <span>View All</span>
        <Image src={craftArrowIcon} alt="downIcon" />
      </Link>
    </>
  );
};

export default OurWorkCards;
