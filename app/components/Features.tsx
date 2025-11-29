import { Brain, Zap, ShieldCheck } from "lucide-react";

export default function Features() {
    const items = [
        {
            icon: <Brain size={32} />,
            title: "Adaptive Intelligence",
            desc: "Learns from real-time patterns to optimize workflows automatically.",
        },
        {
            icon: <Zap size={32} />,
            title: "Lightning Automation",
            desc: "Executes complex tasks at blazing speed with near-zero latency.",
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Enterprise Security",
            desc: "Protected by multi-layer encryption and advanced risk analysis.",
        },
    ];

    return (
        <section
            id="features"
            className="relative py-28 px-6 bg-black overflow-hidden"
        >
            {/* Soft Purple Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/30 blur-[200px] -z-10" />

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Powerful Features
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Built with precision. Designed to scale. Engineered for the future.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-10 mt-20">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 
                            backdrop-blur-xl shadow-xl 
                            hover:shadow-purple-600/30 hover:-translate-y-1 
                            hover:border-purple-400/20 transition-all duration-300"
                        >
                            {/* Spotlight Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-purple-500 to-pink-500 blur-xl rounded-2xl transition duration-300 -z-10" />

                            {/* Icon */}
                            <div className="text-purple-400 group-hover:text-purple-300 transition duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mt-3 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
