"use client";

import Image from "next/image";
import SlantedButton from "../Button";
import CurriculumCarousel from "./CurriculumSlider";
import TextSlider from "./TextSlider";

const HeroSection = () => {
    return (
        <section className="bg-white relative overflow-hidden flex px-8 py-14 flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[url('/HeroSection/HeroBg.png')] bg-cover bg-center opacity-30"></div>

            <TextSlider />

            {/* Images and Button */}
            <div className="flex justify-between gap-10">
                <div className="animate-jump">
                    <Image src="/HeroSection/hero1.png" alt="hero1" width={460} height={470} />
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <div className="hidden md:flex flex-col items-center justify-center">
                        <SlantedButton text="Book a Free Demo Class" />
                    </div>
                    <div className="scale-75 md:scale-100">
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
