export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-20 px-5 bg-black text-white overflow-hidden"
        >
            {/* Soft Background Glows (same theme) */}
            <div className="absolute right-0 top-0 w-[380px] h-[380px] bg-pink-600/20 blur-[130px] -z-10" />
            <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-purple-600/20 blur-[130px] -z-10" />

            {/* Heading */}
            <div className="text-center max-w-sm mx-auto">
                <h2 className="text-2xl font-semibold gradient-text">
                    Get in Touch
                </h2>
                <p className="text-gray-400 mt-2 text-xs">
                    Have a question or want to explore NovaAI? Drop a message.
                </p>
            </div>

            {/* Mobile-first ultra minimal card */}
            <div
                className="
                    mt-10 max-w-sm mx-auto
                    bg-black/40 
                    border border-white/10 
                    rounded-lg 
                    p-6 
                    backdrop-blur-md
                    shadow-[0_0_25px_-10px_rgba(168,85,247,0.15)]
                "
            >
                <form className="space-y-6">

                    {/* Name */}
                    <div className="space-y-1">
                        <label className="text-gray-300 text-xs">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="
                                w-full bg-transparent
                                border-b border-white/10
                                pb-2 text-sm 
                                text-white placeholder:text-gray-500
                                focus:border-purple-400/40
                                focus:outline-none transition
                            "
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-gray-300 text-xs">Email</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="
                                w-full bg-transparent
                                border-b border-white/10
                                pb-2 text-sm 
                                text-white placeholder:text-gray-500
                                focus:border-purple-400/40
                                focus:outline-none transition
                            "
                        />
                    </div>

                    {/* Message - mobile friendly (1-line height, super compact) */}
                    <div className="space-y-1">
                        <label className="text-gray-300 text-xs">Message</label>
                        <textarea
                            rows={1}
                            placeholder="Write your message..."
                            className="
                                w-full bg-transparent
                                border-b border-white/10
                                pb-2 text-sm
                                resize-none
                                text-white placeholder:text-gray-500
                                focus:border-purple-400/40
                                focus:outline-none transition
                            "
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="
                            w-full py-2.5 rounded-full text-sm
                            bg-gradient-to-r from-purple-600 to-pink-500
                            font-medium text-white
                            shadow-md shadow-purple-600/20
                            hover:scale-[1.03] active:scale-[0.98]
                            transition-all
                        "
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
