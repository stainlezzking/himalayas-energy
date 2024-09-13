import { cn } from "@/libs/utility";

const Titledash = ({ children, span }) => {
  return (
    <div className="relative">
      <h2 className="text-2xl">{children}</h2>
      <div className="pt-3">
        <span className={cn("block w-[80px] h-1 bg-black ", span)}></span>
      </div>
    </div>
  );
};
export const SubTitleDash = ({ children, span }) => {
  return (
    <div className="relative">
      <h2 className="font-medim">{children}</h2>
      <div className="pt-[6px]">
        <span className={cn("block w-[40px] h-[2px] bg-black ", span)}></span>
      </div>
    </div>
  );
};

export default Titledash;
