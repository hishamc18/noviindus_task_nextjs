import React from "react";
import Image from "next/image";

const TeachingWay = () => {
    return (
        <section className="bg-[##F9F7F4] py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="md:w-2/5 text-[#655945]">
                    <h2 className="text-2xl md:text-[36px] font-Bricolage mb-6">
                        Our way of <span className="font-semibold">Teaching</span>
                    </h2>
                    <ul className="space-y-4 list-disc list-outside pl-7 text-[#655945] text-[14px] leading-[1.9]">
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

                {/* Image */}
                <div className="md:w-3/5 rounded-xl overflow-hidden shadow-md">
                    <Image
                        src="/Teaching/teaching.png"
                        alt="Teaching approach"
                        className="w-full h-full object-cover rounded-xl"
                        width={800}
                        height={700}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default TeachingWay;
