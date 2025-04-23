"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const items = [
    { src: "/HeroSection/Curriculum/cur1.png", alt: "cur1" },
    { src: "/HeroSection/Curriculum/cur2.png", alt: "cur2" },
    { src: "/HeroSection/Curriculum/cur1.png", alt: "cur1" },
    { src: "/HeroSection/Curriculum/cur2.png", alt: "cur2" },
];

const CurriculumCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: {
            perView: 3,
            spacing: 0,
        },
        slideChanged: (slider) => {
            setCurrentSlide(slider.track.details.rel);
        },
        drag: false,
    });

    useEffect(() => {
        if (!slider) return;
        const interval = setInterval(() => {
            slider.current?.next();
        }, 2500);
        return () => clearInterval(interval);
    }, [slider]);

    return (
        <div className="relative w-[450px] h-[150px] mt-8 mx-auto overflow-hidden">
            <h2 className="text-center font-Bricolage font-semibold text-BgColor text-[20px]">
                Curriculum we Offer:
            </h2>
            <div ref={sliderRef} className="keen-slider transition-transform duration-700 ease-in-out">
                {items.map((item, i) => {
                    const visibleIndex = (currentSlide + 1) % items.length;
                    const isCenter = i === visibleIndex;
                    const opacityClass = isCenter ? "opacity-100" : "opacity-40";

                    return (
                        <div
                            key={i}
                            className={`keen-slider__slide flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center transition-opacity duration-700 ease-in-out ${opacityClass}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CurriculumCarousel;
