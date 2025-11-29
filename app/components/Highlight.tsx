import { Check } from "lucide-react";

export default function Highlight() {
    const points = [
        "AI-powered decision engine",
        "Self-learning automation models",
        "Real-time performance adaptation",
        "Industry-grade reliability",
    ];

    return (
        <section
            id="highlights"
            className="relative py-32 px-6 bg-black overflow-visible"
        >
            {/* Background Gradient Glow */}
            <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-pink-600/30 blur-[180px] -z-10" />
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-600/30 blur-[180px] -z-10" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

                {/* Left Side – Glowing Orb Panel */}
                <div className="relative flex items-center justify-center">
                    <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 blur-[100px] opacity-70 animate-pulse absolute" />

                    <div className="relative w-[380px] h-[380px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/20 flex items-center justify-center p-6">
                        <h3
                            className="text-3xl font-bold 
                            bg-gradient-to-r from-purple-300 to-pink-400
                            bg-clip-text text-transparent
                            leading-normal text-center px-6"
                        >
                            The Future of Intelligent Automation
                        </h3>
                    </div>
                </div>

                {/* Right Side – Text + Points */}
                <div className="fade-up">

                    <h2
                        className="text-4xl md:text-5xl font-bold 
                        bg-gradient-to-r from-purple-400 to-pink-500 
                        bg-clip-text text-transparent
                        leading-normal pb-2"
                    >
                        Smarter. Faster. Evolving.
                    </h2>

                    <p className="text-gray-300 mt-6 max-w-lg leading-relaxed">
                        NovaAI continuously learns and adapts, allowing your systems to
                        optimize in real time. The more data it sees, the better decisions
                        it makes — creating a future-proof automation experience.
                    </p>

                    <div className="mt-10 space-y-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <Check size={20} className="text-purple-400" />
                                <span>{p}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="mt-10 inline-block px-8 py-4 rounded-full 
                        bg-gradient-to-r from-purple-600 to-pink-500 
                        text-white font-semibold shadow-lg shadow-purple-600/40 
                        hover:scale-105 transition-transform"
                    >
                        Get Started
                    </a>
                </div>
            </div>
            {/* Bottom Fade Fix */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>

        </section>
    );
}
