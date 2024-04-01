"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

import Button from "@/components/Shared/Buttons/Button";
import NavDropDownMenu from "./NavDropDownMenu";

const navigationContents = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about-us" },
  { title: "Contact", link: "/" },
  { title: "Policyholder Portal", link: "/" },
];

export default function Nav() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <nav className="py-4 border-b">
      {/* Nav for larger screen */}
      <div className="hidden max-w-7xl mx-auto md:flex px-2 items-center justify-between">
        <figure>
          <img
            src="assets/images/logo.png"
            alt="USA Underwriter Logo"
            className="h-8 w-20"
          />
        </figure>
        <div className="flex items-center gap-1">
          {navigationContents.map((navContent) => (
            <Link
              key={navContent.title}
              href={navContent.link}
              className="text-gray-900 font-medium px-3"
            >
              {navContent.title}
            </Link>
          ))}
          <Button variant="red">Report a Claim</Button>
        </div>
      </div>

      {/* Nav for smaller screen */}
      <div className="w-full flex md:hidden justify-end relative">
        <div className="w-2/3 sm:w-1/2 flex items-center justify-between px-2">
          <figure>
            <img
              src="assets/images/logo.png"
              alt="USA Underwriter Logo"
              className="h-8 w-20"
            />
          </figure>
          <button onClick={() => setShowNavMenu((prevState) => !prevState)}>
            {showNavMenu ? (
              <FaXmark size="24" className="text-gray-900" />
            ) : (
              <HiMenuAlt3 size="24" className="text-gray-900" />
            )}
          </button>
        </div>
        {showNavMenu && (
          <NavDropDownMenu navigationContents={navigationContents} />
        )}
      </div>
    </nav>
  );
}
