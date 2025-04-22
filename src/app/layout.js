import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "/src/components/Layout/Navbar";
import WhatsAppButton from "/src/components/Layout/Whatsapp";
import BookDemoButton from "/src/components/Layout/BookDemo";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Educare",
    description: "E-Learning Platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/logo/logo1.svg" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="fixed top-0 left-0 w-full z-50">
                    <Navbar />
                </div>
                <main className="pt-[75px]">
                    {children}
                </main>
                <WhatsAppButton />
                <BookDemoButton />
            </body>
        </html>
    );
}

