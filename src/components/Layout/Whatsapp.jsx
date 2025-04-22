"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-28 right-8 z-50"
        >
            <span className="absolute inset-0 flex items-center justify-center">
                <span className="absolute w-10 h-10 bg-green-500 rounded-full opacity-70 ping-slow"></span>
            </span>
            <div className="relative bg-[#2FAF60] text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition">
                <FaWhatsapp size={24} />
            </div>
        </a>
    );
}
