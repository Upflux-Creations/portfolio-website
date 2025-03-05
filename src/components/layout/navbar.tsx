import { navbarData } from "@/data";
import { Button } from "../ui/button";
import { NavItem } from "./nav-item";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <div id="logo"></div>
      <div className="flex items-center gap-1">
        <div className="flex h-max gap-1 group">
          {navbarData.map((item) => (
            <NavItem title={item.title} key={item.title} href={item.href} />
          ))}
        </div>
        <Link href="/contact-us">
          <Button
            size={"lg"}
            variant={"fancy"}
            radius={"sides"}
            className="font-sora"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </nav>
  );
};
