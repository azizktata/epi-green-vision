import Image from "next/image";
import React from "react";

export default function ServiceContainer({
  title,
  subtitle,
  description,
  imgUrl,
  inverted = false,
}: {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  inverted?: boolean;
}) {
  const maxWidth = inverted ? "xl:max-w-lg" : "xl:max-w-xl";
  const order1 = inverted ? "order-1" : "sm:order-2";
  const order2 = inverted ? "order-2" : "sm:order-1";
  const gradient = inverted
    ? "bg-gradient-to-b sm:bg-gradient-to-r "
    : " sm:bg-gradient-to-l";
  return (
    <div
      className={`flex flex-col mb-8 sm:mb-0 sm:flex-row items-center gap-4 sm:gap-8  justify-between  rounded-lg  from-white to-[#289F2F]/15 p-[2px] ${gradient} `}
    >
      <div
        className={`flex flex-col items-start  self-start sm:self-center max-w-lg sm:max-w-sm md:max-w-md ${maxWidth} ${order1} `}
      >
        <p className="text-[#289F2F] font-semibold ">{subtitle}</p>
        <h1 className="text-3xl md:text-4xl font-bold  mb-4">{title}</h1>
        <p className="text-gray-700 leading-relaxed ">{description}</p>
      </div>
      <div className={`relative w-full  sm:w-1/2 h-[350px] ${order2}`}>
        <Image
          src={imgUrl.length > 0 ? imgUrl : "/cover-1.webp"}
          alt="Next.js Logo"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
