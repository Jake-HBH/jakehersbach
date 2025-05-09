import React, { useState } from "react";

export const SignTrail = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="min-h-screen bg-[#131313] p-4 sm:p-8 text-white">
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                        <h1
                            className="text-3xl sm:text-5xl font-bold mb-6 text-left"
                            style={{ color: "#f0a500" }}
                        >
                            Sign Trail
                        </h1>
                        <div className="text-left max-w-full sm:max-w-xl space-y-4 text-sm sm:text-base">
                            <p>
                                For the Sign Language at Intake at Hogeschool Rotterdam during TLE2-1, the teachers asked us to design a tool to help students learn sign language in a fun and effective way.
                                My team and I started by creating a VSD (Value Sensitive Design) to make sure our ideas aligned with the goals and values of the project.
                            </p>
                            <p>
                                This project was especially interesting because we restarted it three times before landing on something we’re proud of. In the end, we built a sign language game where players help a snail move forward by signing the correct letters with their hands.
                                The game uses the webcam to track your hand and recognize the signs you're making, which was trained with AI.
                            </p>
                            <p>
                                It’s designed to be both fun and educational, with three difficulty levels:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>Easy:</strong> shows the correct hand sign right away.</li>
                                <li><strong>Medium:</strong> shows the example after 8 seconds if you haven’t signed the right letter.</li>
                                <li><strong>Hard:</strong> no hints — you just sign the letter correctly on your own.</li>
                            </ul>
                            <p>
                                Players also have a personal profile where they can view their stats, like how many games they’ve played, their average time to complete a game, and more.
                            </p>
                            <p>
                                My tasks included building the profile page with all the live statistics and recent games, ensuring the profile's responsiveness and accessibility following WCAG AA standards, creating the in-between screens (confirmation before starting) for the game, adding the informational pop-up on the home screen, and designing the finish screen that displays your game time along with a “Back to Profile” button — so players can immediately see their updated stats.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center gap-4 sm:gap-6">
                        {["sign-easy1.png", "sign-medium1.png", "sign-hard1.png"].map((img, idx) => (
                            <img
                                key={idx}
                                src={`../images/${img}`}
                                alt={`Game screen ${idx + 1}`}
                                onClick={() => openModal(`../images/${img}`)}
                                className="w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
                            />
                        ))}
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-4 sm:p-8 rounded-lg">
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-6 text-center"
                        style={{ color: "#f0a500" }}
                    >
                        The pictures
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { src: "sign-vsd.jpg" },
                            { src: "sign-vsd1.jpg" },
                            { src: "sign-vsd2.png" },
                            { src: "sign-games.png", label: "Brainstorming the game ideas" },
                            { src: "sign-navigation.png", label: "The Flowchart" },
                            { src: "sign-lfwf.png", label: "Low Fidelity Game Wireframes" },
                            { src: "sign-home1.png", label: "Home Page" },
                            { src: "sign-difficulties.png", label: "Difficulty Page" },
                            { src: "sign-tussen.png", label: "Confirmation Difficulty Page" },
                            { src: "sign-stats.png", label: "Profile Page With Statistics" },
                            { src: "sign-info.png", label: "Information Pop-up" },
                        ].map(({ src, label }, idx) => (
                            <div className="text-center" key={idx}>
                                <p className="text-white mb-2 text-xs sm:text-sm">{label}</p>
                                <img
                                    src={`../images/${src}`}
                                    alt={label}
                                    onClick={() => openModal(`../images/${src}`)}
                                    className="h-40 sm:h-80 object-contain rounded-lg mx-auto cursor-pointer hover:opacity-80 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-[#f0a500] text-black rounded-full p-1 hover:bg-white"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged"
                            className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
