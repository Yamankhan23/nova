"use client";
import { useEffect } from "react";

export default function CursorGlow() {
    useEffect(() => {
        const glow = document.getElementById("cursor-glow");
        const move = (e: MouseEvent) => {
            if (glow) {
                glow.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
            }
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return <div id="cursor-glow" className="cursor-glow"></div>;
}
