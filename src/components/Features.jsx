import Image from "next/image";
import React from "react";

const Features = () => {
    return (
        <div className="bg-FeatBg text-BgColor h-[88px] flex justify-center items-center space-x-18 text-[20px]">
            <div className="flex space-x-3 items-center">
                <Image src="/Features/Personal_Attention.svg" alt="Personal Attention" width={25} height={25} />
                <span>Personal Attention</span>
            </div>

            <div className="h-5 border-l border-BgColor"></div>

            <div className="flex space-x-3 items-center">
                <Image src="/Features/Growth.svg" alt="Growth" width={25} height={25} />
                <span>Growth Mindset</span>
            </div>

            <div className="h-5 border-l border-BgColor"></div>

            <div className="flex space-x-3 items-center">
                <Image src="/Features/Skill_Dev.svg" alt="skill_dev" width={25} height={25} />
                <span>Skill Development</span>
            </div>

            <div className="h-5 border-l border-BgColor"></div>

            <div className="flex space-x-3 items-center">
                <Image src="/Features/Passionate.svg" alt="passionate" width={25} height={25} />
                <span>Passionate Teaching</span>
            </div>
        </div>
    );
};

export default Features;
