"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Overlay fade in
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
      // Menu slide in
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      // Links stagger animation
      if (linksRef.current) {
        gsap.fromTo(
          // Use standard HTMLCollection or array for children
          Array.from(linksRef.current.children),
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2 },
        );
      }
    } else {
      // Overlay fade out
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        delay: 0.1,
      });
      // Menu slide out
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const links = [
    { title: "Home", href: "/" },
    { title: "Categories", href: "/categories" },
    { title: "Brands", href: "/brands" },
    { title: "Products", href: "/products" },
    { title: "Cart", href: "/cart" },
    { title: "Login", href: "/login" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/50 opacity-0 pointer-events-none backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 z-50 h-full w-[80%] max-w-[300px] bg-white shadow-xl transform -translate-x-full"
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-6" ref={linksRef}>
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block py-3 text-lg font-medium text-gray-700 hover:text-black border-b border-gray-100"
              onClick={onClose}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
