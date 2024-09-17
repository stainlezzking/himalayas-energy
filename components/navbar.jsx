"use client";
import Image from "next/image";
import Blacklogo from "@/public/blacklogo.png";
import Whitelogo from "@/public/whitelogo.png";
import { useState } from "react";
import NavLink from "./navlinks";

const Navbar = ({ whiteShade, index = 0 }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="max-lg:block flex justify-between items-center md:h-[210px] lg:h-[105px]">
      <div className="flex justify-between items-center">
        <div className="max-w-[162px]">
          <Image src={whiteShade ? Whitelogo : Blacklogo} alt="The logo of Himalayas Consult" width="162" className="w-full max-sm:w-[100px]" />
        </div>
        <span className="p-1 block cursor-pointer md:hidden" onClick={() => setOpen(true)}>
          <svg className="w-7" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 11.4843V10.4843H17.5V11.4843H0.5ZM0.5 6.71434V5.71434H17.5V6.71434H0.5ZM0.5 1.94434V0.944336H17.5V1.94434H0.5Z" fill="white" />
          </svg>
        </span>
      </div>
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-[-1200px]"
        } md:translate-x-0 max-md:p-4 top-0 left-0 max-md:w-full max-md:h-full z-[2000] max-md:bg-[#181818] fixed md:static transition-transform`}
      >
        <div className="flex justify-end md:hidden" onClick={() => setOpen(false)}>
          <span className="p-1 cursor-pointer">
            <svg className="w-8" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 21.32L21 3.32001"
                  className={whiteShade ? "stroke-white" : "stroke-black"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 3.32001L21 21.32"
                  className={whiteShade ? "stroke-white" : "stroke-black"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        <ul
          className={` max-md:mt-16 max-md:space-y-8 md:flex py-6 px-8 gap-x-10 md:rounded-l-full md:rounded-r-full md:border md:border-white text-white md:bg-[#181818]/90`}
        >
          <li>
            <NavLink path="/" index={0}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink path="/about" index={1}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink path="/services" index={2}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink path="/sustainability" index={3}>
              Sustainability
            </NavLink>
          </li>
          <li>
            <NavLink path="/contact" index={4}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
