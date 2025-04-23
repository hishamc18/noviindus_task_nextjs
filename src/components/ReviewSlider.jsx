"use client";
import { React, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

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
        stars: 4,
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
    {
        name: "Sarah H",
        title: "Accountant",
        text:
            "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
        stars: 4,
        image: "/review/rev1.png",
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
    <div className="relative bg-white border-2 border-BgColor/10 rounded-3xl px-4 py-10 h-full shadow-sm">
        <div className="absolute -top-8 left-6">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-BgColor object-cover"
            />
        </div>
        <div className="absolute -top-4 right-6">
            <Image src="/review/quoteIcon.svg" alt="Educare Logo" width={25} height={25} />
        </div>
        <div className="pt-10 text-gray-800 text-[14px] leading-relaxed">“{testimonial.text}”</div>
        <div className="flex justify-between">
            <div className="mt-6 flex items-center gap-1 text-[#fbbc04]">
                {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
            </div>
            <div className="mt-4 text-end">
                <p className="text-BgColor font-semibold text-[15px]">{testimonial.name}</p>
                <p className="text-[12px] text-[#4E4E4E]">– {testimonial.title}</p>
            </div>
        </div>
    </div>
);

const ReviewSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();
    const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="py-8 md:py-12 px-4 md:px-14 bg-white">
            <h2 className="text-center text-[24px] font-Bricolage md:text-[36px] text-[#655945] mb-8 md:mb-20">
                Hear from our <span className="font-semibold">Valuable Parents</span>
            </h2>

            <div className="relative flex items-center">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex pt-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_33.3333%] md:px-4">
                                <TestimonialCard testimonial={t} />
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={scrollPrev} className="hidden md:block absolute -left-10 z-10 text-BgColor/30">
                    <ChevronLeft size={70} strokeWidth={1} />
                </button>

                <button onClick={scrollNext} className="hidden md:block absolute -right-10 z-10 text-BgColor">
                    <ChevronRight size={70} strokeWidth={1} />
                </button>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === selectedIndex ? "bg-BgColor" : "bg-BgColor/25"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewSlider;