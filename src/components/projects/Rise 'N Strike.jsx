import React, { useState } from "react";

export const RiseNStrike = () => {
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
        <section
            className="min-h-screen flex flex-col items-center justify-start text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#131313] pointer-events-none"></div>

            <div
                className="absolute top-10 left-10 flex items-start space-x-6 z-20"
                style={{
                    color: "#ffffff",
                }}
            >
            </div>

            <div className="relative w-full mt-8 px-8 z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                            Rise ’N Strike
                        </h2>
                        <p className="text-left">
                            For CLE1, my team and I created Rise ’N Strike, a fun alarm clock concept where a boxing glove on a stick drops onto the person if they don’t press the deactivate button within 10 minutes after the alarm rings. The idea was to combine humor with functionality, using light and motion to wake someone up.
                            <br /><br />
                            I was responsible for designing and developing the website using HTML and CSS, collaborating with another teammate across all pages. I also supported the hardware team by helping with small parts of the casing design.
                            To reflect on my role, I asked teammates for feedback via Discord. They highlighted my strong teamwork, initiative, and willingness to help. A key improvement point was being more consistent with communication and punctuality — something I acknowledged and worked on during the project.
                            <br /><br />
                            A personal highlight was incorporating my passion for boxing into the concept. The glove mechanism and the project’s logo both stemmed from this.
                            I also took initiative in organizing our workflow by setting up a team Discord server with dedicated channels for each aspect of the project, improving team communication.
                            <br /><br />
                            This project helped me grow in reflection, responsibility, and team engagement, and set a strong foundation for future CLE projects.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="../images/rise-poster.png"
                            alt="Rise ’N Strike Cover"
                            onClick={() => openModal("../images/rise-poster.png")}
                            className="w-full h-auto max-w-md object-contain rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                        />
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#f0a500" }}>
                        The Pictures
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[340px]">
                        {[
                            { src: "rise-1.png", label: "Rise 'N Strike Home" },
                            { src: "rise-2.png", label: "Rise 'N Strike Home (2)" },
                            { src: "rise-3.png", label: "Rise 'N Strike Home (3)" },
                            { src: "rise-map.png", label: "System Diagram" },
                            { src: "rise-sketch.png", label: "The Final Sketch" },
                            { src: "rise-sketch2.png", label: "The Situation Sketch" },
                            { src: "rise-alarm.jpg", label: "The Alarm" },
                            { src: "rise-alarm2.png", label: "The Alarm Inside" },
                            { src: "rise-button.png", label: "The Deactivate Button" },
                            { src: "rise-full.png", label: "All The Parts" },
                            { src: "rise-pres.png", label: "The Presentation Outfits" },
                        ].map(({ src, label }, idx) => (
                            <div className="text-center" key={idx}>
                                <p className="text-white mb-2">{label}</p>
                                <img
                                    src={`../images/${src}`}
                                    alt={label}
                                    onClick={() => openModal(`../images/${src}`)}
                                    className="h-80 object-contain rounded-lg mx-auto cursor-pointer hover:opacity-80 transition"
                                />
                            </div>
                        ))}
                        <div className="text-center">
                            <p className="text-white mb-2">Servo Latch Test With The Stick</p>
                            <video
                                src="../images/rise-stick.mp4"
                                className="w-full max-w-[300px] h-[300px] object-contain mx-auto cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/rise-stick.mp4", "video")}
                                loop
                                autoPlay
                                muted
                            />
                        </div>
                    </div>
                </div>
            </div>

            {selectedMedia && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-[90vw] max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-[#f0a500] text-black rounded-full p-2 hover:bg-white z-10"
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
