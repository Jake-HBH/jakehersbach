import React, { useState } from "react";

export const OpenHiring = () => {
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
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                            Open Hiring
                        </h1>
                        <p className="text-left max-w-full sm:max-w-xl text-sm sm:text-base">
                            For TLE1-2 we made a project for iO Digital, a digital agency. We were asked to build a website for Open Hiring, a company that wants to make hiring more fair by removing bias and stereotypes. Their process is simple: people stay anonymous when they apply, and the first person on the list who signs up gets the job. Companies can still list what kind of person they’re looking for, and applicants choose for themselves if they’re a good match. Even if someone logs in with their name, only they can see it—so their identity stays private the whole time.
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://www.openhiring.nl/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block text-[#f0a500] hover:text-[#ffc545] font-semibold transition text-lg"
                            >
                                See actual Open Hiring site →
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="../images/open-logo.png"
                            alt="Open Hiring Logo"
                            className="w-full h-auto max-w-md object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-4 sm:p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                        My Contributions
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <p className="text-sm sm:text-base text-white">
                                During this project, I contributed to both the front-end and back-end of the app, focusing on key features like the admin dashboard, user and job listings with management options, and detailed job pages. Additionally, I applied the Open Hiring style guide to the website and designed navigation bars for both desktop and mobile views.
                                <br /><br />
                                I also supported the team with bug fixes across different areas of the project and ensured smooth collaboration within the team. My role as a group worker was great, and I took on extra responsibilities to ensure the quality of the work was high.
                                <br /><br />
                                A key takeaway from this project is that I focused on attention to detail, making sure the design was both functional and aesthetically pleasing. However, I also learned the importance of balancing this perfectionism with meeting deadlines and working efficiently within the team.
                            </p>
                        </div>
                        <div className="flex justify-center w-full">
                            <img
                                src="../images/open-tasks.png"
                                alt="Open Hiring My Tasks"
                                className="w-full h-auto rounded-lg cursor-pointer"
                                onClick={() => openModal("../images/open-tasks.png")}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-4 sm:p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: "#f0a500" }}>
                                For the Team
                            </h3>
                            <p className="text-sm sm:text-base text-white">
                                I actively contributed to team organization, helping set up communication channels, running daily stand-ups, and maintaining clear progress tracking. I learned how to work effectively in a team environment, committing code regularly and collaborating closely with my teammates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: "#f0a500" }}>
                                Learning Moments
                            </h3>
                            <p className="text-sm sm:text-base text-white">
                                A key learning point for me was balancing attention to detail with overall project progress. I noticed I tend to focus too much on small design tweaks, which can cause delays. Going forward, I plan to work on better prioritization and task management to ensure I can complete bigger goals faster and more efficiently.
                            </p>
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
