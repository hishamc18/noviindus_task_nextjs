"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-BgColor h-[387px] flex flex-col justify-between text-white">
            <div className="flex w-full justify-between py-10 px-20">
                {/* Logo and Name */}
                <div>
                    <div className="flex items-center space-x-2">
                            <Image src="/logo/logo1.svg" alt="Logo" width={20} height={20} />
                        <h2 className="text-xl font-semibold">Educare</h2>
                    </div>
                </div>

                {/* Nav links */}
                <div className="flex w-full gap-30 ml-52">
                    <div>
                        <h3 className="text-white font-semibold text-[20px] mb-3">Navigation</h3>
                        <ul className="space-y-2 text-[16px]">
                            <li>Home</li>
                            <li>About</li>
                            <li>Curriculum</li>
                            <li>Career</li>
                            <li>Blogs</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    {/* Contact*/}
                    <div>
                        <h3 className="text-white font-semibold text-[20px] mb-3">Contact info</h3>
                        <ul className="space-y-2 underline text-[16px]">
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
                        <div className="flex space-x-4 mt-4 text-lg">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </div>
                    </div>
                    {/* Address */}
                    <div className="flex gap-8 w-[400px]">
                        <Image src="/Footer/location.svg" alt="Logo" width={126} height={266} />
                        <div>
                            <h3 className="text-white font-semibold text-[20px] mb-3">Office Address</h3>
                            <p className="text-[16px] leading-relaxed">
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
            </div>

            {/* b-line */}
            <div className="h-[93px] border-t border-[#DCC19659]/65 px-20 flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-300">
                <p>
                    © 2024 <span className="underline">educare</span>
                </p>
                <p>
                    Designed By <span className="text-[#DCC196]">Noviindus Technologies</span>
                </p>
                <div className="flex gap-2 text-[#DCC196">
                    <span className="text-[#DCC196]">Terms & Conditions</span>
                    <span className="text-[#DCC196]">Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;