import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-start text-gray-300 relative overflow-hidden px-4 pt-20 md:pt-32 pb-36 md:pb-48"
            style={{
                backgroundImage: "url('/jakehersbach/images/moses-rock.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-0"></div>


            <div className="text-center mb-16 relative z-10">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h1>
                <div className="mx-auto mt-4 h-1 w-24 bg-[#f0a500]" />
            </div>


            <motion.div
                className="w-full max-w-sm md:max-w-md relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="rounded-lg p-4 md:p-6 border border-gray-700 bg-[#1a1a1a] hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-[#f0a500]">
                        Contact Me
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f0a500] focus:border-[#f0a500] transition"
                                placeholder="Your Name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f0a500] focus:border-[#f0a500] transition"
                                placeholder="Your Email"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f0a500] focus:border-[#f0a500] transition"
                                placeholder="Your Message"
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#f0a500] text-white py-2 px-4 rounded-lg font-medium transition hover:bg-[#d89a00] hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <div className="flex justify-between gap-6">
                            <a
                                href="https://www.linkedin.com/in/jake-hersbach-web-dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-lg text-[#f0a500] hover:text-[#ffc545] transition"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:hersbach3@gmail.com"
                                className="text-lg text-[#f0a500] hover:text-[#ffc545] transition"
                            >
                                Email Me
                            </a>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    );
};
