"use client";

import { useState, useEffect, useRef } from "react";

interface DodgingButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function DodgingButton({ children, onClick, className, disabled, style }: DodgingButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
    );

    // Further reduced distance from 100 to 70 to make it much easier to "corner"
    if (distance < 70) {
      // After 3 attempts, it becomes much easier (from 5)
      if (attempts > 3 && Math.random() > 0.5) {
        return;
      }

      moveButton();
      setAttempts((prev) => prev + 1);
    }
  };

  const moveButton = () => {
    // Keep it within a smaller center area for less drastic jumps
    const maxX = window.innerWidth / 4;
    const maxY = window.innerHeight / 4;

    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [attempts]);

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        // Even slower transition (0.8s) for much smoother, lazier movement
        transition: attempts > 6 ? 'all 0.3s ease' : 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        zIndex: 10
      }}
    >
      {children}
    </button>
  );
}
