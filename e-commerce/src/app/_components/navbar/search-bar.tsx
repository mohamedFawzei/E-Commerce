"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Only animate on desktop (min-width: 769px)
      mm.add("(min-width: 769px)", () => {
        if (isOpen) {
          gsap.to(containerRef.current, {
            width: "300px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            duration: 0.3,
            ease: "power2.out",
          });
          inputRef.current?.focus();
        } else {
          gsap.to(containerRef.current, {
            width: "40px",
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.in",
          });
        }
      });
      // Mobile cleanup or reset if needed (handled by CSS defaults mainly)
    }, containerRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Base styles (Mobile default: open, fixed width, gray background)
        "relative flex items-center h-10 overflow-hidden rounded-full transition-colors",
        "w-[200px] bg-gray-100", // Mobile: always 200px (or auto) and gray
        // Desktop overrides (handled by GSAP mostly for width/bg, but initial state helpers):
        "md:w-10 md:bg-transparent",
      )}
      // Force white background on mobile if we want "default search bar" look, usually gray or white with border.
      // User said "defult searct bar without icon".
      // Let's stick to gray pill for mobile, transparent->white for desktop.
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-gray-600 transition-transform duration-200 z-10",
          // Desktop hover effects
          "md:hover:scale-110 md:hover:text-black",
          // Mobile: disable pointer events so it's just an icon? Or keep it working?
          // "without icon" might mean "not a button". Let's make it pointer-events-none on mobile?
          // If we do that, they can't "close" it, but it's always open.
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
          // On desktop, if closed, input shouldn't be interactable? GSAP width 40px hides it mostly.
          // But let's rely on container overflow hidden.
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
        // On mobile, focusing input shouldn't trigger "open" state because it's already "open" visually.
      />

      {/* Close button: Only show when there is text? OR when isOpen on desktop? */}
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
