"use client";
import React from "react";
import Image from "next/image";
import SlantedButton from "./Button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const blogPosts = [
    {
        title: "Top tips for effective home tutoring",
        desc: "Share practical advice on how students can make the most out of tutoring sessions.",
        img: "/Blogs/blog1.png",
    },
    {
        title: "Building a productive study environment",
        desc: "Share practical advice on how students can make the most out of tutoring sessions.",
        img: "/Blogs/blog2.png",
    },
    {
        title: "5 Skills every great tutor should have",
        desc: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
        img: "/Blogs/blog3.png",
    },
    {
        title: "Getting the best individual tuition",
        desc: "Share practical advice on how students can make the most out of tutoring sessions.",
        img: "/Blogs/blog4.png",
    },
    {
        title: "5 Skills every great tutor should have",
        desc: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
        img: "/Blogs/blog3.png",
    },
    {
        title: "Building a productive study environment",
        desc: "Share practical advice on how students can make the most out of tutoring sessions.",
        img: "/Blogs/blog2.png",
    },
    {
        title: "5 Skills every great tutor should have",
        desc: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
        img: "/Blogs/blog3.png",
    },
    {
        title: "Top tips for effective home tutoring",
        desc: "Share practical advice on how students can make the most out of tutoring sessions.",
        img: "/Blogs/blog1.png",
    },
    {
        title: "5 Skills every great tutor should have",
        desc: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
        img: "/Blogs/blog3.png",
    },
];

const BlogPosts = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 0 },
            },
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 0 },
            },
        },
        slides: { perView: 1, spacing: 0 },
        loop: true,
    });

    return (
        <section className="px-4 md:px-20 md:py-14 py-8 bg-white">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                {/* Text */}
                <div className="flex-1 px-1 md:px-0">
                    <h2 className="text-[20px] md:text-[36px] font-Bricolage font-medium text-[#655945] leading-tight">
                        Our Latest <span className="font-bold">Blog Posts</span>
                    </h2>
                </div>

                {/* Button */}
                <div className="ml-4 shrink-0">
                    <SlantedButton text="View All" className="mt-1 scale-75" />
                </div>
            </div>

            {/* Swipable Blog Cards */}
            <div ref={sliderRef} className="keen-slider">
                {blogPosts.map((post, index) => (
                    <div key={index} className="keen-slider__slide px-4">
                        <div className="space-y-3">
                            <div className="rounded-md overflow-hidden w-full h-[200px] relative">
                                <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" />
                            </div>
                            <h3 className="text-[14px] font-semibold text-[#655945]">{post.title}</h3>
                            <p className="text-[12px] text-[#65594599]">{post.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogPosts;
