import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contactForm";
import ServiceContainer from "@/components/ui/serviceContainer";
import ValueContainer from "@/components/ui/valueContainer";
import VisionCarousel from "@/components/ui/visionCarousel";
import { ChevronsDown, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import getDataFromWP from "../utils/getData";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default async function Home() {
  const pageContent = await getDataFromWP();

  const logo_epigreenvision = pageContent[0].acf?.["logo_epigreenvision"];
  const presentationSection = pageContent[0].acf?.["presentation_section"];
  const heroSection = pageContent[0].acf?.["hero_section"];
  const ourValuesSection: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tagline: string;
  }[] = pageContent[0].acf?.["our_values_section"];
  const ourVisionSection = pageContent[0].acf?.["our_vision_section"];
  const servicesSection: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }[] = pageContent[0].acf?.["services_section"];
  const contactSection = pageContent[0].acf?.["contact_section"];

  const values = Object.values(ourValuesSection);
  const services = Object.values(servicesSection);
  return (
    <>
      <Header logoUrl={logo_epigreenvision} />
      <div>
        <section className="w-full h-[600px] ">
          <div className="relative w-full h-full overflow-hidden  flex items-center justify-center ">
            <Image
              src={presentationSection.image || "/cover-1.webp"}
              alt="Next.js Logo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via transparent "></div>
            <div className="z-10 text-white text-4xl font-bold text-center flex flex-col items-center gap-16">
              <Image
                src={presentationSection.logo || "/logo-green-v2.png"}
                alt="epigreenvision Logo"
                width={150}
                height={150}
                className="animate-spin"
              />
              <h1 className="text-2xl sm:text-4xl px-2 w-full md:text-5xl font-bold text-center max-w-lg ">
                {presentationSection.title}
              </h1>
              <ChevronsDown className="w-12 h-12 mx-auto mt-8 animate-bounce" />
            </div>
          </div>
        </section>

        <section className="w-full my-16">
          <div className="w-[90%]  mx-auto  flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 xl:gap-32">
            <div className="flex flex-col gap-2">
              {/* <p className="text-base">about us</p> */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl">
                <span className="text-[#004899] font-semibold ">EPI</span>
                <span className="text-[#B4CC5C] font-base ">Green</span>
                <span className="text-gray-600 ">Vision</span>
              </h1>
              <p className="text-gray-700 max-w-md leading-relaxed">
                {heroSection.description}
              </p>
              <Button className="self-start px-8 py-2 bg-[#488DCA] text-white mt-8 hover:bg-[#285C8A]">
                <a href="#services">Contact-us</a>
              </Button>
            </div>

            <Image
              src={heroSection.image || "/cover-3.webp"}
              alt="Next.js Logo"
              width={550}
              height={550}
              className="object-cover max-w-sm lg:max-w-md sm:w-1/2"
            />
          </div>
        </section>

        <section
          id="values"
          className="w-[95%] xl:w-[85%]  mx-auto flex flex-col items-center mb-16"
        >
          <div className="relative inline-block mb-16">
            <div className="absolute inset-0 bg-green-400 w-16 h-16 rounded-full -z-10 -translate-x-6 -translate-y-4 animate-pulse"></div>
            <h1 className="text-3xl font-bold text-gray-800">Our Values</h1>
          </div>
          {values.map((value, index) => (
            <ValueContainer
              key={index}
              title={value.title}
              subtitle={value.subtitle}
              description={value.description}
              imgUrl={value.image}
              tagline={value.tagline}
              inverted={index % 2 === 0}
            />
          ))}
        </section>

        <section id="vision" className="w-full mx-auto mb-16 flex flex-col">
          <div className="relative inline-block mb-16 mx-auto ">
            <div className="absolute inset-0 bg-blue-400 w-16 h-16 rounded-full -z-10 -translate-x-6 -translate-y-4 animate-pulse"></div>
            <h1 className="text-3xl font-bold text-gray-800">Our Vision</h1>
          </div>
          <VisionCarousel visions={ourVisionSection} />
        </section>

        <section
          id="services"
          className="w-[90%] xl:w-[80%]  mx-auto mb-16  flex flex-col"
        >
          <div className="relative inline-block mb-16 mx-auto ">
            <div className="absolute inset-0 bg-green-400 w-16 h-16 rounded-full -z-10 -translate-x-6 -translate-y-4 animate-pulse"></div>
            <h1 className="text-3xl font-bold text-gray-800">Services</h1>
          </div>
          {services.map((service, index) => (
            <ServiceContainer
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              imgUrl={service.image}
              inverted={index % 2 === 0}
            />
          ))}
        </section>
        <section id="contact" className=" relative w-full bg-gray-50 py-12">
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#002F6B]/30 to-[#85E08A] opacity-10 rounded-lg z-0 animate-slow_pulse"></div>
          <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-start w-full md:w-1/2 z-10">
              <h4 className="text-lg font-light text-[#289F2F]">Contact us</h4>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#0E305D] mb-6">
                {contactSection.title}
              </h1>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Mail size={24} color="#289F2F" />
                  <p className="text-[#002F6B] font-semibold text-base sm:text-lg">
                    {contactSection.email}
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <MapPin size={28} color="#289F2F" />
                  <p className="text-[#002F6B] font-semibold text-base sm:text-lg">
                    {contactSection.address}
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Phone size={24} color="#289F2F" />
                  <p className="text-[#002F6B] font-semibold text-base sm:text-lg">
                    {contactSection.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 z-10">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer logoUrl={logo_epigreenvision} />
    </>
  );
}
