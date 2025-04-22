import Image from "next/image";
import React from "react";

const quotes = [
    "Education is the foundation of greatness; let’s build it together",
    "Learning today, leading tomorrow – the Educare way",
    "Turning dreams into achievements",
    "Empowering minds, shaping futures",
    "Knowledge is the passport to tomorrow",
    "Inspire. Learn. Grow.",
];

const QuoteSlider = () => {
    return (
        <div className="bg-FeatBg h-[73px] flex overflow-hidden">
            <div className="whitespace-nowrap animate-marquee flex items-center text-BgColor text-[18px] py-2">
                {quotes.concat(quotes).map((quote, idx) => (
                    <div key={idx} className="flex gap-8 items-center mx-6">
                        <h1>{quote}</h1>
                        <Image src="/Features/Quote.svg" alt="Quote Icon" width={25} height={25} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuoteSlider;
