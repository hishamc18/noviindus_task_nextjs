import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah H",
        title: "Accountant",
        text:
            "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
        stars: 5,
        image: "/review/rev1.png",
    },
    {
        name: "Ahmed K",
        title: "Engineer",
        text:
            "Educare’s commitment to 1-on-1 learning transformed our son's understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!",
        stars: 5,
        image: "/review/rev2.png",
    },
    {
        name: "Sarah H",
        title: "Accountant",
        text:
            "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
        stars: 5,
        image: "/review/rev1.png",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="relative bg-white border-2 border-BgColor/20 rounded-3xl p-4 w-full max-w-md shadow-sm">
        {/* Profile Image */}
        <div className="absolute -top-8 left-6">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[16] h-16 rounded-full border-2 border-BgColor object-cover"
            />
        </div>

        <div className="absolute -top-4 right-6">
            <Image src="/review/quoteIcon.svg" alt="Educare Logo" width={25} height={25} />
        </div>

        <div className="pt-10 text-gray-800 text-[16px] leading-relaxed font-medium">“{testimonial.text}”</div>

        <div className="flex justify-between">
            <div className="mt-6 flex items-center gap-1 text-[#fbbc04]">
                {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
            </div>
            <div className="mt-4 text-end">
                <p className="text-BgColor font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">– {testimonial.title}</p>
            </div>
        </div>
    </div>
);

const ReviewSlider = () => {
    return (
        <div className=" py-12 px-12 bg-white">
            <h2 className="text-center text-[36px] font-Bricolage md:text-[36px] text-[#655945] mb-20">
                Hear from our <span className="font-semibold">Valuable Parents</span>
            </h2>

            <div className="flex items-center justify-center gap-6 px-6 relative">
                <button className="absolute left-0 z-10 rounded-full text-BgColor/30">
                    <ChevronLeft size={60} />
                </button>

                <div className="flex px-12 flex-col md:flex-row gap-6 justify-center">
                    {testimonials.map((t, idx) => (
                        <TestimonialCard key={idx} testimonial={t} />
                    ))}
                </div>

                <button className="absolute right-0 rounded-ful text-BgColor">
                    <ChevronRight size={60} />
                </button>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
                <div className="w-3 h-3 bg-BgColor rounded-full" />
                <div className="w-3 h-3 bg-BgColor/25 rounded-full" />
                <div className="w-3 h-3 bg-BgColor/25 rounded-full" />
            </div>
        </div>
    );
};

export default ReviewSlider;
