"use client";
import React, { useState } from "react";
import Image from "next/image";
import SlantedButton from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        mode: "snap",
        slides: {
            perView: 2,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: {
                    perView: 3,
                    spacing: 16,
                },
            },
            "(min-width: 768px)": {
                slides: {
                    perView: 4,
                    spacing: 20,
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 6,
                    spacing: 24,
                },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const scroll = (dir) => {
        if (!instanceRef.current) return;
        dir === "left" ? instanceRef.current.prev() : instanceRef.current.next();
    };

    return (
        <section className="bg-[#F9F7F4] py-12 px-4 md:px-28 relative">
            {/* Header */}
            <div className="mb-8 relative flex items-center justify-between md:justify-end">
                {/* Heading */}
                <div className="text-left w-full md:absolute md:inset-x-0 md:text-center">
                    <h2 className="text-[22px] md:text-[36px] font-Bricolage font-medium text-[#655945] leading-tight">
                        Subjects we <span className="font-bold">Teach</span>
                    </h2>
                </div>

                {/* Button */}
                <div className="shrink-0 ml-4 md:ml-auto md:mt-0">
                    <SlantedButton text="View All" className="scale-75" />
                </div>
            </div>

            {/* Arrows */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-6 top-1/2 mt-10 not-only-of-type:-translate-y-1/2 z-10 hidden md:block"
            >
                <ChevronLeft className="text-BgColor/30" size={70} strokeWidth={1} />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-6 top-1/2 mt-10 -translate-y-1/2 z-10 hidden md:block"
            >
                <ChevronRight className="text-BgColor" size={70} strokeWidth={1} />
            </button>

            {/* Slider */}
            <div ref={sliderRef} className="keen-slider">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide bg-[#FFF3E1] rounded-md border border-[#f5e5d5] p-2 shadow-sm flex flex-col items-center w-full"
                    >
                        <div className="w-full h-28 mb-2 flex justify-center items-center">
                            <Image
                                src={subject.image}
                                alt={subject.title}
                                width={220}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-center text-BgColor font-medium">{subject.title}</h3>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
                {Array.from({
                    length: Math.ceil(subjects.length / (currentSlide >= 6 ? 6 : currentSlide >= 4 ? 4 : 2)),
                }).map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2 h-2 rounded-full block transition-all duration-300 ${
                            currentSlide === idx ? "bg-BgColor" : "bg-BgColor/30"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default SubjectsSlider;
