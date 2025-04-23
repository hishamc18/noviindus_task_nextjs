"use client";
import React, { useState } from "react";
import Image from "next/image";
import SlantedButton from "../components/Button";
import { useKeenSlider } from "keen-slider/react";

const exams = [
    {
        title: "IELTS Preparation",
        description: "Focus on all four sections: Listening, Reading, Writing, and Speaking.",
        image: "/Exam/exm1.png",
    },
    {
        title: "TOEFL Mastery",
        description: "Comprehensive coverage of Reading, Listening, Speaking, and Writing sections.",
        image: "/Exam/exm2.png",
    },
    {
        title: "PTE Academic Course",
        description: "Time-saving strategies and practice tests with instant feedback.",
        image: "/Exam/exm3.png",
    },
    {
        title: "Cambridge English (CAE)",
        description: "Preparation for high-level English skills in Listening, Speaking, Reading, and Writing.",
        image: "/Exam/exm4.png",
    },
    {
        title: "Cambridge English (CAE)",
        description: "Preparation for high-level English skills in Listening, Speaking, Reading, and Writing.",
        image: "/Exam/exm4.png",
    },
];

const MasterExams = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 0 },
            },
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 0 },
            },
        },
        slides: { perView: 1, spacing: 0 },
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <section className="bg-[#F9F7F4] md:px-24 py-14 mb-10 px-3">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    {/* Text */}
                    <div className="flex-1 px-1 md:px-0">
                        <h2 className="text-[20px] md:text-[36px] font-Bricolage font-medium text-[#655945] leading-tight">
                            Master in <span className="font-bold">IELTS, TOEFL Exams</span>
                        </h2>
                    </div>

                    {/* Button */}
                    <div className="ml-4 shrink-0">
                        <SlantedButton text="View All" className="mt-1 scale-75" />
                    </div>
                </div>

                {/* Swipable Cards */}
                <div ref={sliderRef} className="keen-slider">
                    {exams.map((exam, index) => (
                        <div key={index} className="keen-slider__slide md:px-6 px-2">
                            <div className="relative w-full group">
                                {/* Rotated Background */}
                                <div className="absolute w-full h-full bg-BgColor rounded-2xl rotate-[3deg] transition-all duration-300 group-hover:rotate-0 z-0" />

                                {/* Cream Card */}
                                <div className="relative h-full z-10 bg-[#FFF3E1] rounded-2xl border-1 border-BgColor/15 overflow-hidden p-2">
                                    <div className="rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={exam.image}
                                            alt={exam.title}
                                            width={500}
                                            height={200}
                                            className="w-full h-48 md:h-40 object-cover rounded-2xl"
                                        />
                                    </div>
                                    <h3 className="text-[18px] font-semibold text-BgColor mb-2">{exam.title}</h3>
                                    <p className="text-[12px] mb-2 text-[#655945] leading-snug">{exam.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots - only on md and up */}
                <div className="mt-14 justify-center space-x-2 hidden md:flex">
                    {exams.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentSlide === idx ? "bg-BgColor" : "bg-BgColor/25"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MasterExams;
