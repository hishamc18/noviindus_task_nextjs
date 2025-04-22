"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SlantedButton from "../Button";
import CurriculumCarousel from "./CurriculumSlider";

const texts = [
    { highlight: "Personalized One-to-One ", normal: "Tutoring at our center" },
    { highlight: "Individual Tuition, ", normal: "For all students till 12th grade!" },
    { highlight: "Master IELTS, TOEFL, and ", normal: "Beyond with Expert Guidance" },
];

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // 3s

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative overflow-hidden flex px-8 py-14 flex-col items-center justify-center"
        >
             <div className="absolute inset-0 bg-[url('/HeroSection/HeroBg.png')] bg-cover bg-center opacity-20"></div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[28px] md:text-[50px] font-Bricolage mb-4 text-center text-[#7c253e] transition-opacity duration-500 ease-in-out">
                    <div className="flex flex-col">
                        <span className="font-extrabold -mb-3">{texts[activeIndex].highlight}</span>
                        {texts[activeIndex].normal}
                    </div>
                </h1>

                <div className="flex space-x-2 mt-2">
                    {texts.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#7c253e]" : "bg-[#7c253e]/30"}`}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="animate-jump">
                    <Image src="/HeroSection/hero1.png" alt="hero1" width={460} height={470} />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <SlantedButton text="Book a Free Demo Class" />
                    </div>
                    <div>
                        <CurriculumCarousel />
                    </div>
                </div>
                <div className="animate-jump">
                    <Image src="/HeroSection/hero2.png" alt="hero2" width={460} height={470} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
