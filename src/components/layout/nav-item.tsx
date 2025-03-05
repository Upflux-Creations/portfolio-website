"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
interface NavItemProps {
  title: string;
  href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ title, href }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "md:py-6 md:px-8 selection:bg-transparent text-sm xs:py-3 xs:px-0 py-4 px-8 cursor-pointer font-medium font-sora transition-opacity duration-300 ease-in",
        isHovering ? "hover:opacity-100" : "group-hover:opacity-50"
      )}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};
