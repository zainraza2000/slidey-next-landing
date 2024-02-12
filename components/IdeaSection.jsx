"use client";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import idea1 from "@/assets/svgs/idea-1.svg";
import idea2 from "@/assets/svgs/idea-2.svg";

const IdeaSection = () => {
  const constraintsRef = useRef(null);

  const [rotation1, setRotation1] = useState(15);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(-5);
  const [rotation4, setRotation4] = useState(0);
  const [rotation5, setRotation5] = useState(0);

  const handleRotate = (direction, setRotation) => {
    const rotateAmount = direction === "clockwise" ? 15 : -15;
    setRotation((prevRotation) => prevRotation + rotateAmount);
  };
  // const controls = useAnimation();

  //   const getRandomPosition = () => {
  //     const maxX = window.innerWidth - 100; // Adjust the maximum X position as needed
  //     const maxY = window.innerHeight - 100; // Adjust the maximum Y position as needed

  //     const randomX = Math.random() * maxX;
  //     const randomY = Math.random() * maxY;

  //     return { x: randomX, y: randomY };
  //   };

  //   Define the bounds for random positions
  // const bounds = {
  //   minX: 50,
  //   maxX: window.innerWidth - 50,
  //   minY: 50,
  //   maxY: window.innerHeight - 50,
  // };

  // const getRandomPosition = () => {
  //   const randomX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
  //   const randomY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);

  //   return { x: randomX, y: randomY };
  // };

  // // Function to continuously move the div
  // const continuouslyMove = async () => {
  //   while (true) {
  //     await controls.start(getRandomPosition(), {
  //       duration: 5,
  //       ease: "linear",
  //     });
  //   }
  // };

  // //   Start the continuous movement when the component mounts
  // useEffect(() => {
  //   continuouslyMove();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const dragX1 = useMotionValue(0);
  const dragX2 = useMotionValue(0);
  const dragX3 = useMotionValue(0);

  return (
    <section className=" xl:w-4/5 md:w-[85%] flex justify-between items-center md:gap-10 xl:gap-0 mx-auto mb-20">
      <div className=" xl:w-[32%] md:w-[50%] flex flex-col border-b border-black gap-10 xl:h-80 md:h-[350px]">
        <h3 className="fontGivonic xl:text-[52px] md:text-[36px] font-semibold xl:leading-[60px] md:leading-[50px]">
          Awake{" "}
          <span className=" pt-2 px-[10px] pb-0 bg-[#86e2ff] rounded-lg">
            Ideas,
          </span>
          <br /> Not Just Audiences
        </h3>
        <p className="fontGivonic xl:text-xl md:text-[15px] font-medium">
          When your audience starts to drift away during a presentation, it's
          time to rethink your approach.
        </p>
      </div>
      <motion.div
        className="bg-idea  2xl:w-[485px] 2xl:h-[538px] xl:w-[460px] xl:h-[510px] md:w-[50%] md:h-[450px] overflow-hidden"
        ref={constraintsRef}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="fontGivonic ml-[50px] bg-white w-fit px-4 xl:h-[60px] md:h-[55px] rounded-xl flex justify-center items-center text-[#EF423A] text-4xl font-semibold capitalize"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.5}
          initial={{ x: 0, y: 50, rotate: 0 }}
          whileTap={{ scale: 1.1 }}
          dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
        >
          <Image src={idea1} alt="idea1" />
        </motion.div>

        <motion.div
          className="fontGivonic ml-[50px] bg-white xl:w-44 xl:h-[60px] md:w-40 md:h-[50px] rounded-xl flex justify-center items-center text-[#EF423A] xl:text-4xl md:text-3xl font-semibold capitalize"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.5}
          initial={{ x: 0, y: 180, rotate: 0 }}
          animate={{ rotate: rotation1 }}
          whileTap={{ scale: 1.1 }}
          dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
          style={{
            x: dragX1,
            rotate: dragX1,
          }}
        >
          <span
            className=" w-[20%] text-white h-full text-center"
            onClick={() => handleRotate("anticlockwise", setRotation1)}
          >
            A
          </span>
          <span className=" w-[80%] text-center">Design</span>
          <span
            className=" w-[20%] text-white h-full text-center"
            onClick={() => handleRotate("clockwise", setRotation1)}
          >
            B
          </span>
        </motion.div>
        <motion.div
          className="fontGivonic ml-[230px] bg-white xl:w-44 xl:h-[60px] md:w-40 md:h-[50px] rounded-xl flex justify-center items-center text-[#EF423A] xl:text-4xl md:text-3xl font-semibold capitalize"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.5}
          initial={{ x: 0, y: 40, rotate: 0 }}
          animate={{ rotate: rotation2 }}
          whileTap={{ scale: 1.1 }}
          dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
          style={{
            x: dragX2,
            rotate: dragX2,
          }}
        >
          <span
            className=" w-[20%] text-white h-full text-center"
            onClick={() => handleRotate("anticlockwise", setRotation2)}
          >
            A
          </span>
          <span className=" w-[80%] text-center">Innovate</span>
          <span
            className=" w-[20%] text-white h-full text-center"
            onClick={() => handleRotate("clockwise", setRotation2)}
          >
            B
          </span>
        </motion.div>
        <motion.div
          className="fontGivonic ml-[170px] bg-white xl:w-44 xl:h-[60px] md:w-40 md:h-[50px] rounded-xl flex justify-center items-center text-[#EF423A] xl:text-4xl md:text-3xl font-semibold capitalize"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.5}
          initial={{ x: 0, y: 200, rotate: 0 }}
          animate={{ rotate: rotation3 }}
          whileTap={{ scale: 1.1 }}
          dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
          style={{
            x: dragX3,
            rotate: dragX3,
          }}
        >
          <span
            className=" w-[20%] text-white h-full text-center"
            onClick={() => handleRotate("anticlockwise", setRotation3)}
          >
            A
          </span>
          <span className=" w-[80%] text-center">execute</span>
          <span
            className=" w-[20%] text-white h-full text-center"
            onClick={() => handleRotate("clockwise", setRotation3)}
          >
            B
          </span>
        </motion.div>
        <motion.div
          className="fontGivonic ml-[50px] bg-white w-fit px-4 xl:h-[60px] md:h-[55px] rounded-xl flex justify-center items-center text-[#EF423A] text-4xl font-semibold capitalize"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.5}
          initial={{ x: 0, y: 130, rotate: 0 }}
          whileTap={{ scale: 1.1 }}
          dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
        >
          <Image src={idea2} alt="idea2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IdeaSection;