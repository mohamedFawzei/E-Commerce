"use client";

import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { useGsap, gsap } from "@/animations/hooks/useGsap";
import { DURATION, EASING } from "@/animations/core/config";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useGsap(() => {
    const mm = gsap.matchMedia();

    // animate on desktop (min-width: 769px)
    mm.add("(min-width: 769px)", () => {
      if (isOpen) {
        gsap.to(containerRef.current, {
          width: "300px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          duration: DURATION.NORMAL,
          ease: EASING.DEFAULT,
        });
        inputRef.current?.focus();
      } else {
        gsap.to(containerRef.current, {
          width: "40px",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          duration: DURATION.NORMAL,
          ease: EASING.SHARP,
        });
      }
    });

 
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center h-10 overflow-hidden rounded-full transition-colors",
        "w-[200px] bg-gray-100", 
        "md:w-10 md:bg-transparent",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-gray-600 transition-transform duration-200 z-10",
          // Desktop hover effects
          "md:hover:scale-110 md:hover:text-black",
          "pointer-events-none md:pointer-events-auto",
        )}
      >
        <Search className="h-5 w-5" />
      </button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={cn(
          "h-full w-full bg-transparent pl-10 pr-8 outline-none text-sm",
        )}
        onBlur={(e) => {
          if (e.target.value === "") {
            setIsOpen(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setIsOpen(false);
            inputRef.current?.blur();
          }
        }}
      />

      {/* Close button */}
      <button
        onClick={() => {
          setIsOpen(false);
          if (inputRef.current) inputRef.current.value = "";
        }}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600",
          isOpen ? "block" : "hidden md:hidden",
        )}
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
