"use client";

import { useEffect, useState } from "react";

export default function HeartBackground() {
    const [hearts, setHearts] = useState<{ id: string; left: string; top?: string; size: string; delay: string }[]>([]);

    useEffect(() => {
        const edgeCount = 12; // Hearts per edge
        const newHearts = [];

        // Top Edge
        for (let i = 0; i < edgeCount; i++) {
            newHearts.push({
                id: `top-${i}`,
                left: `${(i / edgeCount) * 100}%`,
                top: '2%',
                size: `${Math.random() * 15 + 15}px`,
                delay: `${Math.random() * 2}s`
            });
        }
        // Bottom Edge
        for (let i = 0; i < edgeCount; i++) {
            newHearts.push({
                id: `bottom-${i}`,
                left: `${(i / edgeCount) * 100}%`,
                top: '90%',
                size: `${Math.random() * 15 + 15}px`,
                delay: `${Math.random() * 2}s`
            });
        }
        // Left Edge
        for (let i = 0; i < edgeCount / 2; i++) {
            newHearts.push({
                id: `left-${i}`,
                left: '2%',
                top: `${(i / (edgeCount / 2)) * 100}%`,
                size: `${Math.random() * 15 + 15}px`,
                delay: `${Math.random() * 2}s`
            });
        }
        // Right Edge
        for (let i = 0; i < edgeCount / 2; i++) {
            newHearts.push({
                id: `right-${i}`,
                left: '95%',
                top: `${(i / (edgeCount / 2)) * 100}%`,
                size: `${Math.random() * 15 + 15}px`,
                delay: `${Math.random() * 2}s`
            });
        }

        setHearts(newHearts);
    }, []);

    return (
        <div className="romantic-bg" style={{ zIndex: 0 }}>
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart"
                    style={{
                        position: 'absolute',
                        left: heart.left,
                        top: heart.top,
                        width: heart.size,
                        height: heart.size,
                        animation: `pulse 3s infinite ease-in-out ${heart.delay}`,
                        opacity: Math.random() * 0.3 + 0.5,
                        transform: `rotate(${Math.random() * 30 - 15}deg)`
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 5px rgba(139, 0, 0, 0.6))' }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            ))}
        </div>
    );
}
