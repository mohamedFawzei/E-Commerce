import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CreditCard,
  Smartphone,
  Wallet,
} from "lucide-react";
import SocialLinks from "@/components/social-links/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 font-sans cursor-default">
      {/* 1. Top Support Bar */}
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900">
              We're Always Here To Help
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Reach out to us through any of these support channels
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 w-full sm:w-auto">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center px-4 sm:px-0">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 shrink-0">
                <HelpCircle size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Help Center
                </span>
                <span className="text-sm font-bold text-gray-900 hover:underline cursor-pointer break-all">
                  <Link href="mailto:mohamedfawzeix@gmail.com" target="_blank">
                    mohamedfawzeix@gmail.com
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center px-4 sm:px-0">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 shrink-0">
                <Mail size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Email Support
                </span>
                <span className="text-sm font-bold text-gray-900 hover:underline cursor-pointer break-all">
                  <Link href="mailto:muhammadfawzei@gmail.com" target="_blank">
                    muhammadfawzei@gmail.com
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center px-4 sm:px-0">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 shrink-0">
                <Phone size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Phone Support
                </span>
                <span className="text-sm font-bold text-gray-900 hover:underline cursor-pointer">
                  <Link href="tel:+201066587947" target="_blank">
                    01066587947
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Links Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">
              Electronics
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">Mobiles</li>
              <li className="hover:underline cursor-pointer">Tablets</li>
              <li className="hover:underline cursor-pointer">Laptops</li>
              <li className="hover:underline cursor-pointer">
                Home Appliances
              </li>
              <li className="hover:underline cursor-pointer">
                Camera, Photo & Video
              </li>
              <li className="hover:underline cursor-pointer">Televisions</li>
              <li className="hover:underline cursor-pointer">Headphones</li>
              <li className="hover:underline cursor-pointer">Video Games</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">
              Fashion
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">
                Women's Fashion
              </li>
              <li className="hover:underline cursor-pointer">Men's Fashion</li>
              <li className="hover:underline cursor-pointer">Girls' Fashion</li>
              <li className="hover:underline cursor-pointer">Boys' Fashion</li>
              <li className="hover:underline cursor-pointer">Watches</li>
              <li className="hover:underline cursor-pointer">Jewellery</li>
              <li className="hover:underline cursor-pointer">
                Women's Handbags
              </li>
              <li className="hover:underline cursor-pointer">Men's Eyewear</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">
              Home And Kitchen
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">
                Kitchen & Dining
              </li>
              <li className="hover:underline cursor-pointer">Bedding</li>
              <li className="hover:underline cursor-pointer">Bath</li>
              <li className="hover:underline cursor-pointer">Home Decor</li>
              <li className="hover:underline cursor-pointer">
                Home Appliances
              </li>
              <li className="hover:underline cursor-pointer">
                Tools & Home Improvement
              </li>
              <li className="hover:underline cursor-pointer">
                Patio, Lawn & Garden
              </li>
              <li className="hover:underline cursor-pointer">Storage</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">
              Beauty
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">Fragrance</li>
              <li className="hover:underline cursor-pointer">Make-up</li>
              <li className="hover:underline cursor-pointer">Haircare</li>
              <li className="hover:underline cursor-pointer">Skincare</li>
              <li className="hover:underline cursor-pointer">Personal Care</li>
              <li className="hover:underline cursor-pointer">
                Tools & Accessories
              </li>
              <li className="hover:underline cursor-pointer">Men's Grooming</li>
              <li className="hover:underline cursor-pointer">
                Health Care Essentials
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">
              Kids, Baby & Toys
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">
                Strollers, Prams & Accessories
              </li>
              <li className="hover:underline cursor-pointer">Car Seats</li>
              <li className="hover:underline cursor-pointer">Baby Clothing</li>
              <li className="hover:underline cursor-pointer">Feeding</li>
              <li className="hover:underline cursor-pointer">
                Bathing & Skincare
              </li>
              <li className="hover:underline cursor-pointer">Diapering</li>
              <li className="hover:underline cursor-pointer">
                Baby & Toddler Toys
              </li>
              <li className="hover:underline cursor-pointer">Toys & Games</li>
            </ul>
          </div>

          {/* Column 6 (Top Brands & Discover) */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">
                Top Brands
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:underline cursor-pointer">Apple</li>
                <li className="hover:underline cursor-pointer">Samsung</li>
                <li className="hover:underline cursor-pointer">Nike</li>
                <li className="hover:underline cursor-pointer">Ray-Ban</li>
                <li className="hover:underline cursor-pointer">Tefal</li>
                <li className="hover:underline cursor-pointer">
                  L'Oreal Paris
                </li>
                <li className="hover:underline cursor-pointer">Skechers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Connect & App Buttons */}
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Shop On The Go
            </span>
            <div className="flex items-center gap-3">
              {/* Mock App Store Buttons */}
              <button className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
                <Smartphone size={20} />
                <div className="text-left flex flex-col leading-none">
                  <span className="text-[10px] uppercase">Download on the</span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
                <Smartphone size={20} />
                <div className="text-left flex flex-col leading-none">
                  <span className="text-[10px] uppercase">Get it on</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Connect With Us
            </span>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* 4. Bottom Copyright & Payments */}
      <div className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Omnibuy. All Rights Reserved</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded border border-gray-200">
              <CreditCard size={16} className="text-blue-600" />{" "}
              <span className="font-bold text-blue-600">VISA</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded border border-gray-200">
              <CreditCard size={16} className="text-red-500" />{" "}
              <span className="font-bold text-red-600">MasterCard</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded border border-gray-200">
              <span className="font-bold text-green-600 flex items-center gap-2">
                <Wallet size={16} className="text-green-600" /> Cash
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Careers
            </Link>
            <Link href="#" className="hover:underline">
              Warranty Policy
            </Link>
            <Link href="#" className="hover:underline">
              Sell with us
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
