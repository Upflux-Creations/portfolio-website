"use client";
import { services } from "@/data/services";
import { ServiceCard } from "./service-card";
import { useEffect, useRef, useState } from "react";

export const Services = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!carouselRef.current || !isHovering) return;
      if (e.clientX <= 300) {
        setScrolled(0);
        return;
      }
      // Get section boundaries
      const rect = section.getBoundingClientRect();

      // Calculate relative X position within the section
      const relativeX = e.clientX - rect.left;
      const sectionWidth = rect.width;

      // Calculate scroll amount based on relative position
      const { scrollWidth } = carouselRef.current;
      const carouselScroll = (relativeX / sectionWidth) * (scrollWidth / 2.3);

      setScrolled(carouselScroll);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Clean up event listeners
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full border flex overflow-hidden"
    >
      <div
        style={{
          transform: `translateX(-${scrolled}px)`,
          transition: "transform 0.1s ease-out", // Optional: adds smoothing
        }}
        ref={carouselRef}
        className="w-max h-full flex"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
