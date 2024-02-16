import React from "react";
import Image from "next/image";

const ImageSecion = ({ imgSrc,modalSrc, setCurrentImg, setOpen }) => {
  return (
    <Image
      src={imgSrc}
      alt="heroSectionCardImg1"
      className=" w-full h-full md:rounded-[30px] rounded-[12px]"
      onClick={() => {
        setCurrentImg(modalSrc), setOpen(true);
      }}
    />
  );
};

export default ImageSecion;
