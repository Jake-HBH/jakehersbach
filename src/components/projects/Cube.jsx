import React, { useState } from "react";

export const Cube = () => {
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
            className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#131313] pointer-events-none"></div>

            <div className="relative w-full mx-auto px-4 mt-8">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                            CUBE Bouldering Reservation Website
                        </h2>
                        <p className="text-left max-w-xl">
                            Hey! For CLE2 I was part of JYGA Studio (The first letter of everyone in our team, this was our team name). During this CLE (Contextual Learning Environment) period we worked on a website with a working reservation system. We built this for our client CUBE — a bouldering gym in Enschede, where one of my teammates actually goes to boulder. This report shows what I did in this project.
                            <br /><br />
                            *I will be using the letters of JYGA to refer to my team members. Since I don’t want to use their full names, I’ll just use the first letter of their name.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-4">
                        <img
                            src="../images/cube-poster.png"
                            alt="CUBE Poster"
                            onClick={() => openModal("../images/cube-poster.png")}
                            className="w-full h-auto max-w-md object-contain rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                        />
                    </div>
                </div>

                <div className="mb-16 bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                        Taking Initiative
                    </h2>
                    <p className="text-white">
                        This CLE I made sure to actively contribute to our team. Most of the work took place at school. One thing I improved from last CLE was showing up late sometimes without properly letting my team know. This time, I handled it way better — whenever I was delayed (train delay, sick with a fever, and had an ortho appointment), I told them in Discord and Microsoft Teams. That helped a lot.
                        <br /><br />
                        I also asked for feedback from the team. Y* told me I was doing a good job keeping track of who’s working on what and thinking along with the team. A* said I was really active mentally, gave great input, communicated clearly, and that my teamwork with Y* went really well.
                        <br /><br />
                        I liked the way we gave feedback — using a simple “Tip & Top” format — it made it clear what I did well and what I could still work on. One thing I could improve is to give more updates about how far I am with a specific task.
                        <br /><br />
                        I finished all my assigned pages in HTML and some parts of the CSS (Y mostly did the styling, I helped with smaller parts). I also created the new wireframe for the Visit page. Another thing I worked on was keeping the content updated. I moved text from the old website to our new one, like the News page (Actueel), the Training page, and the Opening Hours page. That way, everything was current. I’m happy with how it all turned out, especially with how it looked during the end presentation.
                    </p>
                </div>

                <div className="mb-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-left" style={{ color: "#f0a500" }}>
                        Communication & Client Guide
                    </h2>
                    <p className="text-white">
                        We made a guide that’s written for our client so they can understand how the site works. The website is split into two sides:
                        <br /><br />
                        <strong>A visitor side:</strong>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Home: The main page</li>
                            <li>Actueel: For updates</li>
                            <li>Plan je bezoek: Where guests can make a reservation</li>
                            <li>Trainingen: Info about training sessions and courses</li>
                            <li>Info: Contact form, opening hours, directions, etc.</li>
                        </ul>
                        <br />
                        At the bottom of the nav bar, there's a button for employees. When you click it, it takes you to a login page. After logging in, you get redirected to the admin side of the site.
                        <br /><br />
                        <strong>An admin side:</strong> When you log in as a staff member, you land on the Schedule page, where you can see all time slots listed. Clicking on a slot shows the reservation details. You can:
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Edit: Opens a page to change reservation info, then click Save to update it.</li>
                            <li>Delete: Opens a page with all reservation info and a delete button to confirm removal.</li>
                        </ul>
                        <br />
                        The admin nav bar includes:
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Home: Go back to the visitor site (no logout)</li>
                            <li>Schedule: View the day’s time slots</li>
                            <li>Overview accounts: See all staff users and remove them if needed</li>
                            <li>Add account: Add new users to the admin section</li>
                            <li>Logout: Log out of the admin side</li>
                        </ul>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <img
                        src="../images/cube-drupal.png"
                        alt="Drupal Tech Talk"
                        onClick={() => openModal("../images/cube-drupal.png")}
                        className="w-64 h-64 md:w-128 md:h-128 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                    />
                    <img
                        src="../images/cube-shopify.png"
                        alt="Drupal Tech Talk"
                        onClick={() => openModal("../images/cube-shopify.png")}
                        className="w-64 h-64 md:w-128 md:h-128 object-contain rounded-lg cursor-pointer hover:opacity-80 transition"
                    />
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
