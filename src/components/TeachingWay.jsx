"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Teaching/teaching.png",
  "/Teaching/teaching2.jpeg",
  "/Teaching/teaching3.jpeg",
];

const TeachingWay = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F9F7F4] py-16 px-4 md:px-20 ">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-2/5 text-[#655945]">
          <h2 className="text-2xl md:text-[36px] font-Bricolage mb-6">
            Our way of <span className="font-semibold">Teaching</span>
          </h2>
          <ul className="space-y-4 list-disc list-outside pl-7 text-[14px] leading-[1.9]">
            <li>
              Every teacher at <strong>Educare</strong> brings passion to their lessons, making learning
              enjoyable with engaging activities tailored to inspire and motivate each student.
            </li>
            <li>
              We focus on creating a supportive environment where individual strengths are recognized, and
              personalized attention helps students excel.
            </li>
            <li>
              Our approach combines innovative teaching methods with real-world applications, ensuring
              students not only learn but also understand and apply their knowledge effectively.
            </li>
          </ul>
        </div>

        {/* Fade Image Slideshow */}
        <div className="relative md:w-3/5 w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`Teaching image ${current + 1}`}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TeachingWay;
