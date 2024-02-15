import React from "react";

// COMPONENTS
import Layout from "@/components/shared/Layout";

// DATA
import OurWorkPage from "@/components/ourwork/OurWorkPage";

const page = () => {
  return (
    <Layout>
      <div className="xl:w-4/5 md:w-[85%] w-[90%] flex flex-col justify-between xl:gap-16 md:gap-12 gap-5 mx-auto xl:py-28 md:pt-20 pt-8">
        {/* Heading */}
        <div className="flex items-center justify-center md:gap-4 gap-3">
          <h3 className="fontGivonic xl:text-[52px] md:text-[36px] text-base font-semibold xl:leading-[60px] md:leading-[50px] md:tracking-wide xl:tracking-normal text-black">
            Our Work
          </h3>
        </div>
        <OurWorkPage />
      </div>
    </Layout>
  );
};

export default page;
