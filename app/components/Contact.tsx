export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-24 px-6 bg-black text-white overflow-hidden"
        >
            {/* Soft Background Glows (same as Highlight) */}
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-600/20 blur-[160px] -z-10" />
            <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-purple-600/20 blur-[160px] -z-10" />

            {/* Heading */}
            <div className="text-center max-w-lg mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold gradient-text">
                    Get in Touch
                </h2>
                <p className="text-gray-300 mt-3 text-sm">
                    Have a question or want to explore NovaAI? Just drop a message.
                </p>
            </div>

            {/* Minimal Premium Contact Card */}
            <div
                className="
          mt-12 max-w-lg mx-auto 
          bg-white/5 
          backdrop-blur-lg 
          border border-white/10 
          rounded-xl 
          p-8 
          shadow-xl shadow-purple-600/10
        "
            >
                <form className="space-y-5">

                    {/* Name */}
                    <div className="space-y-1">
                        <label className="text-gray-300 text-sm">Name</label>
                        <input
                            type="text"
                            className="
                w-full px-4 py-2.5 
                rounded-md 
                bg-white/5 
                border border-white/10 
                text-white text-sm
                focus:outline-none 
                focus:border-purple-400/40 
                transition
              "
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-gray-300 text-sm">Email</label>
                        <input
                            type="email"
                            className="
                w-full px-4 py-2.5 
                rounded-md 
                bg-white/5 
                border border-white/10 
                text-white text-sm
                focus:outline-none 
                focus:border-purple-400/40 
                transition
              "
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                        <label className="text-gray-300 text-sm">Message</label>
                        <textarea
                            rows={3}
                            className="
                w-full px-4 py-2.5 
                rounded-md 
                bg-white/5 
                border border-white/10 
                text-white text-sm
                resize-none
                focus:outline-none 
                focus:border-purple-400/40 
                transition
              "
                            placeholder="Write your message..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="
              w-full py-2.5 
              rounded-full 
              bg-gradient-to-r from-purple-600 to-pink-500 
              text-white text-sm font-medium 
              shadow-md shadow-purple-600/30
              hover:scale-[1.03]
              transition-transform
            "
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
