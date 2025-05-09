import { MouseFollow } from "../MouseFollow.jsx";
import { motion } from "framer-motion";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
            style={{
                backgroundImage: "url('/jakehersbach/images/moses-rock.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <MouseFollow />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

            <div
                className="absolute top-10 md:top-10 left-5 md:left-10 text-left"
                style={{
                    color: "#ffffff",
                }}
            >
                <motion.h1
                    className="text-4xl md:text-[5rem] font-bold leading-none tracking-tight"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Creative
                </motion.h1>
                <div className="h-1 w-12 md:w-20 bg-[#f0a500] my-2 md:my-4"></div>
                <motion.h1
                    className="text-4xl md:text-[5rem] font-bold leading-none tracking-tight"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Web Developer
                </motion.h1>
            </div>

            {/* Description Section */}
            <div
                className="absolute bottom-20 md:bottom-10 right-5 md:right-10 text-right max-w-full md:max-w-xl px-4 md:px-0"
                style={{
                    color: "#ffffff",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-base md:text-2xl tracking-wide">
                        Hey there! I am a creative web developer based in the Netherlands. I love exploring new technologies and creating cool projects. I am always looking for new challenges and opportunities to learn and grow. Let's connect!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};