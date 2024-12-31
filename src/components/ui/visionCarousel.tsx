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
import { Image } from "@nextui-org/image";

import { Card, CardBody } from "@nextui-org/card";
export default function VisionCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const visions = [
    {
      title: "Access to Sustainable Energy",
      description:
        "We help companies and communities access sustainable modern energy services that underpins business, health, education, and livelihoods, increasing resilience to climate change.",
      imgUrl: "/service-3.webp",
    },
    {
      title: "Empower Advanced Circular Technology",
      description:
        "Circular projects provide high-benefit economical results and enhance local communities' businesses, especially in under-developing countries. At EPI Green Vision, we strive to maintain zero waste to landfill by converting domestic and industrial wastes into energy or other useful materials.",
      imgUrl: "/value-2.webp",
    },
    {
      title: "Reduce Dependencies from Rare Raw Materials",
      description:
        "While providing new technological solutions based on non-expensive and available materials, we help accelerate the energy transition and increase its sustainability.",
      imgUrl: "/service-5.webp",
    },
    {
      title: "Work in Open Network and Use Advanced Technologies",
      description:
        "We leverage high communication technologies like machine learning, artificial intelligence, and the internet of things to drive innovation.",
      imgUrl: "/service-4.webp",
    },
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {visions.map((vision, index) => (
          <CarouselItem className="" key={index}>
            <Card radius="none" className="h-[600px] ">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={vision.imgUrl}
                  loading="eager"
                  radius="none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-linear"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
              </div>
              <CardBody className="absolute inset-0 mb-12 ml-4 lg:ml-14 z-10 flex items-start justify-center">
                <div className="mt-12  flex flex-col items-start w-auto mb-6  ">
                  <h1 className="mb-4 max-w-md xl:max-w-2xl font-semibold text-4xl sm:text-5xl  text-white  tracking-wider">
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
