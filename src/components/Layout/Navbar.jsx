"use cleint";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <header className="bg-BgColor font-Bricolage text-white h-[75px] overflow-hidden flex items-center justify-between">

            <div className="flex justify-evenly w-full">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image src="/logo/logo1.svg" alt="Educare Logo" width={30} height={30} />
                    <span className="font-Bricolage font-bold text-[26px]">Educare</span>
                </div>

                {/* Menu Items */}
                <nav className="hidden font-sans md:flex md:w-[650px] justify-center items-center space-x-8 text-[14px]">
                    <span className="cursor-pointer">About us</span>
                    <div className="relative group flex items-center cursor-pointer">
                        <span>Courses</span>
                        <span>
                            <ChevronDown className="h-4" />
                        </span>
                    </div>
                    <span className="cursor-pointer">Careers</span>
                    <span className="cursor-pointer">News & Blog</span>
                    <span className="cursor-pointer">Payments</span>
                </nav>

                {/* Contact info + Button */}
                <div className="hidden md:flex items-center space-x-6 text-sm">
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
