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
    <nav className="mb-[190px]">
      <div className="container nav_bg mx-auto flex flex-wrap pl-5 pr-2.5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex title-font font-medium py-[19px] logo items-center text-white mb-4 md:mb-0"
        >
          <span className="text-xl">HM Properties</span>
        </Link>

        {/* Navigation Links */}
        <div className="md:ml-auto md:mr-auto py-[19px] flex flex-wrap items-center text-xl justify-center gap-x-7">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium text-white ${
                pathname === href ? "font-bold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <button className="inline-flex items-center  pl-3 nav_bg border-0 text-xl">
          <span className="py-3.5 pl-5 pr-2.5 text-white">Contact us</span>
          <div className="bg-white p-3 rounded-full text-black">
            <ArrowUpRight />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
