import React from "react";
import Image from "next/image";

const VideoComponent = () => {
    return (
        <section className="bg-white py-14 px-4 md:px-8 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl md:text-[36px] font-Bricolage text-[#655945] mb-8">
                Learn More About <span className="font-semibold">Our Space</span>
            </h2>

            <div className="relative md:min-w-[1200px] bg-red-300 rounded-2xl overflow-hidden shadow-md">
                <Image
                    src="/Video/video.png"
                    alt="Our tutoring space"
                    className="w-full rounded-2xl object-cover"
                    width={1320}
                    height={720}
                />

                <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src="/Video/yt.png" 
                        alt="Play Button"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoComponent;
