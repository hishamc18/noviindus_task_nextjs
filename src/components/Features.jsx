import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const features = [
    {
        icon: "/Features/Personal_Attention.svg",
        label: "Personal Attention",
    },
    {
        icon: "/Features/Growth.svg",
        label: "Growth Mindset",
    },
    {
        icon: "/Features/Skill_Dev.svg",
        label: "Skill Development",
    },
    {
        icon: "/Features/Passionate.svg",
        label: "Passionate Teaching",
    },
    {
        icon: "/Features/Skill_Dev.svg",
        label: "Skill Development",
    },
    {
        icon: "/Features/Passionate.svg",
        label: "Passionate Teaching",
    },
    {
        icon: "/Features/Skill_Dev.svg",
        label: "Skill Development",
    },
    {
        icon: "/Features/Passionate.svg",
        label: "Passionate Teaching",
    },
];

const Features = () => {
    return (
        <div className="bg-FeatBg font-Bricolage w-full overflow-hidden flex items-center">
            <Marquee
                gradient={false}
                speed={60}
                pauseOnHover
                className="text-BgColor text-[14px] md:text-[24px] font-Bricolage py-4"
            >
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-2 mx-8 shrink-0 ${
                            idx !== features.length - 1 ? "pr-16 border-r border-BgColor" : "border-r pr-16"
                        }`}
                    >
                        <Image src={feature.icon} alt={feature.label} width={25} height={25} />
                        <span>{feature.label}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Features;
