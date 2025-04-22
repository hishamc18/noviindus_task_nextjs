"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SlantedButton from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const subjects = [
    { title: "Maths", image: "/Subjects/maths.svg" },
    { title: "Physics", image: "/Subjects/phy.svg" },
    { title: "Chemistry", image: "/Subjects/che.svg" },
    { title: "Biology", image: "/Subjects/bio.svg" },
    { title: "Computer Science", image: "/Subjects/cs.svg" },
    { title: "English", image: "/Subjects/eng.svg" },
    { title: "History", image: "/Subjects/maths.svg" },
    { title: "Geography", image: "/Subjects/phy.svg" },
];

const SubjectsSlider = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const scrollAmount = scrollRef.current.offsetWidth / 2;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-[#F9F7F4] py-12 px-4 md:px-32 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-14">
                <div className="flex-1 text-center">
                    <h2 className="text-[28px] ml-36 md:text-[32px] font-Bricolage text-[#49402f]">
                        Subjects We <span className="font-semibold">Teach</span>
                    </h2>
                </div>

                {/* Button on Right */}
                <div className="ml-auto">
                    <SlantedButton text="View All" />
                </div>
            </div>

            {/* Arrow buttons */}
            <button onClick={() => scroll("left")} className="absolute left-9 top-1/2 -translate-y-1 z-10">
                <ChevronLeft className="text-BgColor" size={60} />
            </button>
            <button onClick={() => scroll("right")} className="absolute right-7 top-1/2 -translate-y-1 z-10">
                <ChevronRight className="text-BgColor" size={60} />
            </button>

            {/* Scrollable row */}
            <div ref={scrollRef} className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar px-2">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 bg-[#FFF3E1] rounded-md overflow-hidden border border-[#f5e5d5] p-2 w-56 flex flex-col items-center shadow-sm"
                    >
                        <div className="rounded-md w-full h-28 mb-2">
                            <Image
                                src={subject.image}
                                alt={subject.title}
                                width={220}
                                height={200}
                                className="object-contain mx-auto"
                            />
                        </div>
                        <h3 className="text-center text-BgColor font-medium">{subject.title}</h3>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
                    <span className="w-2 h-2 rounded-full bg-BgColor block"></span>
                    <span className="w-2 h-2 rounded-full bg-BgColor/30 block"></span>
                    <span className="w-2 h-2 rounded-full bg-BgColor/30 block"></span>
                </div>
        </section>
    );
};

export default SubjectsSlider;
