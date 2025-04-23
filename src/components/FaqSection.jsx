"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What subjects do you offer tutoring in?",
        answer:
            "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
        question: "What ages or grade levels do you tutor?",
        answer:
            "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
        question: "Is tutoring one-on-one or in groups?",
        answer:
            "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
        question: "Can sessions take place at our home?",
        answer:
            "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
        question: "What is the duration and frequency of each tutoring session?",
        answer:
            "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F9F7F4] min-h-[650px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 py-6">
            <h2 className="text-center text-[24px] md:text-[32px] font-Bricolage text-[#49402f] mb-10">
                Frequently asked <span className="font-semibold underline">Questions</span>
            </h2>

            <div className="w-full mx-auto space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-md shadow-sm border-b-1 border-[#CFCFCF]">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left px-6 py-5"
                        >
                            <span className="text-[17px] text-gray-800 font-medium">{faq.question}</span>
                            <ChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                size={20}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                                {faq.answer || "Answer coming soon..."}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
