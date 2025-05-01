"use client"; // This makes the file a Client Component

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const scrollYRef = useRef(0);  // Reference to track scroll position
  const [scrolled, setScrolled] = useState(false);  // State to apply styles

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;  // Directly update the ref with scroll position
      setScrolled(scrollYRef.current > 10); // Set scrolled state when scroll position exceeds 10
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <nav
      className={`sticky top-0 z-50 w-full py-4 transition-all duration-300 ${scrolled ? "bg-[#0a0f0d]/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-[#10b981] hover:text-[#ffffff] transition-all duration-300"
        >
          <span className="text-[#10b981]">Ali</span> <span className="text-[#ffffff]">Ayad</span>
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-8">
          {["about", "skills", "projects", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-sm font-medium transition-colors hover:text-[#10b981] border-b-2 ${
                activeSection === section ? "text-[#10b981] border-[#10b981]" : "text-gray-300 border-transparent"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        <Link
          href="https://github.com/ali-ayad"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <Github className="h-5 w-5 text-white" />
        </Link>
      </div>
    </nav>
  );
}
