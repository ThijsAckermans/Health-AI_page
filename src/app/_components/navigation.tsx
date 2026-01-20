"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type MenuItem = {
  label: string;
  href: string;
  order: number;
};

type Props = {
  siteName: string;
  menuItems: MenuItem[];
};

export function Navigation({ siteName, menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-gray-200/50" 
        : "bg-white shadow-sm"
    }`}>
      <div className="container-wide">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={`${basePath}/assets/health-ai-logo.png`}
                  alt={siteName}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                {siteName}
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50/50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-primary text-sm px-5 py-2.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus-ring"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}>
          <div className="pt-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
