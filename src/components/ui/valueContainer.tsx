import Image from "next/image";
import React from "react";

export default function ValueContainer({
  title,
  subtitle,
  description,
  imgUrl,
  inverted = false,
  tagline,
}: {
  title: string;
  subtitle: string;
  description: string[];
  imgUrl: string;
  inverted?: boolean;
  tagline: string;
}) {
  const order1 = inverted ? "order-1" : "order-2";
  const order2 = inverted ? "order-2" : "order-1";
  return (
    <div className="w-[90%] sm:w-full xl:w-[90%] flex flex-col sm:flex-row items-start justify-between gap-4  ">
      <div
        className={`w-full   sm:w-1/2  max-h-[600px] h-[450px] self-stretch text-center relative ${order1}`}
      >
        <Image
          src={imgUrl}
          alt="epigreenvision"
          fill
          className="object-cover"
        />

        <h1 className="absolute inset-0 mx-auto text-white text-5xl max-w-sm font-bold flex items-center justify-center bg-gradient-to-t from-[#002F6B] to-[#85E08A]/50  text-white">
          {tagline}
        </h1>
      </div>
      <div className={`sm:w-1/2 flex flex-col pb-4 ${order2} lg:self-center  `}>
        <p className="text-[#289F2F] ">{subtitle}</p>
        <h1 className="text-2xl sm:text-4xl mb-4 max-w-md">{title}</h1>
        <div className="max-w-lg">
          {description.map((desc, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-2">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
