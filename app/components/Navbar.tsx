"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="relative z-10">
        {/* Responsive horizontal padding: px-6 on mobile/tablet, px-3 on desktop */}
        <div className="absolute top-[30px] w-full px-6 lg:px-3">
          {/* Navigation Container */}
          <div
            className={`container mx-auto flex flex-wrap items-center justify-between px-5 py-4 bg-[#0000006b] lg:bg-[#ffffff33] 
              rounded-[30px] lg:rounded-[30px] 
              ${
                mobileMenuOpen
                  ? "rounded-bl-none rounded-br-none"
                  : "rounded-bl-[30px] rounded-br-[30px]"
              }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex title-font logo items-center text-white text-xl"
            >
              <span>HM Properties</span>
            </Link>

            {/* Hamburger for Mobile/Tablet */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-x-7">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-white hover:underline ${
                    pathname === href ? "font-bold" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden lg:flex">
              <button className="inline-flex items-center cursor-pointer pl-3 pr-1 nav_bg border-0 rounded-full overflow-hidden group transition-all duration-300 hover:bg-[#2e2e2e]">
                <span className="py-3.5 pl-5 pr-2.5 text-white">
                  Contact us
                </span>
                <div className="bg-white p-3.5 rounded-full text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#0000006b] text-white pb-5 rounded-bl-[30px] rounded-br-[30px] container mx-auto px-5">
              <div className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:underline ${
                      pathname === href ? "font-bold" : ""
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                {/* Mobile Contact Button */}
                <button className="inline-flex items-center justify-between cursor-pointer pl-3 pr-1 nav_bg border-0 rounded-full overflow-hidden group transition-all duration-300 hover:bg-[#2e2e2e] mt-4">
                  <span className="py-3.5 pl-5 pr-2.5 text-white">
                    Contact us
                  </span>
                  <div className="bg-white p-3.5 rounded-full text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
