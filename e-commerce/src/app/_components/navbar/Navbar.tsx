"use client";

import { Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

import CategoriesMegaMenu from "@/components/navigation/CategoriesMegaMenu";
import MobileMenu from "./mobile-menu";
import NavLink from "./nav-link";
import SearchBar from "./search-bar";

import MobileBottomNav from "./mobile-bottom-nav";
import MobileCategoriesDrawer from "@/components/navigation/MobileCategoriesDrawer";
import { Category, SubCategory } from "@/types/category";

interface NavbarProps {
  categories: Category[];
  subCategories: SubCategory[];
}

export default function Navbar({
  categories: initialCategories = [],
  subCategories = [],
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);

  // Merge logic
  const categories = useMemo(() => {
    return initialCategories.map((cat) => ({
      ...cat,
      subcategories: subCategories.filter((sub) => sub.category === cat._id),
    }));
  }, [initialCategories, subCategories]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/*  Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image
                  src="/images/logo/logo.webp"
                  alt="Omnibuy Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">Omnibuy</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            {/* Mega Menu Trigger */}
            <CategoriesMegaMenu />

            <NavLink href="/brands">Brands</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <SearchBar />

            <Link
              href="/login"
              className="hidden lg:flex p-2 text-gray-600 hover:text-black transition-all duration-200 hover:scale-110"
            >
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <h3 className="text-sm font-medium">Login</h3>
              </div>
            </Link>

            <Link
              href="/cart"
              className="hidden lg:flex relative p-2 text-gray-600 hover:text-black transition-all duration-200 hover:scale-110"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <h3 className="text-sm font-medium">Cart</h3>
              </div>
              <span className="absolute -top-2 -left-1 translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenCategories={() => {
            setIsMobileMenuOpen(false);
            setIsCategoryDrawerOpen(true);
          }}
        />
      </header>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav onOpenCategories={() => setIsCategoryDrawerOpen(true)} />

      {/* Mobile Categories Drawer (Global) */}
      <MobileCategoriesDrawer
        isOpen={isCategoryDrawerOpen}
        onClose={() => setIsCategoryDrawerOpen(false)}
        categories={categories}
      />
    </>
  );
}
