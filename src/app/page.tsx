import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contactForm";
import ServiceContainer from "@/components/ui/serviceContainer";
import ValueContainer from "@/components/ui/valueContainer";
import VisionCarousel from "@/components/ui/visionCarousel";
import { ChevronsDown, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="w-full h-[600px] ">
        <div className="relative w-full h-full overflow-hidden  flex items-center justify-center ">
          <Image
            src="/cover-1.webp"
            alt="Next.js Logo"
            fill
            className="object-cover"
          />
          <div className="z-10 text-white text-4xl font-bold text-center flex flex-col items-center gap-16">
            <Image
              src="/logo-green.png"
              alt="Next.js Logo"
              width={300}
              height={300}
            />
            <h1 className="text-2xl sm:text-4xl px-2 w-full md:text-5xl font-bold text-center max-w-3xl">
              We aim to contribute on the global energy transition efforts to
              reduce climate change impact
            </h1>
            <ChevronsDown className="w-12 h-12 mx-auto mt-8 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="w-full my-16">
        <div className="w-[90%]  mx-auto  flex flex-col sm:flex-row items-center justify-center gap-8 ">
          <div className="flex flex-col gap-2">
            {/* <p className="text-base">about us</p> */}
            <h1 className="text-3xl md:text-5xl xl:text-6xl">
              <span className="text-[#004899] font-semibold ">EPI</span>
              <span className="text-[#B4CC5C] font-base ">Green</span>
              <span className="text-gray-600 ">Vision</span>
            </h1>
            <p className="text-gray-700 max-w-md leading-relaxed">
              Research & Innovation in Conversion of Municipal solid waste MSW
              to Hydrogen H, CO2 Capture and Valorization, Biofuel Technologies,
              Plasma applications, Photonics, and Renewables Energy Business
              Development.
            </p>
            <Button className="self-start px-8 py-2 bg-[#488DCA] text-white mt-8 hover:bg-[#285C8A]">
              <a href="#services">Contact-us</a>
            </Button>
          </div>
          <div className="relative w-full max-w-xl  sm:w-1/2 h-[450px] ">
            <Image
              src="/cover-2.webp"
              alt="Next.js Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="values"
        className="w-[95%]  mx-auto flex flex-col items-center mb-16"
      >
        <div className="relative inline-block mb-16">
          <div className="absolute inset-0 bg-green-400 w-16 h-16 rounded-full -z-10 -translate-x-6 -translate-y-4"></div>
          <h1 className="text-3xl font-bold text-gray-800">Our Values</h1>
        </div>
        {values.map((value, index) => (
          <ValueContainer
            key={index}
            title={value.title}
            subtitle={value.subtitle}
            description={value.description}
            imgUrl={value.imgurl}
            tagline={value.tagline}
            inverted={index % 2 === 0}
          />
        ))}
      </section>

      <section id="vision" className="w-full mx-auto mb-16 flex flex-col">
        <div className="relative inline-block mb-16 mx-auto ">
          <div className="absolute inset-0 bg-blue-400 w-16 h-16 rounded-full -z-10 -translate-x-6 -translate-y-4"></div>
          <h1 className="text-3xl font-bold text-gray-800">Our Vision</h1>
        </div>
        <VisionCarousel />
      </section>

      <section id="services" className="w-[90%] mx-auto mb-16  flex flex-col">
        <div className="relative inline-block mb-16 mx-auto ">
          <div className="absolute inset-0 bg-green-400 w-16 h-16 rounded-full -z-10 -translate-x-6 -translate-y-4"></div>
          <h1 className="text-3xl font-bold text-gray-800">Services</h1>
        </div>
        {services.map((service, index) => (
          <ServiceContainer
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            imgUrl={service.imgUrl}
            inverted={index % 2 === 0}
          />
        ))}
      </section>
      <section id="contact" className=" relative w-full bg-gray-50 py-12">
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#002F6B]/30 to-[#85E08A] opacity-10 rounded-lg z-0"></div>
        <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Gradient Background */}

          {/* Contact Info Section */}
          <div className="flex flex-col items-start w-full md:w-1/2 z-10">
            <h4 className="text-lg font-light text-[#289F2F]">Contact us</h4>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#0E305D] mb-6">
              We&apos;re open to talk
            </h1>
            <div>
              {/* Contact Items */}
              <div className="flex items-center gap-4 mb-4">
                <Mail size={24} color="#289F2F" />
                <p className="text-[#002F6B] font-semibold text-base sm:text-lg">
                  contact@epigreenvision.com
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin size={24} color="#289F2F" />
                <p className="text-[#002F6B] font-semibold text-base sm:text-lg">
                  A6, Imm Laguna Square, Les Berges du Lac 2 Po 1053, Tunis
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Phone size={24} color="#289F2F" />
                <p className="text-[#002F6B] font-semibold text-base sm:text-lg">
                  +216 98 349 968
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 z-10">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const services = [
  {
    subtitle: "1. Cooperation",
    title: "Support companies with innovative projects",
    description:
      "We support Tunisian, African and global industries and startups in their innovative projects in the study, engineering, optimization, development and implementation phases. We also participate in national and global technical and strategic partnerships for the fight against pollution and climate change.",
    imgUrl: "/service-1.webp",
  },
  {
    subtitle: "2. National & international researches",
    title: "Support innovators to accelerate the delivery of new products",
    description:
      "Introducing a new technology or product to a new market has never been easy and has its own set of challenges and obstacles. At EPI Green Vision, we support innovators who seek to accelerate the delivery of new products by optimizing resources and reducing cost through innovation.",
    imgUrl: "/service-2.webp",
  },
  {
    subtitle: "3. Green Energy production and storage",
    title: "Develop new technologies",
    description:
      "We develop new technologies for the production of biofuels, alternative energies, water treatment, green hydrogen, ecological batteries, waste recycling and many other areas.",
    imgUrl: "/service-3.webp",
  },
  {
    subtitle: "4. Optimize Industrial Processes",
    title: "We support Tunisian companies in optimizing industrial processes.",
    description:
      "Our industrial engineering team supports Tunisian companies in optimizing industrial processes. We improve efficiency, control flows, reduce losses and energy consumption and manage costs. We also assist manufacturers to automate their processes and prepare their migration towards Industry 4.0.",
    imgUrl: "/service-4.webp",
  },
  {
    subtitle: "5. Offer Consultancy in Biofuels Projects",
    title: "We provide business and technical consultancy.",
    description:
      "With over 15 years’ experience in multi-feedstock biofuels industries, we provide business and technical consultancy in new or existing projects. We help entrepreneurs optimize their plants and upgrade it to use low-quality feedstock with high economic efficiency and improve the output product quality.",
    imgUrl: "/service-5.webp",
  },
  {
    subtitle: "6. Project Management and Leadership",
    title: "Scale-up renewable energy technologies",
    description:
      "We operate the most comprehensive open access, independent test and research facilities anywhere in the world to enable the scale-up of renewable energy technologies. With highly experienced teams of technical researchers, test engineers and technology specialists, EPI GreenVision is equipped to deliver industry-leading test, validation and applied research services to drive down the costs of innovation projects.",
    imgUrl: "/service-6.webp",
  },
];
const values = [
  {
    subtitle: "Innovating for a Sustainable Tomorrow",
    title: "Science-based applied physics and R&D company",
    description: [
      "Research & Innovation in Conversion of Municipal solid waste (MSW) to Hydrogen (H), CO2 Capture and Valorization, Biofuel Technologies, Plasma applications, Photonics, and Renewables Energy Business Development.",
      "We specialize in underdeveloped yet transformative technologies, such as green hydrogen, next-generation batteries, thermal energy storage, heat pumps, bioenergy with carbon capture, and floating solar PV.",
      "These innovations are poised to revolutionize energy production, consumption, and CO2 capture in the coming years, making a significant impact on the fight against climate change. Together, we can shape a cleaner, more resilient future.",
    ],
    imgurl: "/value-1.webp",
    tagline: "Research, Develop, Innovate",
  },
  {
    subtitle: "From Concept to Reality",
    title: "Empowering Tunisian Companies to Innovate",
    description: [
      "We assist Tunisian companies in transforming their innovative ideas into successful projects. By offering comprehensive technical and managerial support, we guide businesses through every phase of the project lifecycle—from experimental proof of concept to prototype design and manufacturing, all the way to system delivery in an operational environment.",
      "Our expertise ensures that companies can overcome barriers and achieve groundbreaking advancements, fostering a culture of innovation and growth.",
    ],
    imgurl: "/value-2.webp",
    tagline: "We Guide Your Innovation Journey",
  },
];
