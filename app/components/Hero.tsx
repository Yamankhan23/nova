"use client";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-36 pb-32 bg-black"
        >
            {/* HERO CONTENT */}
            <div className="relative z-10 max-w-4xl text-center mx-auto">
                <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.15] pb-3
                    bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Experience Intelligence Beyond Imagination
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    NovaAI — a next-generation automation engine powered by neural intelligence.
                </p>

                <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                    <a
                        href="#features"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg shadow-purple-600/40 hover:scale-105 transition-transform"
                    >
                        Explore Features
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-semibold hover:bg-white/10 transition"
                    >
                        Get Early Access
                    </a>
                </div>
            </div>
        </section>
    );
}
