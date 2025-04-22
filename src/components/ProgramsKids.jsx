"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SlantedButton from "./Button";

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
];

export default function ProgramsForKids() {
    return (
        <section className="py-12 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-20">
                    <div className="flex-1 text-center">
                        <h2 className="text-[28px] ml-36 md:text-[32px] font-Bricolage text-[#49402f]">
                            Programs We Offer <span className="font-semibold">for Kids</span>
                        </h2>
                    </div>

                    {/* Button on Right */}
                    <div className="mr-10">
                        <SlantedButton text="View All" />
                    </div>
                </div>

                <button onClick={() => scroll("left")} className="absolute left-9 top-1/2 -translate-y-1 z-10">
                    <ChevronLeft className="text-BgColor" size={60} />
                </button>
                <button onClick={() => scroll("right")} className="absolute right-7 top-1/2 -translate-y-1 z-10">
                    <ChevronRight className="text-BgColor" size={60} />
                </button>

                <div className="relative">
                    <div className="flex gap-6 scrollbar-hide px-12">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="w-[450px] rounded-md shadow-md bg-[#FFF3E1] px-8 py-2 relative flex  items-center justify-between"
                            >
                                <div className="w-[210px] flex flex-col justify-items-start items-start">
                                    <h3 className="text-[20px] font-bold text-BgColor mb-2">{program.title}</h3>
                                    <p className="text-BgColor text-[14px] text-base leading-relaxed mb-2">
                                        {program.description}
                                    </p>
                                    <div className="-ml-5">
                                        <SlantedButton text="Read More" className="scale-70" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-1">
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

                <div className="flex justify-center items-center gap-2 mt-8">
                    <span className="w-2 h-2 rounded-full bg-BgColor block"></span>
                    <span className="w-2 h-2 rounded-full bg-BgColor/30 block"></span>
                    <span className="w-2 h-2 rounded-full bg-BgColor/30 block"></span>
                </div>
            </div>
        </section>
    );
}
