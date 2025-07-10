import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="ml-3 text-2xl text-black logo">HM Properties</span>
          </Link>

          <div className="flex mt-[200px]">
            <Link href="" className="mr-5">
              <Image
                src="/assets/images/facebook.svg"
                alt="Price"
                height={80}
                width={80}
                draggable={false}
              />
            </Link>
            <Link href="" className="mr-5">
              <Image
                src="/assets/images/instagram.svg"
                alt="Price"
                height={80}
                width={80}
                draggable={false}
              />
            </Link>
            <Link href="" className="mr-5">
              <Image
                src="/assets/images/Twitter.svg"
                alt="Price"
                height={80}
                width={80}
                draggable={false}
              />
            </Link>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center mr-auto">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h6 className="title-font text-black font-semibold tracking-widest text-xl mb-2.5">
              MAIN SITEMAP
            </h6>
            <nav className="list-none mb-10">
              <li className="mb-1.5">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  About
                </Link>
              </li>
              <li className="mb-1.5">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Product
                </Link>
              </li>
              <li className="mb-1.5">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Reviews
                </Link>
              </li>
              <li className="mb-1.5">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h6 className="title-font text-black font-semibold tracking-widest text-xl mb-2.5">
              Social{" "}
            </h6>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Instagram
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Twitter
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h6 className="title-font text-black font-semibold tracking-widest text-xl mb-2.5">
              Contact Us
            </h6>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <div className="text-xl text-black font-medium mb-1">Phone</div>
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  (8625 890002)
                </Link>
              </li>
              <li className="mb-2">
                <div className="text-xl text-black font-medium mb-1">
                  Location
                </div>
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  206 Mail Parking Nuoges. levollois-perret, france.
                </Link>
              </li>
              <li className="mb-2">
                <div className="text-xl text-black font-medium mb-1">Email</div>
                <Link
                  href=""
                  className="text-[#00000080] font-medium hover:text-gray-800 text-xl"
                >
                  Hello@PowerBounce.com
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
