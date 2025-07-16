import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="bg-white text-black md:px-5 px-3 lg:pb-24 md:pb-14 pb-9 flex flex-wrap lg:flex-nowrap lg:items-start flex-col lg:flex-row lg:gap-10 gap-5">
          {/* Left Logo & Social Icons */}
          <div className="lg:w-[30%]  text-left lg:block hidden">
            <Link
              href="/"
              className="flex title-font items-center lg:justify-start justify-center text-gray-900"
            >
              <span className="ml-3 text-2xl text-black logo">
                HM Properties
              </span>
            </Link>

            <div className="flex flex-row items-center justify-center lg:justify-start mt-[100px] lg:mt-[200px] space-x-5">
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
                  src: "/assets/images/twitter.svg",
                },
              ].map(({ href, src }, index) => (
                <Link href={href} target="_blank" key={index}>
                  <div className="w-10 h-10 xl:w-20 xl:h-20 lg:w-16 lg:h-16 relative">
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

          {/* Navigation Columns */}
          <div className="lg:w-[70%] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-0 sm:gap-5 gap-5 text-left">
            <div className="lg:hidden block">
              <Link
                href="/"
                className="flex title-font items-center justify-start text-gray-900"
              >
                <span className="ml-3 text-2xl text-black logo">
                  HM Properties
                </span>
              </Link>

              <div className="flex flex-row items-center justify-start mt-[70px] space-x-5">
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
                    src: "/assets/images/twitter.svg",
                  },
                ].map(({ href, src }, index) => (
                  <Link href={href} target="_blank" key={index}>
                    <div className="w-14 h-14 xl:w-20 xl:h-20 lg:w-16 lg:h-16 relative">
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
            {/* Sitemap */}
            <div>
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
            <div>
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
            <div>
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
      </div>
    </footer>
  );
};
