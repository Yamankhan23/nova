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
            className="relative py-24 px-6 bg-black overflow-hidden"
        >
            {/* Decorative Glow Element */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/40 blur-[180px] -z-10" />

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                    Powerful Features
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Built with precision. Designed to scale. Engineered for the future.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg
                         hover:scale-[1.03] hover:shadow-purple-600/40 
                         transition-all duration-300 group"
                        >
                            <div className="text-purple-400 group-hover:text-purple-300 transition">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                            <p className="text-gray-400 mt-3">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
