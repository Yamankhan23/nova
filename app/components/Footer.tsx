import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-start items-center md:justify-between gap-12">

                {/* Left: Brand */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
                    <span className="text-3xl font-bold gradient-text">NovaAI</span>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        Next-generation AI tools to supercharge your productivity and workflow.
                    </p>
                </div>

                {/* Center: Links */}
                <div className="flex flex-col sm:flex-row gap-12 text-center md:text-left">
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wide">Product</h4>
                        <Link href="#features" className="block text-sm hover:text-purple-300 transition">Features</Link>
                        <Link href="#highlights" className="block text-sm hover:text-purple-300 transition">Highlights</Link>
                        <Link href="#contact" className="block text-sm hover:text-purple-300 transition">Contact</Link>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wide">Company</h4>
                        <Link href="#" className="block text-sm hover:text-purple-300 transition">About</Link>
                        <Link href="#" className="block text-sm hover:text-purple-300 transition">Careers</Link>
                        <Link href="#" className="block text-sm hover:text-purple-300 transition">Docs</Link>
                    </div>
                </div>

                {/* Right: Socials */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-4">
                        <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Twitter size={18} className="text-gray-200" />
                        </a>
                        <a aria-label="GitHub" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Github size={18} className="text-gray-200" />
                        </a>
                        <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Linkedin size={18} className="text-gray-200" />
                        </a>
                    </div>

                    <div className="text-xs text-gray-500 mt-2">
                        © {new Date().getFullYear()} NovaAI — Crafted with care.
                    </div>
                </div>
            </div>
        </footer>
    );
}
