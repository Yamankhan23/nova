"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 overflow-hidden">
            {/* Blur + Semi-Transparent Background */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl border-b border-white/10 pointer-events-none" />

            <div className="relative w-full max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold gradient-text tracking-wide relative z-10">
                    NovaAI
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-sm font-medium relative z-10">
                    <Link href="#features" className="hover:text-purple-300 transition">
                        Features
                    </Link>
                    <Link href="#highlights" className="hover:text-purple-300 transition">
                        Highlights
                    </Link>
                    <Link href="#contact" className="hover:text-purple-300 transition">
                        Contact
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setOpen(!open)} className="md:hidden relative z-10">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden relative z-10 w-full max-w-full bg-black/80 backdrop-blur-xl px-4 sm:px-6 py-4 space-y-4 border-t border-white/10 box-border overflow-hidden">
                    <Link
                        href="#features"
                        className="block text-white font-medium hover:text-purple-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#highlights"
                        className="block text-white font-medium hover:text-purple-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        Highlights
                    </Link>
                    <Link
                        href="#contact"
                        className="block text-white font-medium hover:text-purple-300 transition"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};
