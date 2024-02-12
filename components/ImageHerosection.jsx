import React from "react";
import Image from "next/image";

const ImageSecion = ({imgSrc}) => {
  return (
    <Image
      src={imgSrc}
      alt="heroSectionCardImg1"
      className=" w-full h-full rounded-[30px]"
    />
  );
};

export default ImageSecion;
