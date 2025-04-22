import React from "react";
import Image from "next/image";
import SlantedButton from "../components/Button";

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
];

const MasterExams = () => {
    return (
        <section className="bg-[#F9F7F4] md:px-24 py-14 mb-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-14">
                    <div className="flex-1 text-center">
                        <h2 className="text-[28px] ml-36 md:text-[32px] font-Bricolage text-[#49402f]">
                            Master in <span className="font-semibold">IELTS, TOEFL Exams</span>
                        </h2>
                    </div>

                    <div className="ml-auto">
                        <SlantedButton text="View All" />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {exams.map((exam, index) => (
                        <div key={index} className="relative w-full group">
                            <div className="absolute w-full h-full bg-BgColor rounded-2xl rotate-[3deg] transition-all duration-300 group-hover:rotate-0 z-0" />

                            {/* Top Cream Card */}
                            <div className="relative h-full z-10 bg-[#FFF3E1] rounded-2xl border-1 border-BgColor/15 overflow-hidden p-2">
                                <div className="rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={exam.image}
                                        alt={exam.title}
                                        width={500}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-2xl"
                                    />
                                </div>

                                <h3 className="text-[18px] font-semibold text-BgColor mb-2">{exam.title}</h3>
                                <p className="text-[12px] mb-2 text-[#655945] leading-snug">{exam.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-BgColor rounded-full" />
                    <div className="w-3 h-3 bg-BgColor/25 rounded-full" />
                    <div className="w-3 h-3 bg-BgColor/25 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default MasterExams;
