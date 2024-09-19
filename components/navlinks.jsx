import Link from "next/link";

const NavLink = ({ path, index, children, elementIndex }) => {
  return (
    <Link
      prefetch={false}
      href={path}
      className={`py-2 px-4 rounded-x-full transition-colors
            hover:bg-white/60 hover:rounded-full hover:text-main max-md:rounded-none max-md:block max-md:max-w-[400px] max-md:hover:rounded-none ${
              index == elementIndex && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
            } `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
