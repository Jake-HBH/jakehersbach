import React, { useState } from "react";

export const Schiezofriends = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [mediaType, setMediaType] = useState("image");

    const openModal = (src, type = "image") => {
        setSelectedMedia(src);
        setMediaType(type);
    };

    const closeModal = () => {
        setSelectedMedia(null);
        setMediaType("image");
    };

    return (
        <section className="min-h-screen bg-[#131313] text-white p-4 sm:p-8">
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                            Schie-zo-friends
                        </h1>
                        <p className="text-left max-w-full sm:max-w-xl text-sm sm:text-base">
                            During CLE4 we made a co-op pixel art game inspired by Schiecentrale in Rotterdam, where our team based both the setting and the story.
                            We chose a seagull as the main character, reflecting the atmosphere of the location — there were seagulls everywhere during our visits.
                            <br /><br />
                            The game begins with a light-hearted mission: a young boy loses a page from his book, and the seagull sets out to return it.
                            But the tone quickly shifts when the seagull becomes an unexpected witness to a murder.
                            The story evolves into a detective-style adventure where the player helps the police solve the crime and eventually confronts the murderer in a final boss fight.
                            <br /><br />
                            The gameplay is designed for two players, where each person controls one wing of the seagull.
                            One player jumps left, the other jumps right — and flying is only possible when both jump simultaneously.
                            This mechanic adds a unique layer of teamwork and rhythm.
                            <br /><br />
                            All backgrounds were hand-drawn and are based on real buildings and details from the Schiecentrale area.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="../images/schie-intro.png"
                            alt="Schiezofriends Logo"
                            onClick={() => openModal("../images/schie-intro.png")}
                            className="w-full h-auto max-w-md object-contain rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                        />
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-4 sm:p-8 rounded-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: "#f0a500" }}>
                        The assets/art of the game
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { src: "schie-lobby.png", label: "The Level Lobby" },
                            { src: "schie-murder.png", label: "The Witness" },
                            { src: "schie-terras.png", label: "The Schiecentrale Terrace" },
                            { src: "schie-terras.gif", label: "The Schiecentrale Terrace in-game" },
                            { src: "schie-turbine.png", label: "The Turbinehal" },
                            { src: "schie-turbinegame.png", label: "The Turbinehal in-game" },
                            { src: "schie-waterkant.png", label: "The Boss Level (Schiecentrale Water Side)" },
                            { src: "schie-bosslevel.png", label: "The Boss Level in-game" },
                            { src: "schie-appartment.png", label: "The Apartment Level" },
                            { src: "schie-characters.png", label: "The Game Characters" },
                            { src: "schie-seagull.gif", label: "The Seagull Animation Spritesheet" },
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

                        <div className="text-center">
                            <p className="text-white mb-2 text-xs sm:text-sm">The Boss Fight</p>
                            <video
                                src="../images/boss-fight-schie.mp4"
                                className="h-40 sm:h-80 object-contain rounded-lg mx-auto cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/boss-fight-schie.mp4", "video")}
                                loop
                                autoPlay
                                muted
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                        My Contribution
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-sm sm:text-base text-white">
                                I was responsible for both programming and designing several core elements of the game. I developed the first level, where players must work together to push a ball up a ramp and out of the water to return it to a boy who lost it. Completing this optional task adds a nice touch — the boy rewards you by pointing you in the right direction.
                                In this level, I handled the gravity system, collision detection, item pickups, level transitions, and the boy’s interactions.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm sm:text-base text-white">
                                Beyond that, I implemented the "poop drop" mechanic, which becomes available after picking up fries from the terrace. This mechanic plays a key role in progressing through the game, allowing players to target specific characters like the security guard and the final boss. I also worked on the boss fight itself, with help of a teammate. Beside that all I was also active in helping my teammates wherever I could, with for example bug fixing, thinking with them and brainstorming about the game design and mechanics, and creating some of the pixel art assets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {selectedMedia && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
                    <div className="relative max-w-[90vw] max-h-[85vh]">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-[#f0a500] text-black rounded-full p-1 hover:bg-white z-10"
                        >
                            ✕
                        </button>
                        {mediaType === "image" ? (
                            <img
                                src={selectedMedia}
                                alt="Modal content"
                                className="w-[800px] h-[800px] max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        ) : (
                            <video
                                src={selectedMedia}
                                controls
                                autoPlay
                                className="w-[800px] h-[800px] max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
