import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container px-5 md:py-24 py-14 mx-auto flex flex-wrap md:flex-nowrap md:items-start flex-col md:flex-row gap-10">
        {/* Left Logo & Social Icons */}
        <div className="md:w-[30%] w-full text-center md:text-left">
          <Link
            href="/"
            className="flex title-font items-center md:justify-start justify-center text-gray-900"
          >
            <span className="ml-3 text-2xl text-black logo">HM Properties</span>
          </Link>

          <div className="flex flex-row items-center justify-center mt-[100px] md:mt-[200px] space-x-5">
            {[
              {
                href: "https://facebook.com",
                src: "/assets/images/facebook.svg",
              },
              {
                href: "https://instagram.com",
                src: "/assets/images/instagram.svg",
              },
              {
                href: "https://twitter.com",
                src: "/assets/images/Twitter.svg",
              },
            ].map(({ href, src }, index) => (
              <Link href={href} target="_blank" key={index}>
                <div className="w-10 h-10 md:w-20 md:h-20 relative">
                  <Image
                    src={src}
                    alt="Social Icon"
                    fill
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Columns with space-between */}
        <div className="md:w-[70%] w-full flex justify-between flex-wrap gap-8 text-center md:text-left">
          {/* Sitemap */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-2">
            <h6 className="text-black font-semibold tracking-widest mb-4">
              MAIN SITEMAP
            </h6>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#00000080] hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-[#00000080] hover:text-black"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-[#00000080] hover:text-black"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#00000080] hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-2">
            <h6 className="text-black font-semibold tracking-widest mb-4">
              SOCIAL
            </h6>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-[#00000080] hover:text-black"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-[#00000080] hover:text-black"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-[#00000080] hover:text-black"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-2">
            <h6 className="text-black font-semibold tracking-widest mb-4">
              CONTACT US
            </h6>
            <ul className="list-none space-y-4 text-[#00000080]">
              <li>
                <div className="text-black mb-1">Phone</div>
                <Link href="tel:8625890002" className="hover:text-black">
                  (8625 890002)
                </Link>
              </li>
              <li>
                <div className="text-black mb-1">Location</div>
                <span>206 Mail Parking Nuoges, Levallois-Perret, France</span>
              </li>
              <li>
                <div className="text-black mb-1">Email</div>
                <Link
                  href="mailto:Hello@PowerBounce.com"
                  className="hover:text-black"
                >
                  Hello@PowerBounce.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
