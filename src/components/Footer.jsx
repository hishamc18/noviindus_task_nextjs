"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-BgColor flex flex-col text-white">
            <div className="w-full py-6 md:px-20 flex flex-col md:flex-row md:justify-evenly md:items-start gap-10 px-6">
                {/* Logo and Name - hidden on mobile */}
                <div className="hidden md:flex items-center space-x-2">
                    <Image src="/logo/logo1.svg" alt="Logo" width={20} height={20} />
                    <h2 className="text-xl font-semibold">Educare</h2>
                </div>

                {/* Navigation */}
                <div className="flex w-full gap-16 justify-evenly">
                    <div>
                        <div>
                            <h3 className="text-white font-semibold text-[18px] md:text-[20px] mb-3">Navigation</h3>
                            <ul className="space-y-2 text-[14px] md:text-[16px]">
                                <li>Home</li>
                                <li>About</li>
                                <li>Curriculum</li>
                                <li>Career</li>
                                <li>Blogs</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-[18px] md:text-[20px] mb-3">Contact info</h3>
                        <ul className="space-y-2 underline text-[14px] md:text-[16px]">
                            <li>
                                <a href="mailto:educare@gmail.com">educare@gmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:info@educare.com">info@educare.com</a>
                            </li>
                            <li>
                                <a href="tel:+97444123456">+974 4412 3456</a>
                            </li>
                            <li>
                                <a href="tel:+97455347890">+974 5534 7890</a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4 md:text-lg">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="flex gap-12 md:gap-10 md:w-[600px] justify-evenly">
                    {/* <Image src="/Footer/location.svg" alt="Location" width={126} height={266} /> */}
                    <div className="relative w-[80px] h-[160px] md:w-[126px] md:h-[266px]">
                        <Image src="/Footer/location.svg" alt="Location" fill className="object-contain" />
                    </div>

                    <div>
                        <h3 className="text-white font-semibold  text-[18px] md:text-[20px] mb-3">Office Address</h3>
                        <p className="text-[14px] md:text-[16px] leading-relaxed">
                            EducareEducation Center
                            <br />
                            Building 45, Al Sadd Street,
                            <br />
                            Doha, Qatar
                        </p>
                        <span className="underline text-sm mt-6 inline-block">View on Map</span>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="border-t border-[#DCC19659]/65 px-6 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-[14px] text-white gap-2">
                <p>
                    © 2024 <span className="underline">educare</span>
                </p>
                <p>
                    Designed By <span className="text-[#DCC196]">Noviindus Technologies</span>
                </p>
                <div className="flex gap-2 text-[#DCC196]">
                    <span className="cursor-pointer">Terms & Conditions</span>
                    <span className="cursor-pointer">Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
