import { cn } from "@/libs/utility";
import Link from "next/link";

const Button = ({ children, className, path = "" }) => {
  return (
    <Link
      href={path}
      prefetch={false}
      className={cn(
        "border border-black origin-left py-4 px-8 w-fit uppercase flex items-center gap-x-1 group max-md:active:border-primary",
        className
      )}
    >
      <span className="h-1 w-0 transition-[width] origin-left duration-500 ease-out md:group-hover:w-[50px] bg-main"></span>
      <p className="max-md:text-primary md:group-hover:text-primary md:delay-300 md:duration-200">{children}</p>
    </Link>
  );
};

export default Button;
