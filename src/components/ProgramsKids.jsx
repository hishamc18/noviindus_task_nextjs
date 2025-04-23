"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SlantedButton from "./Button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const programs = [
  {
    title: "English Grammar",
    description: "Master the building blocks of writing and communication.",
    image: "/Kids/kid1.svg",
  },
  {
    title: "Craft Classes",
    description: "Unleash creativity with hands-on projects and artistic fun.",
    image: "/Kids/kid2.svg",
  },
  {
    title: "Art and Painting",
    description: "Express yourself through colors, sketches, and designs.",
    image: "/Kids/kid3.svg",
  },
  {
    title: "Craft Classes",
    description: "Unleash creativity with hands-on projects and artistic fun.",
    image: "/Kids/kid2.svg",
  },
  {
    title: "English Grammar",
    description: "Master the building blocks of writing and communication.",
    image: "/Kids/kid1.svg",
  },
];

export default function ProgramsForKids() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pages, setPages] = useState([]);

  // Update the pagination dots
  const updateDots = useCallback(() => {
    if (!emblaApi) return;
    const slidesInView = window.innerWidth >= 728 ? 2 : 1;
    const pageCount = Math.ceil(programs.length / slidesInView);
    setPages(Array.from({ length: pageCount }, (_, i) => i));
    const newIndex = Math.floor(emblaApi.selectedScrollSnap() / slidesInView);
    setSelectedIndex(newIndex);
  }, [emblaApi]);

  // Listen to Embla events
  useEffect(() => {
    if (!emblaApi) return;

    updateDots();
    emblaApi.on("select", updateDots);
    emblaApi.on("resize", updateDots);
  }, [emblaApi, updateDots]);

  const scroll = (dir) => {
    if (!emblaApi) return;
    dir === "left" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  };

  const scrollToPage = (index) => {
    if (!emblaApi) return;
    const slidesInView = window.innerWidth >= 1024 ? 3 : 1;
    emblaApi.scrollTo(index * slidesInView);
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 relative flex items-center justify-between md:justify-end">
          <div className="text-left w-full md:absolute md:inset-x-0 md:text-center">
            <h2 className="text-[22px] md:text-[36px] font-Bricolage font-medium text-[#655945] leading-tight">
              Program we Offer <span className="font-bold">for Kids</span>
            </h2>
          </div>
          <div className="shrink-0 ml-4 md:ml-auto md:mt-0">
            <SlantedButton text="View All" className="scale-75" />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-5 mt-10 top-1/2 -translate-y-1/2 z-10 hidden md:block"
        >
          <ChevronLeft className="text-BgColor" size={70} strokeWidth={1} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-5 mt-10 top-1/2 -translate-y-1/2 z-10 hidden md:block"
        >
          <ChevronRight className="text-BgColor" size={70} strokeWidth={1} />
        </button>

        {/* Embla Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pt-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="embla__slide min-w-[100%] md:min-w-[50%] lg:min-w-[32%] rounded-md shadow-md bg-[#FFF3E1] px-8 pt-6 pb-2 relative flex items-center justify-between"
              >
                <div className="w-[210px] flex flex-col items-start">
                  <h3 className="text-[20px] font-bold text-BgColor mb-2">
                    {program.title}
                  </h3>
                  <p className="text-BgColor text-[14px] leading-relaxed mb-2">
                    {program.description}
                  </p>
                  <div className="-ml-5">
                    <SlantedButton text="Read More" className="scale-70" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-1 z-30">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={155}
                    height={320}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPage(idx)}
              className={`w-2 h-2 rounded-full ${
                selectedIndex === idx ? "bg-BgColor" : "bg-BgColor/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
