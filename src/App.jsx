import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { useState } from "react";
import { NavBar } from "./components/NavBar.jsx";
import { MouseFollow } from "./components/MouseFollow.jsx"; // Import MouseFollow
import { Home } from "./components/sections/Home.jsx";
import { AboutPage } from "./components/sections/About.jsx";
import { ContactPage } from "./components/sections/Contact.jsx";
import { ProjectPage } from "./components/sections/ProjectPage.jsx";
import { ProjectsPage } from "./components/sections/Projects.jsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Router>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-black`}>
                <MouseFollow />
                <NavBar />

                <Routes>
                    <Route path="/jakehersbach" element={<Home />} />
                    <Route path="/jakehersbach/about" element={<AboutPage />} />
                    <Route path="/jakehersbach/projects" element={<ProjectsPage />} />
                    <Route path="/jakehersbach/projects/:id" element={<ProjectPage />} />
                    <Route path="/jakehersbach/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
