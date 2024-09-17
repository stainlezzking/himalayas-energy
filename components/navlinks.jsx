const NavLink = ({ path, index, children }) => {
  return (
    <a
      href={path}
      className={`py-2 px-4 rounded-x-full transition-colors
            hover:bg-white/60 hover:rounded-full hover:text-main max-md:rounded-none max-md:block max-md:max-w-[400px] max-md:hover:rounded-none ${
              index == 0 && "border-white border-b border-b-primary bg-white rounded-l-full rounded-r-full text-main"
            } `}
    >
      {children}
    </a>
  );
};

export default NavLink;
