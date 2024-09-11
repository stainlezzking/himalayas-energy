"use client";
import Image from "next/image";
import Blacklogo from "@/public/blacklogo.png";
import Whitelogo from "@/public/whitelogo.png";
import { usePathname } from "next/navigation";

const Navbar = ({ whiteShade }) => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-end h-[105px]">
      <div className="max-w-[162px]">
        <Image src={whiteShade ? Whitelogo : Blacklogo} width="162" className="w-full" />
      </div>
      <ul className={"flex py-4 px-8 gap-x-10 rounded-l-full rounded-r-full border border-white text-white bg-[#181818]/90"}>
        <li className={`py-2 px-4 rounded-x-full ${pathname == "/" && "border-white bg-white rounded-l-full rounded-r-full text-main"} `}> Home</li>
        <li className={`py-2 px-4 rounded-x-full ${pathname == "/about" && "border-white bg-white rounded-l-full rounded-r-full text-main"}`}>
          About
        </li>
        <li className={`py-2 px-4 rounded-x-full ${pathname == "/services" && "border-white bg-white rounded-l-full rounded-r-full text-main"}`}>
          Services
        </li>
        <li
          className={`py-2 px-4 rounded-x-full ${pathname == "/sustainability" && "border-white bg-white rounded-l-full rounded-r-full text-main"}`}
        >
          Sustainability
        </li>
        <li className={`py-2 px-4 rounded-x-full ${pathname == "/contact" && "border-white bg-white rounded-l-full rounded-r-full text-main"}`}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
