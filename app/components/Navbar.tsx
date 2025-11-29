"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold gradient-text tracking-wide">
                    NovaAI
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-sm font-medium">
                    <Link href="#features" className="hover:text-purple-300 transition">Features</Link>
                    <Link href="#highlights" className="hover:text-purple-300 transition">Highlights</Link>
                    <Link href="#contact" className="hover:text-purple-300 transition">Contact</Link>
                </div>

                {/* Mobile Menu */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-4 space-y-4 border-t border-white/10">
                    <Link href="#features" className="block">Features</Link>
                    <Link href="#highlights" className="block">Highlights</Link>
                    <Link href="#contact" className="block">Contact</Link>
                </div>
            )}
        </nav>
    );
};
