"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
export default function VisionCarousel({
  visions,
}: {
  visions: { title: string; description: string; image: string }[];
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const myVisions = Object.values(visions);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {myVisions.map((vision, index) => (
          <CarouselItem className="" key={index}>
            <Card radius="none" className="h-[600px] ">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={vision.image}
                  loading="eager"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-linear"></div>
              </div>
              <CardBody className="absolute inset-0 mb-8 ml-4 lg:ml-14 xl:ml-32 z-10 flex items-start justify-center">
                <div className="mt-12  flex flex-col items-start w-auto mb-6  ">
                  <h1 className="mb-4 max-w-md xl:max-w-3xl font-semibold text-4xl sm:text-5xl  text-white  tracking-wider">
                    {vision.title}
                  </h1>
                  <p className="text-base  text-gray-100 font-normal mb-4  max-w-xs sm:max-w-lg xl:max-w-xl tracking-widest">
                    {vision.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20  p-2 rounded-none bg-blue-400/50 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20  p-2  rounded-none bg-blue-400/50 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}
