import Image from "next/image";
import React from "react";

export default function StoryCard({ title, description, imageSrc, imagePosition }) {
    return (
        <div className="relative bg-[#FFF3E1] rounded-2xl px-6 py-8 shadow-md w-full md:w-[450px] hover:border-r-3 hover:border-b-3 border-BgColor transition-all duration-500">
            <div className="mr-20">
                <h3 className="text-[20px] font-bold text-BgColor mb-2">{title}</h3>
                <p
                    className="text-BgColor text-[14px]"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
            <div
                className={
                    imagePosition ||
                    "absolute -top-8 right-0 md:w-[150px] md:h-[200px] h-[180px] w-[130px]"
                }
            >
                <Image
                    src={imageSrc}
                    alt={`${title} Icon`}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
}
