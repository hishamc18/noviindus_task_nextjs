import React from "react";
import Image from "next/image";
import SlantedButton from "./Button";

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
];

const BlogPosts = () => {
    return (
        <section className="px-6 md:px-20 py-14 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="md:text-[36px] font-Bricolage font-medium text-[#655945]">
                    Our Latest <span className="font-bold">Blog Posts</span>
                </h2>
                <SlantedButton text="View All" className="mt-6" />
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {blogPosts.map((post, index) => (
                    <div key={index} className="space-y-3">
                        <div className="rounded-md overflow-hidden w-full h-[200px] relative">
                            <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="text-[14px] font-semibold text-[#655945]">{post.title}</h3>
                        <p className="text-[12px] text-[#65594599]">{post.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogPosts;
