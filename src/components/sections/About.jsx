import { MouseFollow } from "../MouseFollow.jsx";
import { motion } from "framer-motion";

export const AboutPage = () => {
    const skills = [
        { name: "JavaScript", level: 60 },
        { name: "HTML", level: 80 },
        { name: "CSS", level: 85 },
        { name: "PHP", level: 50 },
    ];

    const frameworks = [
        { name: "Laravel", level: 60 },
        { name: "React", level: 70 },
        { name: "TailwindCSS", level: 90 },
        { name: "Excalibur.js", level: 75 },
    ];

    const tools = [
        { name: "Miro", level: 90 },
        { name: "Figma", level: 90 },
        { name: "Git", level: 80 },
    ];

    return (
        <>
            <section
                id="about"
                className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden pt-20"
                style={{
                    backgroundImage: "url('/jakehersbach/images/moses-rock.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <MouseFollow />

                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

                <div className="absolute top-5 left-5 md:top-10 md:left-10 text-left">
                    <motion.h1
                        className="text-4xl md:text-[7rem] font-bold leading-none tracking-tight"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About
                    </motion.h1>
                    <div className="h-1 w-12 md:w-20 bg-[#f0a500] my-2 md:my-4"></div>
                    <motion.h1
                        className="text-4xl md:text-[7rem] font-bold leading-none tracking-tight"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Me
                    </motion.h1>
                </div>

                <div className="absolute bottom-20 md:bottom-10 right-5 md:right-10 text-right max-w-full md:max-w-xl px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-base md:text-2xl tracking-wide mb-4 md:mb-6">
                            Hey, I'm Jake! I am a student in Rotterdam with a love for creating unique thought-through experiences. Sometimes I could get lost in the details, but I believe that every little thing matters.
                        </p>
                    </motion.div>
                </div>
            </section>


            <section className="bg-[#131313] text-white py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Languages & Skills</h2>
                    <div className="h-1 w-20 bg-[#f0a500] mx-auto mb-10"></div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[#f0a500] mb-4">Languages</h3>
                        <div className="space-y-4">
                            {skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-[#f0a500] h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[#f0a500] mb-4">Frameworks</h3>
                        <div className="space-y-4">
                            {frameworks.map((framework, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between">
                                        <span>{framework.name}</span>
                                        <span>{framework.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-[#f0a500] h-2 rounded-full"
                                            style={{ width: `${framework.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-[#f0a500] mb-4">Tools</h3>
                        <div className="space-y-4">
                            {tools.map((tool, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between">
                                        <span>{tool.name}</span>
                                        <span>{tool.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-[#f0a500] h-2 rounded-full"
                                            style={{ width: `${tool.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
