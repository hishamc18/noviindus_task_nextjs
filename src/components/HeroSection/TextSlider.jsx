"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = [
    { highlight: "Personalized One-to-One ", normal: "Tutoring at our center" },
    { highlight: "Individual Tuition, ", normal: "For all students till 12th grade!" },
    { highlight: "Master IELTS, TOEFL, and ", normal: "Beyond with Expert Guidance" },
];

const TextSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-[100px]">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[24px] md:text-[50px] font-Bricolage mb-4 text-center text-[#7c253e]"
                >
                    <div className="flex flex-col leading-tight">
                        <span className="font-extrabold">{texts[activeIndex].highlight}</span>
                        {texts[activeIndex].normal}
                    </div>
                </motion.h1>
            </AnimatePresence>

            <div className="flex space-x-2 mt-2">
                {texts.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                            index === activeIndex ? "bg-[#7c253e]" : "bg-[#7c253e]/30"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TextSlider;
