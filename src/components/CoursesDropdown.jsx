"use client";
import { useState } from "react";

const courseCategories = [
    {
        name: "For School Students",
        subjects: [
            "Math", "Physics", "Chemistry", "Biology", "English", "Arabic",
            "Computer Science", "Civics", "Geography", "Economics", "History", "Politics",
        ],
    },
    {
        name: "For kids",
        subjects: ["Drawing", "Reading", "Basic Math"],
    },
    {
        name: "Other",
        subjects: ["Public Speaking", "Creative Writing"],
    },
];

export default function CoursesDropdown({ isOpen }) {
    const [activeCategory, setActiveCategory] = useState(courseCategories[0]);

    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-0 mt-6 gap-2 z-50 flex bg-transparent text-black">
            {/* Category List */}
            <div className="w-60 bg-FeatBg rounded-xl shadow-lg p-1">
    <ul>
        {courseCategories.map((cat, index) => (
            <li
                key={index}
                className={`px-4 py-3 cursor-pointer flex justify-between items-center 
                    hover:bg-BgColor hover:text-white rounded-xl 
                    ${cat.name === activeCategory.name ? "bg-BgColor text-white" : ""}`}
                onMouseEnter={() => setActiveCategory(cat)}
            >
                <span>{cat.name}</span>
                <span className="text-[22px] ml-2">{'›'}</span>
            </li>
        ))}
    </ul>
</div>


            {/* Subjects Panel */}
            <div className="w-64 px-4 py-3 bg-[#FFF3E1] rounded-xl shadow-lg border-l border-gray-300">
                <ul className="space-y-1">
                    {activeCategory.subjects.map((subject, i) => (
                        <li
                            key={i}
                            className="border-b border-gray-200 pb-1 hover:font-semibold cursor-pointer"
                        >
                            {subject}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
