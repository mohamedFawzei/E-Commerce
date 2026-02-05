"use client";

import { Home, LayoutGrid, LogIn, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileBottomNavProps {
  onOpenCategories: () => void;
}

export default function MobileBottomNav({
  onOpenCategories,
}: MobileBottomNavProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden">
      {/* Home (optional, but good for UX) */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center gap-1 ${
          isActive("/") ? "text-black" : "text-gray-500"
        }`}
      >
        <Home className="h-6 w-6" />
        <span className="text-[10px] font-medium">Home</span>
      </Link>

      {/* Categories */}
      <button
        onClick={onOpenCategories}
        className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-black"
      >
        <LayoutGrid className="h-6 w-6" />
        <span className="text-[10px] font-medium">Categories</span>
      </button>

      {/* Cart */}
      <Link
        href="/cart"
        className={`relative flex flex-col items-center justify-center gap-1 ${
          isActive("/cart") ? "text-black" : "text-gray-500"
        }`}
      >
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">
            2
          </span>
        </div>
        <span className="text-[10px] font-medium">Cart</span>
      </Link>

      {/* Login */}
      <Link
        href="/login"
        className={`flex flex-col items-center justify-center gap-1 ${
          isActive("/login") ? "text-black" : "text-gray-500"
        }`}
      >
        <LogIn className="h-6 w-6" />
        <span className="text-[10px] font-medium">Login</span>
      </Link>
    </div>
  );
}
