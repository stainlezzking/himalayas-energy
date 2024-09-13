import { cn } from "@/libs/utility";

const Button = ({ children, className }) => {
  return <div className={cn("border border-black py-4 px-8 w-fit uppercase ", className)}> {children}</div>;
};

export default Button;
