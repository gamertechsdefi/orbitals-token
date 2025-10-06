"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className=" bg-blur  my-2 flex items-center justify-between px-4 md:px-8 border-2 border-neutral-500 mx-4 md:mx-8 mt-4 rounded-2xl relative">
            {/* Left: logo */}
            <Link href="/" className="flex items-center">
                <Image src="/images/logo.jpg" alt="orbital logo" width={75} height={75} />
            </Link>

            {/* spacer ensures the mobile menu button sits at the far right while preserving desktop layout */}
            <div className="flex-1" />

            {/* Desktop nav - hidden on small screens */}
            <nav className="hidden md:flex gap-8 items-center">
                <Link href="#" className="px-4 py-2 rounded-lg bg-neutral-700 border-2 border-neutral-500">ABOUT</Link>
                <Link href="#" className="px-4 py-2 rounded-lg bg-neutral-700 border-2 border-neutral-500">TOKENOMICS</Link>
                <Link href="#" className="px-4 py-2 rounded-lg bg-neutral-700 border-2 border-neutral-500">HOW TO BUY</Link>
                <Link href="#" className="px-4 py-2 rounded-lg bg-neutral-700 border-2 border-neutral-500">COMMUNITY</Link>
            </nav>

            {/* Desktop call-to-action */}
            <div className="hidden md:block">
                <button className="font-bold text-xl px-8 md:ml-16 py-3 bg-green-700 border-2 rounded-xl border-green-500">BUY NOW</button>
            </div>

            {/* Mobile menu toggle - visible on small screens only (kept at the far right by spacer) */}
            <button
                className="md:hidden p-2 rounded-md hover:bg-neutral-700"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile menu panel - shown when `open` is true */}
            <div className={`md:hidden ${open ? "block" : "hidden"} absolute left-0 right-0 top-full mt-3 bg-neutral-800 border-2 border-neutral-500 rounded-lg p-4 shadow-lg z-20`}>
                <nav className="flex flex-col gap-3">
                    <Link href="#" className="px-4 py-2">About</Link>
                    <Link href="#" className="px-4 py-2">Tokenomics</Link>
                    <Link href="#" className="px-4 py-2">How to buy</Link>
                    <Link href="#" className="px-4 py-2 ">Community</Link>
                </nav>

                <div className="mt-3">
                    <button className="w-full font-bold text-lg px-4 py-3 bg-green-700 border-2 rounded-xl border-green-500">BUY NOW</button>
                </div>
            </div>
        </header>
    );
}