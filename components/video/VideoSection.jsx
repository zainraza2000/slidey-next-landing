"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import primaryVideo from "@/assets/video/slidey-video-primary.mp4";
import secondaryVideo from "@/assets/video/slidey-video-secondary.mp4";

const VideoSection = () => {
  const [primary, setPrimary] = useState(false);
  const primaryVideoRef = useRef(null);

  useEffect(() => {
    if (primary) {
      primaryVideoRef.current.play();
    }
  }, [primary]);

  const handleChangeVideo = () => {
    if (!primary) {
      setPrimary(true);
    }
  };

  return (
    <div className="relative xl:w-4/5 md:w-[85%] w-[90%] flex justify-between items-center mx-auto md:mt-28 mt-8 md:rounded-[20px] rounded-[12px] overflow-hidden">
      <video
        className={primary ? "flex" : "hidden"}
        loop
        autoPlay
        controls
        ref={primaryVideoRef}
      >
        <source src={primaryVideo} type="video/mp4" />
      </video>
      <video className={primary ? "hidden" : "flex"} loop autoPlay muted>
        <source src={secondaryVideo} type="video/mp4" />
      </video>
      {!primary && (
        <div className="absolute w-full flex justify-center z-50">
          <button
            className=" md:w-40 md:h-24 w-20 h-14 video-play-button md:rounded-[15px] rounded-[10px] flex justify-center items-center transition-all duration-200 ease-in-out transform-gpu hover:scale-110"
            onClick={handleChangeVideo}
          >
            <FaPlay className="md:text-4xl text-2xl text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
