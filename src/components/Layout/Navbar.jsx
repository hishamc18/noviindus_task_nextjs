"use client"
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CoursesDropdown from "components/CoursesDropdown";
import { useState } from "react";

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-BgColor font-Bricolage text-white px-4 md:px-22 flex justify-center items-center h-[60px]">
            <div className="relative flex items-center justify-between w-full">
                {/* Mobile Dropdown */}
                <div className="lg:hidden absolute left-0">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost px-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-BgColor rounded-box w-52"
                        >
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Courses</a>
                                <ul className="p-2 border-l ml-6 my-2 border-white">
                                    <li>
                                        <a>Course 1</a>
                                    </li>
                                    <li>
                                        <a>Course 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Careers</a>
                            </li>
                            <li>
                                <a>News & Blog</a>
                            </li>
                            <li>
                                <a>Payments</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Centered Logo & Heading */}
                <div className="flex items-center space-x-2 md:mx-0 mx-auto absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                    <Image src="/logo/logo1.svg" alt="Educare Logo" width={30} height={30} />
                    <span className="font-bold text-[20px] md:text-[26px]">Educare</span>
                </div>

                {/* Mobile Phone Icon Button */}
                <div className="lg:hidden absolute right-0  mr-4">
                    <button>
                        <Image src="/Navbar/phone.svg" alt="phone" width={32} height={32} />
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-8 text-[14px] font-sans relative">
                    <span className="cursor-pointer">About us</span>

                    <div className="relative">
                        <button
                            onClick={() => setShowDropdown((prev) => !prev)}
                            className="flex items-center space-x-1 cursor-pointer"
                        >
                            <span>Courses</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <CoursesDropdown isOpen={showDropdown} />
                    </div>

                    <span className="cursor-pointer">Careers</span>
                    <span className="cursor-pointer">News & Blog</span>
                    <span className="cursor-pointer">Payments</span>
                </nav>



                {/* Contact Info + Button */}
                <div className="hidden lg:flex items-center space-x-6 text-sm">
                    <div className="flex flex-col gap-[3px]">
                        <div className="flex items-center space-x-2">
                            <Image src="/Navbar/phone.svg" alt="phone" width={16} height={16} />
                            <span className="text-[13px]">+974 55555 3456</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src="/Navbar/mail.svg" alt="mail" width={16} height={16} />
                            <span className="text-[13px]">info@educare.qa</span>
                        </div>
                    </div>
                    <button className="bg-white text-[#7D1D36] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    );
}
