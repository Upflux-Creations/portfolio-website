"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Define the possible directions
type TransitionDirection = "top" | "right" | "bottom" | "left";

export interface PageTransitionProps {
  children: React.ReactNode;
  direction?: TransitionDirection;
  color?: string;
  duration?: number;
  waitTime?: number;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  direction = "top",
  color = "bg-blue-500",
  duration = 0.5,
  waitTime = 0.125,
}) => {
  const pathname = usePathname();
  const [isPathChanged, setIsPathChanged] = useState(false);

  // Get initial and exit animation properties based on direction
  const getAnimationProps = (dir: TransitionDirection) => {
    switch (dir) {
      case "top":
        return {
          initial: { y: "-100%", x: 0 },
          animate: { y: "0%", x: 0 },
          exit: { y: "100%", x: 0 },
        };
      case "right":
        return {
          initial: { x: "100%", y: 0 },
          animate: { x: "0%", y: 0 },
          exit: { x: "-100%", y: 0 },
        };
      case "bottom":
        return {
          initial: { y: "100%", x: 0 },
          animate: { y: "0%", x: 0 },
          exit: { y: "-100%", x: 0 },
        };
      case "left":
        return {
          initial: { x: "-100%", y: 0 },
          animate: { x: "0%", y: 0 },
          exit: { x: "100%", y: 0 },
        };
    }
  };

  const animationProps = getAnimationProps(direction);

  // Reset the state when the path changes
  useEffect(() => {
    setIsPathChanged(true);

    // Reset after animation completes
    const timer = setTimeout(() => {
      setIsPathChanged(false);
    }, (duration * 2 + waitTime) * 1000); // Total time: in + wait + out

    return () => clearTimeout(timer);
  }, [pathname, duration, waitTime]);

  return (
    <>
      <div className="relative">
        {children}

        <AnimatePresence>
          {isPathChanged && (
            <motion.div
              className={`fixed inset-0 ${color} z-50`}
              initial={animationProps.initial}
              animate={{
                ...animationProps.animate,
                transition: {
                  duration: duration,
                  ease: "easeOut",
                },
              }}
              exit={{
                ...animationProps.exit,
                transition: {
                  delay: waitTime,
                  duration: duration,
                  ease: "easeIn",
                },
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
