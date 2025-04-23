"use client";

import { useState } from "react";
import DemoModal from "../DemoModal";

export default function BookDemoButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <a
                onClick={() => setOpen(true)}
                className="fixed mt-20 top-1/2 right-3 -translate-y-1/2 rotate-90 origin-right bg-BgColor hover:bg-FeatBg hover:text-BgColor text-[14px] text-white px-4 py-2 rounded-md shadow-lg z-50 cursor-pointer transition"
            >
                Book a Free Demo Class
            </a>
            <DemoModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
