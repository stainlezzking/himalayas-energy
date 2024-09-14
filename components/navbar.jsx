import Image from "next/image";
import Blacklogo from "@/public/blacklogo.png";
import Whitelogo from "@/public/whitelogo.png";

const Navbar = ({ whiteShade, index = 0 }) => {
  return (
    <nav className="flex justify-between items-end h-[105px]">
      <div className="max-w-[162px]">
        <Image src={whiteShade ? Whitelogo : Blacklogo} width="162" className="w-full" />
      </div>
      <ul className={"flex py-4 px-8 gap-x-10 rounded-l-full rounded-r-full border border-white text-white bg-[#181818]/90"}>
        <li>
          <a
            href="/"
            className={`py-2 px-4 rounded-x-full transition-colors
               hover:bg-white/60 hover:rounded-full hover:text-main ${
                 index == 0 && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
               } `}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`py-2 px-4 rounded-x-full transition-colors
               hover:bg-white/60 hover:rounded-full hover:text-main ${
                 index == 1 && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
               }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/services"
            className={`py-2 px-4 rounded-x-full transition-colors
               hover:bg-white/60 hover:rounded-full hover:text-main ${
                 index == 2 && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
               }`}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/sustainability"
            className={`py-2 px-4 rounded-x-full transition-colors
               hover:bg-white/60 hover:rounded-full hover:text-main ${
                 index == 3 && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
               }`}
          >
            Sustainability
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`py-2 px-4 rounded-x-full transition-colors
               hover:bg-white/60 hover:rounded-full hover:text-main ${
                 index == 4 && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
               }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
