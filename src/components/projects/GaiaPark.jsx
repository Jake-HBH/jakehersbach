import React, { useState } from "react";

export const Gaiapark = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="min-h-screen bg-[#131313] p-4 sm:p-8 text-white">
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
                <div className="relative mb-16">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center" style={{ color: "#f0a500" }}>
                        Gaia Park
                    </h1>
                    <div className="grid grid-cols-1 gap-12 items-start mb-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <p>
                                For TLE1-1 me and my team created the Gaia Park, a futuristic concept that blends environmental restoration with interactive experiences. After exploring climate solutions and sustainable tech, my team and I created a park where extinct species are revived to repair ecosystems. Through the Gaia Seed initiative, visitors "contribute" directly by planting seeds that aid real-world reforestation. The project encourages active engagement with the planet’s recovery, combining education, innovation, and hope.
                            </p>
                        </div>

                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4" style={{ color: "#f0a500" }}>
                                Gaia Seed
                            </h2>
                            <p>
                                My part in this project was making the Gaia Seed. The Gaia Seed is a compact, handheld device—roughly the size of a smartphone—designed to plant bio-engineered seeds and monitor their growth. Equipped with a screen and light indicators, it scans the environment to determine soil quality and suggests the most suitable seed from its internal slot. Users can track the progress of their planted seeds through an augmented reality app on their smartphone. The Gaia Seed empowers individuals to restore nature in urban and rural areas, symbolizing a perfect harmony between technology and the natural world in a climate-conscious future. Eventually, due to time constraints, we had to scale back my Gaia Seed project. While the Gaia Seed’s enclosure and full design weren’t completed, the core concept was well developed. I managed to create a mobile web application that demonstrates how the Gaia Seed would function within Gaia Park. Although not fully functional, the app effectively showcases the idea and intended experience.
                            </p>
                        </div>
                    </div>

                    <div className="text-center flex flex-col justify-center items-center gap-6 flex-wrap mb-8">
                        <a
                            href="https://project.hosted.hr.nl/2024_2025/tle1_exp_t10/TLE-1-T10/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-[#f0a500] hover:text-[#ffc545] font-semibold transition text-lg"
                        >
                            See Gaia Park →
                        </a>
                    </div>

                    <div className="text-center flex justify-center items-center gap-4 flex-wrap">
                        <span className="text-[#f0a500] font-semibold text-lg">
                            See Gaia Seed Prototype with the QR code below:
                        </span>
                        <img
                            src="../images/gaia-qr.png"
                            alt="Gaia Park QR"
                            className="w-20 h-auto object-contain rounded-lg shadow-lg cursor-pointer"
                            onClick={() => openModal("../images/gaia-qr.png")}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                    <div className="mb-16">
                        <img
                            src="../images/gaia-home.png"
                            alt="Gaia Park"
                            className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
                        />
                    </div>
                    <div>
                        <img
                            src="../images/gaia-donate.png"
                            alt="Gaia Donate"
                            className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
                        />
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-4 sm:p-8 rounded-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: "#f0a500" }}>
                        My Concepts & Designs
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <p className="text-white mb-2">Gaia Seed Page</p>
                            <img
                                src="../images/gaia-seed1.png"
                                alt="Gaia Seed Page"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-seed1.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">Gaia Seed Page 2</p>
                            <img
                                src="../images/gaia-seed2.png"
                                alt="Gaia Seed Page 2"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-seed2.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">Concept For Handheld Scanner</p>
                            <img
                                src="../images/gaia-scanner.png"
                                alt="Concept For Handheld Scanner"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-scanner.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">AI Concept Image Of Gaia Seed (In Gaia Park)</p>
                            <img
                                src="../images/gaia-seed.png"
                                alt="AI Concept Image"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-seed.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">Gaia Seed Sitemap</p>
                            <img
                                src="../images/gaia-sitemap.png"
                                alt="Gaia Seed Sitemap"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-sitemap.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">Handheld Gaia Seed Sketches</p>
                            <img
                                src="../images/gaia-sketch.png"
                                alt="Handheld Gaia Seed Sketches"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-sketch.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">(Very) Low Fidelity Interface</p>
                            <img
                                src="../images/gaia-ui.png"
                                alt="Low Fidelity Interface"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-ui.png")}
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-white mb-2">(Very) Low Fidelity Interface 2</p>
                            <img
                                src="../images/gaia-ui2.png"
                                alt="Low Fidelity Interface 2"
                                className="h-40 sm:h-80 object-contain mx-auto cursor-pointer"
                                onClick={() => openModal("../images/gaia-ui2.png")}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
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
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-[800px] h-[800px] max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
