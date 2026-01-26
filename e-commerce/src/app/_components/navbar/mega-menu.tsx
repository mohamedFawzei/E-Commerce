"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: { title: string; href: string }[];
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        duration: 0.3,
        ease: "power2.out",
        visibility: "visible",
      });
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, delay: 0.1 },
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.visibility = "hidden";
          }
        },
      });
    }
  }, [isOpen]);

  // data for categories
  const categories = [
    {
      title: "Electronics",
      links: ["Smartphones", "Laptops", "Tablets", "Cameras"],
    },
    {
      title: "Fashion",
      links: ["Men", "Women", "Kids", "Accessories"],
    },
    {
      title: "Home",
      links: ["Furniture", "Decor", "Kitchen", "Lighting"],
    },
    {
      title: "Beauty",
      links: ["Skincare", "Makeup", "Haircare", "Fragrance"],
    },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full w-full overflow-hidden bg-white shadow-lg z-50 border-t h-0 invisible"
    >
      <div ref={contentRef} className="container mx-auto py-8">
        <div className="grid grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/categories/${category.title.toLowerCase()}/${link.toLowerCase()}`}
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
