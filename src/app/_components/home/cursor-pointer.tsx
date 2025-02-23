"use client";
import { useState, useEffect, useRef } from "react";

export const CursorPointer = () => {
  const [rotation, setRotation] = useState(0);
  const arrowRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!arrowRef.current) return;
      const rect = arrowRef.current.getBoundingClientRect();

      // Calculate center of the arrow
      const arrowCenterX = rect.left + rect.width / 3;
      const arrowCenterY = rect.top + rect.height / 3;

      // Calculate angle between arrow center and cursor
      const angle =
        Math.atan2(e.clientY - arrowCenterY, e.clientX - arrowCenterX) *
        (180 / Math.PI);

      setRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <img
        id="arrow-container"
        ref={arrowRef}
        className={`relative size-72`}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s ease-out",
        }}
        src="/arrow-right.png"
        alt="_arrow"
      />
    </>
  );
};
