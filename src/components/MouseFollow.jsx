import { useEffect, useRef } from "react";

export const MouseFollow = () => {
    const dotRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const animate = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={dotRef}
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "8px",
                height: "8px",
                backgroundColor: "#f0a500",
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate3d(0, 0, 0)",
                zIndex: 9999,
                transition: "background-color 0.2s ease",
            }}
        />
    );
};
