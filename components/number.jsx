import { cn } from "@/libs/utility";

const PageNumber = ({ children, className }) => {
  return (
    <div
      className={cn("border-b-2 border-b-black relative after:block after:absolute after:top-[8px] after:h-[10px] after:w-full after:bg-primary " + className)}
    >
      <h1 className="text-2xl px-1 relative z-[1]">{children}</h1>
    </div>
  );
};

export default PageNumber;
