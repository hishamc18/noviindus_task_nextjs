import React from "react";
import Image from "next/image";

const SlantedButton = ({ text = "View All", className = "" }) => {
    return (
        <button className={`relative group w-fit ${className}`}>
            {/* Back */}
            <div className="absolute inset-0 bg-[#EBC48B] rounded-md transform -skew-x-[2deg] skew-y-[2deg] transition-all duration-300 group-hover:skew-x-0 group-hover:skew-y-0 z-0 group-hover:scale-90" />

            {/* Front */}
            <div className="relative flex items-center gap-3 px-6 py-3 bg-BgColor text-white rounded-md text-lg transform skew-x-[5deg] -skew-y-[5deg] transition-all duration-3\200 group-hover:skew-x-0 group-hover:skew-y-0 z-10">
                {text}
                <Image src="/Button/button_arrow.svg" alt="button_arrow" width={13} height={13} />
            </div>
        </button>
    );
};

export default SlantedButton;
