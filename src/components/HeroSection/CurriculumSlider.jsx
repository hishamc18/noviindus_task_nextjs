"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
    { src: "/HeroSection/Curriculum/cur1.png", alt: "cur1" },
    { src: "/HeroSection/Curriculum/cur2.png", alt: "cur2" },
    { src: "/HeroSection/Curriculum/cur1.png", alt: "cur1" },
    { src: "/HeroSection/Curriculum/cur2.png", alt: "cur2" },
];

const CurriculumCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[450px] h-[150px] mt-8 mx-auto overflow-hidden ">
            <h2 className="text-center font-Bricolage font-semibold text-BgColor text-[20px]">Curriculum we Offer:</h2>
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${(index % items.length) * 150}px)`
                }}
            >
                {items.concat(items).map((item, i) => {
                    const current = index % items.length;
                    const position = i-1 % items.length;

                    const isCenter = position === current;
                    const opacity = isCenter ? "opacity-100" : "opacity-20";

                    return (
                        <div
                            key={i}
                            className={`flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center transition-all duration-700 ease-in-out ${opacity}`}
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
