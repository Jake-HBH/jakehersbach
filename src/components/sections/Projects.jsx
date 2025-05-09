import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
    const projects = [
        {
            id: "risenstrike",
            title: "Rise 'N Strike",
            summary: "Rise ’N Strike is a fun alarm clock that wakes you—with lights, sound, and a boxing glove punch.",
            skills: ["School Team Project", "CLE1", "HTML", "CSS", "Adafruit Circuit Playground Express"],
            image: "/jakehersbach/images/rise-poster.png",
        },
        {
            id: "cube",
            title: "CUBE",
            summary: "A reservation website for a bouldergym in Enschede.",
            skills: ["School Team Project", "CLE2", "HTML", "CSS", "PHP"],
            image: "/jakehersbach/images/cube-poster.png",
        },
        {
            id: "easeov",
            title: "EaseOv",
            summary: "A web app made to improve public transport for people with chronic illnesses, featuring real-time disruptions, emergency help, and accessibility info.",
            skills: ["School Team Project", "CLE3", "React", "Node.js", "MongoDB"],
            image: "/jakehersbach/images/easeov-logo.png",
        },
        {
            id: "schiezofriends",
            title: "Schie-Zo-Friends",
            summary: "Schie-Zo-Friends is a pixel art co-op game where two players control a seagull wing each exploring the Schiecentrale in Rotterdam. The goal shifts from returning a lost book page to solving a murder, with hand-drawn pixel art backgrounds based on the real location.",
            skills: ["School Team Project", "CLE4", "HTML", "CSS", "Excalibur.js"],
            image: "/jakehersbach/images/schie-intro.png",
        },
        {
            id: "gaiapark",
            title: "Gaia Park",
            summary: "Gaia Park is an innovative environmental restoration concept where visitors use the Gaia Seed device to plant bio-engineered seeds and contribute to reforestation, blending technology with nature to promote sustainability.",
            skills: ["School Team Project", "TLE1-1", "HTML", "CSS", "JavaScript", "PHP"],
            image: "/jakehersbach/images/gaia-park.png",
        },
        {
            id: "openhiring",
            title: "Open Hiring",
            summary: "A website concept for Open Hiring that promotes fair job applications by keeping applicants anonymous and letting the first to sign up get the job. No bias, just opportunity.",
            skills: ["School Team Project", "TLE1-2", "HTML", "CSS", "JavaScript", "PHP", "Blade"],
            image: "/jakehersbach/images/open-logo.png",
        },
        {
            id: "signtrail",
            title: "Sign Trail",
            summary: "A webcam-based sign language learning game where players help a snail progress by signing letters correctly, with three difficulty levels and a personal profile for tracking progress.",
            skills: ["School Team Project", "TLE2-1", "HTML", "CSS", "React.js", "Excalibur.js"],
            image: "/jakehersbach/images/sign-easy1.png",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen py-20 px-4 bg-black text-white relative"
            style={{
                backgroundImage: "url('/jakehersbach/images/moses-rock.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-0"></div>

            {/* Header Section */}
            <div className="text-center mb-16 relative z-10">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h1>
                <div className="mx-auto mt-4 h-1 w-24 bg-[#f0a500]" />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="relative h-60">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                                <h3 className="text-xl font-semibold text-[#f0a500] mb-1">{project.title}</h3>
                                <p className="text-sm text-white">{project.summary}</p>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4 flex-grow">
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-[#f0a500] text-white py-1 px-3 rounded-full text-xs hover:bg-[#d89a00] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={`/jakehersbach/projects/${project.id}`}
                                className="mt-auto inline-block bg-[#f0a500] text-black py-2 px-4 rounded-full text-sm font-semibold hover:bg-[#d89a00] transition text-center"
                            >
                                View Details →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
