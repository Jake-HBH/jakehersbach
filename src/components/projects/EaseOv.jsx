import React, { useState } from "react";

export const EaseOv = () => {
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
            style={{
                color: "#ffffff",
            }}
        >
            <div className="absolute inset-0 bg-[#131313] pointer-events-none"></div>

            <div className="relative w-full mt-8 px-4 sm:px-8 z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                            EaseOv
                        </h2>
                        <p className="text-left max-w-full sm:max-w-xl text-sm sm:text-base">
                            For CLE3, I worked with my team on a web app called EaseOV. The goal was to create something that could improve the public transport experience for people with chronic illnesses. The app is similar to the 9292 travel planner, but we added extra, user-focused features like a real-time disruptions page, a help/emergency button, and an accessibility section that highlights whether buses and stations are accessible (like if elevators are working).
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="../images/easeov-logo.png"
                            alt="EaseOv Logo"
                            className="w-full h-auto max-w-md object-contain rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                            onClick={() => openModal("../images/easeov-logo.png")}
                        />
                    </div>
                </div>


                <div className="mb-16 bg-[#1a1a1a] p-4 sm:p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            <img
                                src="../images/easeov-help.png"
                                alt="Ease Ov Help Needed Page"
                                className="h-40 sm:h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-help.png")}
                            />
                            <img
                                src="../images/easeov-location.png"
                                alt="Ease Ov Help Sent To Location Page"
                                className="h-40 sm:h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-location.png")}
                            />
                            <img
                                src="../images/easeov-fav1.png"
                                alt="Ease Ov Favorite Routes Page 1"
                                className="h-40 sm:h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-fav1.png")}
                            />
                            <img
                                src="../images/easeov-fav2.png"
                                alt="Ease Ov Favorite Routes Page 2"
                                className="h-40 sm:h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-fav2.png")}
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-right" style={{ color: "#f0a500" }}>
                                My Contributions
                            </h2>
                            <p className="text-sm sm:text-base text-white text-right">
                                I was involved in both the front-end development and parts of the design. I built several key pages including the Emergency Help page, the Confirmation page after pressing the help button, and the Favorite Routes page. I also created wireframes for the Favorite Routes feature, thinking through how users would interact with it in a clear and simple way.
                                <br /><br />
                                One technical challenge was adding a real-time GPS feature. After doing some research, I realized it was too complex within the time we had. I adapted by embedding a static Google Map instead, which still helped show route context. I also made sure to set personal deadlines and communicated with my team about progress using ClickUp and Discord.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-4 sm:p-8 rounded-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                        Communication
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-sm sm:text-base text-white">
                                Throughout the project, I worked on adjusting how I communicate depending on the situation. When a group of Havo 3 Technasium students visited, I explained our app and process in simple terms and used visuals like the persona to help them understand the problem we were solving.
                                <br /><br />
                                During the CLE3 market, I presented our app directly to visitors. I (with the black blouse and beanie) let them try it out on my phone and walked them through the different features. I even asked them to imagine being in a wheelchair, to give context for why our features matter. This helped me develop confidence in presenting to a mixed audience.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="../images/easeov-communication.png"
                                alt="Image of me presenting EaseOv to a group of students"
                                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-communication.png")}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex justify-center">
                            <img
                                src="../images/easeov-standup.png"
                                alt="Entrepreneurial Skills"
                                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-standup.png")}
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-right" style={{ color: "#f0a500" }}>
                                For the team
                            </h2>
                            <p className="text-white text-right">
                                I contributed actively to the planning side of things — helping set up our Discord server, organizing daily stand-ups and end-of-day recaps, and checking in regularly with teammates. I learned to commit code more frequently and in smaller chunks, which made our GitHub history easier to follow. I also tried to be proactive by asking if others needed help and making sure the work was balanced across the group.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: "#f0a500" }}>
                        Learning Moments
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-white">
                                One key learning point for me was how much time small (looking) features can take. The GPS issue was a good reminder to keep it realistic and adapt when needed. I also learned that I enjoy working on the design side of projects more than I expected, things like wireframing, layout, and color choices. I’m now more interested in digging deeper into design for future projects.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="../images/easeov-zorg.png"
                                alt="Inspiration from Zorg&’24"
                                className="h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-zorg.png")}
                            />
                            <img
                                src="../images/easeov-robot.png"
                                alt="Inspiration from Zorg&’24"
                                className="h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-robot.png")}
                            />
                            <img
                                src="../images/easeov-med.png"
                                alt="Inspiration from Zorg&’24"
                                className="h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-med.png")}
                            />
                            <img
                                src="../images/easeov-cobbler.png"
                                alt="Inspiration from Zorg&’24"
                                className="h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                                onClick={() => openModal("../images/easeov-cobbler.png")}
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-right" style={{ color: "#f0a500" }}>
                                Inspiration from Zorg&’24
                            </h2>
                            <p className="text-white text-right">
                                At the end of the project, I visited Zorg&’24 in the Utrecht Jaarbeurs with some classmates and my girlfriend. The event really opened my eyes to how tech can support the healthcare industry. I saw some amazing tools being developed, and it made me realize there’s a space for creativity, technology, and helping others to come together.
                                <br /><br />
                                While there, I talked to someone from a company called Cobbler, which works on ICT in healthcare. I now have his contact info and added him to my network — something I never would’ve thought to do before. It made me seriously consider working on care-related tech projects in the future.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href="https://github.com/yourname/easeov"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-[#f0a500] hover:text-[#ffc545] font-semibold transition text-lg"
                    >
                        View Project →
                    </a>
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
        </section >
            
    );
};
