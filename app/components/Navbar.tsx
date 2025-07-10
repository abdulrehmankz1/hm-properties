"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="absolute top-[30px] z-10 w-full">
        <div className="container nav_bg mx-auto flex pl-5 pr-2.5 flex-col md:flex-row items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex title-font py-[19px] logo items-center text-white mb-4 md:mb-0"
          >
            <span>HM Properties</span>
          </Link>

          {/* Navigation Links */}
          <div className="md:ml-auto md:mr-auto py-[19px] flex items-center justify-center gap-x-7">
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

          {/* Contact Us Button */}
          <button className="inline-flex items-center pl-3 pr-1 nav_bg border-0">
            <span className="py-3.5 pl-5 pr-2.5 text-white">Contact us</span>
            <div className="bg-white p-3.5 rounded-full text-black">
              <ArrowUpRight />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
