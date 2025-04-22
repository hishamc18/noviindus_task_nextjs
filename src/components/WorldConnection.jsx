import React from "react";
import Image from "next/image";

const WorldConnection= () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="px-20 mx-auto text-center">
        <h2 className="text-2xl md:text-[36px] font-Bricolage text-[#49402f] leading-snug">
          Prepare Your Child for a{" "}
          <span className="font-semibold">World of Opportunities with Educare</span>
        </h2>

        <div className="relative mt-12 w-full h-auto">
          <Image
            src="/World/world_oppo.png"
            alt="World of Opportunities with Educare"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WorldConnection;
