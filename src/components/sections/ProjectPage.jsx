import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Cube } from "../projects/Cube.jsx";
import { EaseOv } from "../projects/EaseOv.jsx";
import { Schiezofriends } from "../projects/Schiezofriends.jsx";
import { RiseNStrike } from "../projects/Rise 'N Strike.jsx";
import { Gaiapark } from "../projects/GaiaPark.jsx";
import { OpenHiring } from "../projects/OpenHiring.jsx";
import { SignTrail } from "../projects/SignTrail.jsx";

export const ProjectPage = () => {
    const { id } = useParams();

    const projectComponents = {
        risenstrike: RiseNStrike,
        cube: Cube,
        easeov: EaseOv,
        schiezofriends: Schiezofriends,
        gaiapark: Gaiapark,
        openhiring: OpenHiring,
        signtrail: SignTrail,
    };

    const ProjectComponent = projectComponents[id];

    if (!ProjectComponent) {
        return <p className="text-center text-gray-300">Project not found.</p>;
    }

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-start text-white relative overflow-hidden"
            style={{
                backgroundImage: "url('/jakehersbach/images/moses-rock.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

            <div
                className="absolute top-5 left-5 md:top-10 md:left-10 flex items-start space-x-6 z-20"
                style={{
                    color: "#ffffff",
                }}
            >
                <div className="flex flex-col items-center">
                    <div className="w-6 h-1 bg-[#f0a500] mb-2 md:w-10"></div>
                    <div className="h-[5rem] w-1 bg-[#f0a500] md:h-[15rem]"></div>
                </div>

                <div className="text-left">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-[7rem] font-bold leading-none tracking-tight"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Project
                    </motion.h1>
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-[7rem] font-bold leading-none tracking-tight"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Details
                    </motion.h1>
                </div>
            </div>

            <div className="relative w-full mt-[10rem] md:mt-[20rem] px-4 sm:px-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-[#1a1a1a] p-4 sm:p-8 rounded-lg shadow-lg">
                        <ProjectComponent />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};