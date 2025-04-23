import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const quotes = [
    "Education is the foundation of greatness; let’s build it together",
    "Learning today, leading tomorrow – the Educare way",
    "Turning dreams into achievements",
    "Empowering minds, shaping futures",
    "Knowledge is the passport to tomorrow",
    "Inspire. Learn. Grow",
];

const QuoteSlider = () => {
    return (
        <div className="bg-FeatBg w-full overflow-hidden flex items-center">
            <Marquee gradient={false} speed={80} pauseOnHover className="text-BgColor text-[16px] md:text-[18px] font-Bricolage py-2 md:py-3">
                {quotes.map((quote, idx) => (
                    <div key={idx} className="flex gap-8 items-center mx-6 shrink-0">
                        <h1 className="whitespace-nowrap">{quote}</h1>
                        <Image src="/Features/Quote.svg" alt="Quote Icon" width={25} height={25} className="shrink-0" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default QuoteSlider;
