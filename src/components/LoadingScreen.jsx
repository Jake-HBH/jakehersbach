import { useEffect, useState } from "react";

const getRandomChar = () => {
    const chars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
};

const useDecodedText = (target, duration = 800) => {
    const [display, setDisplay] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        const letters = target.split("");
        const start = performance.now();
        const delays = letters.map(() => Math.random() * duration * 0.6);

        const animate = () => {
            const now = performance.now();
            const updated = letters.map((char, i) => {
                if (now - start >= delays[i]) return char;
                return getRandomChar();
            }).join("");

            setDisplay(updated);

            if (now - start < duration + 200) {
                requestAnimationFrame(animate);
            } else {
                setDisplay(target);
                setDone(true);
            }
        };

        animate();
    }, [target, duration]);

    return [display, done];
};

export const LoadingScreen = ({ onComplete }) => {
    const [line1, done1] = useDecodedText("Welcome to", 1200);
    const [line2, done2] = useDecodedText("My Portfolio", 1400);
    const [phase, setPhase] = useState("decode");
    const [slideLine1, setSlideLine1] = useState("Welcome to");
    const [slideLine2, setSlideLine2] = useState("My Portfolio");

    useEffect(() => {
        if (done1 && done2) {
            setTimeout(() => setPhase("slideOut"), 800);
        }
    }, [done1, done2]);

    useEffect(() => {
        if (phase === "slideOut") {
            const duration = 600;
            const start = performance.now();

            const animate = () => {
                const now = performance.now();
                const progress = Math.min((now - start) / duration, 1);

                setSlideLine1(prev => slideScramble("Welcome to", progress));
                setSlideLine2(prev => slideScramble("My Portfolio", progress));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setTimeout(onComplete, 300);
                }
            };

            animate();
        }
    }, [phase, onComplete]);

    const slideScramble = (original, progress) => {
        const chars = original.split("");
        return chars.map((char, i) => {
            if (progress > i / chars.length) {
                return getRandomChar();
            }
            return char;
        }).join("");
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-black text-white flex items-center justify-center transition-opacity duration-700`}
        >
            <div
                className="text-center space-y-4 transform transition-all duration-500 ease-in-out"
                style={{
                    transform: phase === "slideOut" ? "translateX(0vw)" : "translateX(0)",
                    opacity: phase === "slideOut" ? 0 : 1,
                    fontFamily: "'Sora', sans-serif",
                }}
            >
                <div
                    className="text-5xl md:text-6xl tracking-wide"
                    style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.6)',
                        background: "linear-gradient(to right, #ffffff, #aaaaaa)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {phase === "slideOut" ? slideLine1 : line1}
                </div>
                <div
                    className="text-5xl md:text-6xl tracking-wide pl-6"
                    style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.6)',
                        background: "linear-gradient(to right, #ffffff, #cccccc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {phase === "slideOut" ? slideLine2 : line2}
                </div>
            </div>
        </div>
    );
};
